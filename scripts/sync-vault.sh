#!/bin/bash

# Script to sync/update the Obsidian vault from remote repository
# Deletes the vault directory first to ensure a clean pull

VAULT_DIR="vault"
VAULT_REPO="https://github.com/SauravMaheshkar/vault.git"

echo "🗑️  Removing existing vault directory..."
rm -rf "$VAULT_DIR"

echo "🔄 Cloning fresh vault from $VAULT_REPO..."
git clone "$VAULT_REPO" "$VAULT_DIR"

echo "✅ Vault synced successfully!"
