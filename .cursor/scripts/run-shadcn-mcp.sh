#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
cd "$PROJECT_ROOT"

# Use the Node version from .nvmrc when a version manager is available.
if command -v fnm >/dev/null 2>&1; then
  eval "$(fnm env --shell bash)"
  fnm use --install-if-missing
elif [ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]; then
  # shellcheck disable=SC1090
  source "${NVM_DIR:-$HOME/.nvm}/nvm.sh"
  nvm install
  nvm use
elif command -v mise >/dev/null 2>&1; then
  eval "$(mise activate bash)"
fi

node -e "
  const [major, minor] = process.versions.node.split('.').map(Number);
  const ok =
    major >= 20 ||
    (major === 18 && minor >= 4) ||
    (major === 16 && minor >= 17);
  if (!ok) {
    console.error(
      'shadcn MCP requires Node >= 20 (recommended), >= 18.4, or >= 16.17. Current: ' +
        process.version
    );
    process.exit(1);
  }
"

exec npx -y shadcn@4.7.0 mcp "$@"
