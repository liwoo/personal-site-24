#!/bin/bash
# Tests for the commit gate. Usage: bash .claude/hooks/commit-gate.test.sh
#
# Everything runs in throwaway repos under a mktemp dir with real git
# operations, so this repo's index, refs and .claude/reviews/ are never touched.
set -u
src=$(git rev-parse --show-toplevel) || exit 1
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
err="$tmp/err"

git init -q --bare -b main "$tmp/origin.git"
git init -q -b main "$tmp/repo"
cd "$tmp/repo" || exit 1
git config user.email gate-test@example.invalid
git config user.name "Gate Test"
mkdir -p scripts .githooks .claude/hooks
cp "$src/scripts/"{secret-scan.mjs,ref-gate.mjs} scripts/
cp "$src/.githooks/"* .githooks/
cp "$src/.claude/hooks/"{approve.sh,commit-gate.sh,commit-gate.mjs} .claude/hooks/
chmod +x .githooks/* .claude/hooks/*
printf '.claude/reviews/\n' > .gitignore
echo base > tracked.txt
git add -A
git commit -qm base >/dev/null || { echo "setup commit failed"; exit 1; }
git config core.hooksPath .githooks
git remote add origin "$tmp/origin.git"
git push -q origin main 2>/dev/null

C="com""mit" # keeps the live Claude hook from matching this file's own command line
FAKE_KEY="re_""AbCd1234_ZyXwVuTsRqPoNmLkJiHgFeDcBa"
fail=0
pass_n=0
result() { # result <want> <got> <label>
  if [ "$1" = "$2" ]; then pass_n=$((pass_n + 1)); r=ok; else fail=1; r=FAIL; fi
  printf '%-4s %-8s %s\n' "$r" "$2" "$3"
  [ "$r" = FAIL ] && sed 's/^/       /' "$err" | head -3
  return 0
}
check() { # check <want: ok|blocked> <label> <command...>: did the current branch move?
  want=$1 label=$2; shift 2
  before=$(git rev-parse HEAD)
  ( eval "$*" ) >/dev/null 2>"$err"
  after=$(git rev-parse HEAD)
  [ "$before" != "$after" ] && got=ok || got=blocked
  result "$want" "$got" "$label"
  [ "$got" = ok ] && [ "$want" = blocked ] && git reset -q --soft "$before" 2>/dev/null
  return 0
}
signoff() { .claude/hooks/approve.sh ui-engineer t >/dev/null && .claude/hooks/approve.sh security-reviewer t >/dev/null; }
reset_tree() {
  git checkout -q -f main 2>/dev/null; git reset -q --hard "$(git rev-parse main)"
  git clean -qfd -e .claude/reviews; rm -rf .claude/reviews; git stash clear
}
# A fresh bN.txt staged and signed off; tracked.txt modified but NOT staged.
n=0
staged_b() { reset_tree; n=$((n + 1)); echo "b$n" > "b$n.txt"; git add "b$n.txt"; signoff || echo "TEST SETUP: sign-off failed" >&2; echo changed >> tracked.txt; }

export CLAUDECODE=1
echo "--- git commit from Claude Code ---"
reset_tree; echo a > a.txt; git add a.txt
check blocked "no sign-off" "git $C -m x"
signoff
check ok "both signed off, plain commit" "git $C -m x"
reset_tree; echo b > b.txt; git add b.txt; .claude/hooks/approve.sh ui-engineer t >/dev/null
check blocked "only one reviewer" "git $C -m x"
staged_b; check blocked "-a adds unreviewed changes" "git $C -am x"
staged_b; check blocked "pathspec commits working tree" "git $C -m x tracked.txt"
staged_b; check blocked "--no-verify still gated" "git $C --no-verify -am x"
staged_b; check blocked "inline alias" "git -c alias.ci=$C ci -am x"
staged_b; check blocked "bash heredoc" "bash <<'EOF'
git $C -am x
EOF"
staged_b; check blocked "backtick in message runs git add" 'git '"$C"' -m "Stop using `git add -A`"'
staged_b; check blocked "add in same command" "git add -A && git $C -m x"
staged_b; check ok "unstaged changes left alone" "git $C -m x"
reset_tree; echo d > d.txt; git add d.txt; signoff
check blocked "--amend" "git $C --amend -m x"
check blocked "--amen (abbreviated)" "git $C --amen -m x"
reset_tree; echo "k = \"$FAKE_KEY\"" > leak.js; git add leak.js; signoff
check blocked "secret even with sign-offs" "git $C -m x"
reset_tree; echo X=1 > .env.local; git add -f .env.local; signoff
check blocked ".env file" "git $C -m x"

echo "--- branch moves without git commit (Claude Code) ---"
staged_b; check blocked "reset --soft onto stash create" 'w=$(git stash create) && git reset --soft $w'
staged_b; check blocked "stash + merge --ff-only" "git stash -q && git merge -q --ff-only 'stash@{0}'"
staged_b; check blocked "commit-tree + update-ref" 'git add tracked.txt && t=$(git write-tree) && c=$(echo x | git '"$C"'-tree $t -p HEAD) && git update-ref refs/heads/main $c'
reset_tree; echo patched >> tracked.txt
git diff > "$tmp/p.diff"; git checkout -q -- tracked.txt
printf 'From 0000000000000000000000000000000000000000 Mon Sep 17 00:00:00 2001\nFrom: T <t@t>\nDate: Thu, 1 Jan 2026 00:00:00 +0000\nSubject: [PATCH] p\n\n---\n' > "$tmp/p.patch"; cat "$tmp/p.diff" >> "$tmp/p.patch"
check blocked "git am of an unreviewed patch" "git am -q $tmp/p.patch || { git am --abort; false; }"
reset_tree
check blocked "fast-import into refs/heads" "printf 'commit refs/heads/main\nmark :1\ncommitter T <t@t> 0 +0000\ndata 1\nx\nfrom refs/heads/main^0\nM 644 inline fi.txt\ndata 3\nfi\n\n' | git fast-import --quiet --force"
reset_tree; git clone -q . "$tmp/clone"
(cd "$tmp/clone" && git config core.hooksPath /dev/null && echo cl > cl.txt && git add cl.txt && git -c user.email=t@t -c user.name=t $C -qm clone)
check blocked "ff-merge a commit made in a hookless clone" "git fetch -q $tmp/clone main && git merge -q --ff-only FETCH_HEAD"

echo "--- legit flows (Claude Code) ---"
reset_tree; git checkout -q -b feature; echo f1 > f1.txt; git add f1.txt; signoff
check ok "commit on a feature branch" "git $C -qm f1"
git branch feature2   # same commit, for the merge test below
# Someone else lands work on origin/main.
(cd "$tmp" && git clone -q origin.git other && cd other && echo up > up.txt && git add up.txt &&
  git -c user.email=o@o -c user.name=o $C -qm upstream && git push -q origin main) >/dev/null 2>&1
git fetch -q origin
before=$(git rev-parse feature)
( git rebase -q origin/main ) >/dev/null 2>"$err"
[ "$(git rev-parse feature)" != "$before" ] && [ ! -d "$(git rev-parse --git-path rebase-merge)" ] && got=ok || got=blocked
result ok "$got" "rebase feature onto updated origin/main (completes)"
[ -d "$(git rev-parse --git-path rebase-merge)" ] && git rebase --abort
git checkout -q -b picked origin/main
check ok "cherry-pick a gated commit" "git cherry-pick feature2"
git checkout -q feature2
check ok "merge origin/main (clean merge)" "git merge -q --no-edit origin/main"
# A conflicted merge: the resolution is new content, so it needs sign-off.
git checkout -q -b conflict "$(git merge-base feature2 origin/main)"; echo mine > up.txt; git add up.txt; signoff; git commit -qm mine >/dev/null 2>&1
git merge -q origin/main >/dev/null 2>&1; echo resolved > up.txt; git add up.txt
check blocked "conflicted merge, resolution not reviewed" "git $C -q --no-edit"
signoff
check ok "conflicted merge, resolution signed off" "git $C -qm resolved"
git checkout -q feature2
before=$(git ls-remote "$tmp/origin.git" refs/heads/feature)
( git push -q origin feature feature2 ) >/dev/null 2>"$err"
[ "$(git ls-remote "$tmp/origin.git" refs/heads/feature)" != "$before" ] && got=ok || got=blocked
result ok "$got" "push a gated branch"
reset_tree
before=$(git ls-remote "$tmp/origin.git" refs/heads/sneaky)
( git fetch -q "$tmp/clone" main && git push -q origin FETCH_HEAD:refs/heads/sneaky ) >/dev/null 2>"$err"
[ "$(git ls-remote "$tmp/origin.git" refs/heads/sneaky)" = "$before" ] && got=blocked || got=ok
result blocked "$got" "push an unreviewed FETCH_HEAD to the remote"

echo "--- smuggling routes (Claude Code) ---"
export CLAUDECODE=1
reset_tree
echo "k = \"$FAKE_KEY\"" > sm.js; git add sm.js; t=$(git write-tree); git reset -q; rm sm.js
c=$(echo x | git $C-tree "$t" -p HEAD)
( git update-ref refs/remotes/x/y "$c" ) >/dev/null 2>"$err"
git rev-parse -q --verify refs/remotes/x/y >/dev/null && got=ok || got=blocked
result blocked "$got" "secret commit into refs/remotes via update-ref"
git update-ref -d refs/remotes/x/y 2>/dev/null
# Whitespace twin: a broken-up key on a side branch, the joined key via plumbing on main.
reset_tree; git checkout -q -b side
printf 'k = "%s %s"\n' "${FAKE_KEY:0:12}" "${FAKE_KEY:12}" > twin.js; git add twin.js; signoff; git $C -qm side >/dev/null 2>&1
git checkout -q main; echo "k = \"$FAKE_KEY\"" > twin.js; git add twin.js; t=$(git write-tree); git reset -q; rm twin.js
c=$(echo x | git $C-tree "$t" -p HEAD)
check blocked "patch-id twin of a reviewed commit carrying a real key" "git update-ref refs/heads/main $c"
# Annotated tag on a commit that isn't on any branch, then push the tag.
reset_tree; ( git fetch -q "$tmp/clone" main && git tag -a -m t vsmuggle FETCH_HEAD && git push -q origin vsmuggle ) >/dev/null 2>"$err"
git ls-remote --tags "$tmp/origin.git" | grep -q vsmuggle && got=ok || got=blocked
result blocked "$got" "push an annotated tag of an ungated commit"
git tag -d vsmuggle >/dev/null 2>&1

echo "--- git replace (Claude Code and human) ---"
replace_cases() { # replace_cases <label suffix>
  n=$((n + 1))
  # (a) A secret commit made to look like a reviewed one, then branched and pushed.
  reset_tree; echo ok > feat$n.js; git add feat$n.js; signoff; git $C -qm feat >/dev/null 2>&1; good=$(git rev-parse HEAD)
  echo "k = \"$FAKE_KEY\"" > feat$n.js; git add feat$n.js; t=$(git write-tree); git reset -q --hard HEAD
  bad=$(echo feat | git $C-tree "$t" -p HEAD~1)
  ( git replace "$bad" "$good" && git update-ref refs/heads/c2 "$bad" && git push -q origin c2 ) >/dev/null 2>"$err"
  git ls-remote "$tmp/origin.git" refs/heads/c2 | grep -q . && got=ok || got=blocked
  result blocked "$got" "replaced commit + update-ref + push ($1)"
  git replace -d "$bad" >/dev/null 2>&1; git update-ref -d refs/heads/c2 2>/dev/null
  # (b) A staged secret blob disguised as a clean one.
  reset_tree; echo clean > blob$n.js; clean=$(git hash-object -w blob$n.js)
  echo "k = \"$FAKE_KEY\"" > blob$n.js; secret=$(git hash-object -w blob$n.js); git add blob$n.js; signoff
  check blocked "replaced staged blob + git commit ($1)" "git replace $secret $clean && git $C -m x"
  git replace -d "$secret" >/dev/null 2>&1
}
export CLAUDECODE=1
replace_cases "Claude Code"
unset CLAUDECODE
replace_cases "human"

echo "--- human commits (no CLAUDECODE) ---"
unset CLAUDECODE
reset_tree; echo h > h.txt; git add h.txt
check ok "human, clean, no sign-off needed" "git $C -m x"
reset_tree; echo "k = \"$FAKE_KEY\"" > leak.js; git add leak.js
check blocked "human, secret" "git $C -m x"
check blocked "human, secret, --no-verify" "git $C --no-verify -m x"
check blocked "human, secret via commit-tree/update-ref" 't=$(git write-tree) && c=$(echo x | git '"$C"'-tree $t -p HEAD) && git update-ref refs/heads/main $c'
reset_tree

echo "--- Claude PreToolUse guard ---"
export CLAUDE_PROJECT_DIR=$tmp/repo
g() { # g <want exit> <command>
  printf '{"tool_input":{"command":%s}}' "$(node -e 'console.log(JSON.stringify(process.argv[1]))' "$2")" |
    .claude/hooks/commit-gate.sh >/dev/null 2>"$err"
  result "$1" "$?" "guard: $2"
}
g 0 "ls -la && git status"
g 0 "git $C -m \"x\" && git push"
g 0 "git $C -m \"Gate update-ref, $C-tree and core.hooksPath changes\""
g 0 "grep -rn hooksPath CLAUDE.md"
g 0 "git log -S update-ref"
g 0 "git config core.hooksPath .githooks"
g 0 "git config core.hooksPath"
g 0 "git push -n origin main"
g 2 "git -c core.hooksPath=/dev/null $C -m x"
g 2 "git -c include.path=/tmp/x.cfg $C -am x"
g 2 "GIT_CONFIG_COUNT=1 GIT_CONFIG_KEY_0=core.hooksPath GIT_CONFIG_VALUE_0=/dev/null git $C -m x"
g 2 "git --config-env=core.hooksPath=X $C -m x"
g 2 "git config core.hooksPath /dev/null"
g 2 "git config --unset core.hooksPath"
g 2 "git c''onfig \"core.hooksPath\" /tmp/x"
g 2 "git config include.path /tmp/x.cfg"
g 2 "git push --no-verify origin main"
g 2 "git push --no-veri origin HEAD:refs/heads/x"
g 2 "git replace abc123 def456"
g 2 "git -C . replace -f abc def"
g 0 "git $C -m \"replace the logo\""
g 2 "git send-pack ../o.git HEAD:refs/heads/x"
g 2 "git update-ref refs/remotes/x/y HEAD"
g 2 "git fetch /tmp/clone main:refs/remotes/x/y"
g 0 "git fetch origin"
g 0 "git fetch -q origin main:refs/remotes/origin/main"
chmod -x .githooks/reference-transaction
g 2 "git $C -m x"
chmod +x .githooks/reference-transaction
git config --unset core.hooksPath
g 2 "git $C -m x"
git config core.hooksPath .githooks

echo
echo "$pass_n passed$([ $fail = 0 ] && echo ', all ok' || echo ', FAILURES above')"
exit $fail
