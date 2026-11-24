#!/bin/bash
# PreToolUse(Bash) commit gate. The real logic is in commit-gate.mjs; this
# wrapper only fails closed when node or the gate script is missing.
dir="${CLAUDE_PROJECT_DIR:-$(pwd)}"
if ! command -v node >/dev/null 2>&1; then
  input=$(cat)
  if printf '%s' "$input" | grep -q 'commit'; then
    echo "commit-gate: node isn't available, so commits can't be checked. Refusing." >&2
    exit 2
  fi
  exit 0
fi
[ -f "$dir/.claude/hooks/commit-gate.mjs" ] || { echo "commit-gate: $dir/.claude/hooks/commit-gate.mjs is missing. Refusing." >&2; exit 2; }
exec node "$dir/.claude/hooks/commit-gate.mjs"
