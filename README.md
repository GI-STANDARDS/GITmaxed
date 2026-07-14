# GITmaxed

Multi-account GitHub Desktop — manage multiple GitHub accounts in one app.

## Why GITmaxed?

GitHub Desktop only supports one account at a time. GITmaxed fixes this.

## Features

- Sign in with multiple GitHub.com accounts simultaneously
- Account picker in clone dialog
- Per-account clone directories (`GitHub/{username}/{repo}`)
- Folder-based account auto-detection
- Account switcher in commit area
- Credential isolation per account
- Commit authorship matches assigned account

## Quick Start

### Install
1. Download the release
2. Run `GitHubDesktop.exe`
3. Sign in with your first account
4. Add more accounts in Settings > Accounts

### Build from Source
1. Clone this repo
2. Run `yarn install`
3. Run `yarn build:prod`
4. Run `yarn start`

## Architecture

### 3-Tier Account Resolution
1. Explicit assignment (manual selection)
2. Folder-based detection (`GitHub/{username}/{repo}`)
3. Endpoint fallback (backward compatible)

### Key Files
- `app/src/lib/get-account-for-repository.ts` — Core resolution engine
- `app/src/lib/trampoline/find-account.ts` — Credential helper
- `app/src/ui/changes/commit-message-avatar.tsx` — Account switcher UI

## Limitations

- Windows only (for now)
- No enterprise account support yet
- UI needs polish
- No automated tests for multi-account flows



https://github.com/user-attachments/assets/53c91f6d-0d72-4e2c-8bfe-c241f8029126



## License

MIT
