## Quick Start

```bash
# Install dependencies (Bun)
bun i

bun run serve
```

## Project Structure

```
quartz/
├── vault/                  # Your Obsidian vault (git submodule/clone)
├── public/                 # Generated static site output
├── quartz/                 # Quartz source code
│   ├── plugins/           # Quartz plugins
│   └── ...
├── quartz.config.ts       # Quartz configuration
└── quartz.layout.ts       # Layout configuration
```

## Scripts

- `bun run serve` - Build and serve locally
- `bun run check` - Run TypeScript and oxlint checks
- `bun run format` - Run oxlint with auto-fix

