# GITmaxed - Copilot Instructions

This repository contains GITmaxed, a multi-account GitHub Desktop client that allows managing multiple GitHub accounts in one app. Built on Electron with TypeScript and React.

## Technology Stack

- **Language**: TypeScript (strict mode enabled)
- **UI Framework**: React 16.x
- **Runtime**: Electron > 38.x (see `.npmrc` for specific version)
- **Build Tool**: Webpack with parallel builds
- **Package Manager**: Yarn (>= 1.21.1)
- **Node Version**: >= 22 (see `.nvmrc` for specific version)
- **Testing**: Node.js built-in test runner (run using `yarn test`)

## Key Features

- **Multiple GitHub accounts** — Sign in with multiple GitHub.com accounts simultaneously
- **Account picker in clone dialog** — Select which account to use when cloning
- **Per-account clone directories** — Repositories clone to `Documents/GitHub/{username}/{repo-name}`
- **Folder-based auto-detection** — Auto-detects account from folder structure
- **Account switcher in commit area** — Switch accounts per-repo via the avatar popover
- **Credential isolation** — Each account's token is used for push/pull on its repositories
- **Commit authorship** — Local git config updates to match the assigned account

## Code Style & Conventions

### TypeScript Style

- Avoid creating new classes unless necessary; prefer functions and interfaces/types
- Avoid using enums; prefer union types of string literals instead
- **Use strict TypeScript** with all strict mode checks enabled
- **Naming conventions**:
  - PascalCase for classes
  - camelCase for methods and properties
  - Interfaces MUST start with `I` prefix (e.g., `IRepository`, `ICommit`)
- **Type safety**:
  - Avoid using `as` for type assertions, prefer proper type narrowing and guards
  - Use the `assertNever` helper for exhaustiveness checks
  - Avoid non-null assertions (`!`) unless absolutely necessary
  - Avoid `any` unless absolutely necessary
- **Member ordering in classes**:
  1. Static fields
  2. Static methods
  3. Instance fields
  4. Abstract methods
  5. Constructor
  6. Instance methods
- **Visibility modifiers**: Always use explicit member accessibility (`public`, `private`, `protected`)
- **Avoid default exports**: Use named exports only

### React Conventions

- **Props and State**: Always use `readonly` for props and state types
- **JSX**: Always use explicit boolean values (e.g., `<Component visible={true} />`)
- **No binding in JSX**: Use arrow functions or pre-bind methods
- **No string refs**: Use React refs API instead
- **Accessibility**: Autofocus is allowed when used appropriately

### Immutability & Pure Functions

- **Prefer `const` over `let`**: Use `const` whenever possible
- **Prefer ternary over reassignment**: Use `const a = condition ? value : otherValue`
- **Pure functions**: Write functions that operate only on their parameters when possible
- **Lift computation logic**: Separate data gathering from data processing
- **Use readonly arrays**: Mark arrays and objects as `readonly` in interfaces

### Import Restrictions

- **Never import `ipcRenderer` directly** from `electron` or `electron/renderer`
- **Never import `ipcMain` directly** from `electron` or `electron/main`

### Code Quality

- **Curly braces**: Always use curly braces for control structures
- **Strict equality**: Use `===` and `!==`
- **No `eval`**: Never use `eval()`
- **No `var`**: Use `const` or `let`
- **Async operations**: Use async/await, avoid synchronous Node.js APIs

### Documentation

- **Use JSDoc format** for documentation with `/**` opener
- **Document public APIs**: All public classes, methods, and properties should have JSDoc comments
- **Format**: Use a short title line followed by blank line before detailed description

## Building & Testing

### Development Workflow

```bash
# Install dependencies
yarn

# Development build
yarn build:dev
```

### Testing

```bash
# Run all unit tests
yarn test

# Run specific test file
yarn test <file>

# Run tests in directory
yarn test <directory>

# Run ESLint tests
yarn test:eslint
```

### Linting

```bash
# Run all linters
yarn lint

# Fix auto-fixable issues
yarn lint:fix

# Lint source code
yarn lint:src

# Format with Prettier
yarn prettier
```

## Multi-Account Architecture

### 3-Tier Account Resolution

GITmaxed resolves which account to use for a repository using three layers:

1. **Explicit Assignment** — You manually select which account a repository belongs to
2. **Folder-Based Detection** — Convention: `GitHub/{account-login}/{repo-name}`
3. **Endpoint Fallback** — If no match is found, the first account for the endpoint is used

### Key Files

| File | Purpose |
|---|---|
| `app/src/lib/get-account-for-repository.ts` | Core account resolution engine |
| `app/src/lib/trampoline/find-account.ts` | Credential helper account finder |
| `app/src/lib/stores/accounts-store.ts` | Multi-account token storage |
| `app/src/models/account.ts` | Account model with `accountEquals()` |
| `app/src/ui/changes/commit-message-avatar.tsx` | Account switcher UI |

## Security & Quality

### Security

- **Never commit secrets, passwords, or sensitive data**
- **Validate and sanitize user input**
- **Follow secure coding practices**: Review code for XSS, injection, and other vulnerabilities
- **Report security issues**: Use private vulnerability reporting, not public issues

### Git Practices

- **Follow commit message conventions**: Clear, descriptive commit messages
- **Reference issues**: Include issue numbers in commits when applicable

## Project Structure

- **`app/`**: Application source code and assets
  - `app/src/`: TypeScript source files
  - `app/test/`: Test files
  - `app/static/`: Static assets
  - `app/styles/`: SASS stylesheets
- **`script/`**: Build and utility scripts
- **`docs/`**: Documentation
  - `docs/contributing/`: Contributor guides
  - `docs/process/`: Process documentation
  - `docs/technical/`: Technical documentation
- **`eslint-rules/`**: Custom ESLint rules
- **`.github/`**: GitHub-specific files (issue templates, contributing guide)

## Contributing

- See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines
- Follow the existing code style and conventions
- Test with multiple accounts when making changes to multi-account functionality

## Code of Conduct

This project adheres to the Contributor Covenant [Code of Conduct](../CODE_OF_CONDUCT.md). All interactions must be respectful and professional.

## When Making Changes

1. **Keep changes minimal**: Make the smallest possible changes to achieve the goal
2. **Run tests frequently**: Test after each meaningful change
3. **Run `yarn lint:fix` after any code change**: This runs Prettier and ESLint with auto-fix
4. **Update documentation**: Update docs if changes affect documented behavior
5. **Follow existing patterns**: Match the style and patterns already in the codebase
6. **Don't remove working code**: Only modify what's necessary for the task
7. **Test multi-account flows**: If changing account-related code, test with multiple accounts
