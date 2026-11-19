#!/bin/bash
# Record a reviewer's sign-off on the currently staged tree.
# Usage: .claude/hooks/approve.sh <ui-engineer|security-reviewer> "<one-line verdict>"
# Only the reviewer agent itself should run this, and only after approving.
set -e
agent=$1
shift || true
case "$agent" in
  ui-engineer | security-reviewer) ;;
  *) echo "usage: approve.sh <ui-engineer|security-reviewer> \"verdict\"" >&2; exit 1 ;;
esac
cd "$(git rev-parse --show-toplevel)"
if git diff --cached --quiet; then
  echo "approve.sh: nothing is staged. Stage the changes first, then review." >&2
  exit 1
fi
mkdir -p .claude/reviews
tree=$(git write-tree)
echo "$tree $(date -u +%Y-%m-%dT%H:%M:%SZ) ${*:-approved}" > ".claude/reviews/$agent"
echo "$agent signed off on staged tree $tree"
