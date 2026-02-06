#!/bin/bash

# Script to sync/update the Obsidian vault from remote repository
# Deletes the vault directory first to ensure a clean pull

set -e  # Exit on error

VAULT_DIR="vault"
VAULT_REPO_BASE="github.com/SauravMaheshkar/vault.git"

echo "🗑️  Removing existing vault directory..."
rm -rf "$VAULT_DIR"

echo "🔄 Cloning fresh vault..."

# Use VAULT_TOKEN if available (for CI), otherwise use default git credentials (for local)
if [ -n "$VAULT_TOKEN" ]; then
    echo "   Using authentication token..."
    git clone "https://x-access-token:${VAULT_TOKEN}@${VAULT_REPO_BASE}" "$VAULT_DIR"
else
    echo "   Using default git credentials..."
    git clone "https://${VAULT_REPO_BASE}" "$VAULT_DIR"
fi

if [ -d "$VAULT_DIR" ] && [ "$(ls -A $VAULT_DIR)" ]; then
    echo "✅ Vault synced successfully!"
else
    echo "❌ Error: Vault sync failed - directory is empty or missing"
    exit 1
fi
