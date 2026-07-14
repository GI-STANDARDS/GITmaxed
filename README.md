## Description

### Native Multi-Account Support for GitHub Desktop

This PR implements **native multi-account support** for GitHub Desktop, allowing users to sign in to multiple GitHub.com accounts simultaneously without the need for separate instances or workarounds.

> **Note:** This is a working proof-of-concept built by a single developer as a standalone fork (GITmaxed). The core architecture is solid and demonstrates the full flow (sign in → clone → commit → push with correct credentials), but would benefit from additional testing, UI polish, and coordination with the Desktop team's product, design, and security requirements.

#### Core Architecture

The feature introduces a **3-tier account resolution strategy**:

1. **Explicit Assignment** — User manually selects which account a repository belongs to (persisted in IndexedDB)
2. **Folder-Based Detection** — Convention: `GitHub/{account-login}/{repo-name}` — automatically detects account from directory structure
3. **Endpoint-Based Fallback** — Backward-compatible behavior for single-account users

#### Key Changes

| Area | Implementation |
|---|---|
| **Token Storage** | Per-login keys in OS keychain (`endpoint/login` instead of just `endpoint`) — allows multiple tokens for same endpoint |
| **Account Equality** | `accountEquals()` compares by `(endpoint, id)` pair, not just endpoint |
| **API Layer** | New `getAccountsForEndpoint()` returns all accounts sharing an endpoint; `API.fromAccount()` creates account-specific clients |
| **Repository Model** | New `assignedAccountLogin` field persisted in database |
| **Credential Helper** | Trampoline system resolves account via assignment → folder detection → fallback; returns correct token |
| **Commit Authorship** | Local git config (`user.name`/`user.email`) set per-repo on account switch |
| **Clone Dialog** | Account picker dropdown when multiple accounts exist; per-account default directories (`Documents/GitHub/{login}/`) |
| **UI** | Account switcher popover in commit message area (tabbed: "Details" / "Switch Account") |
| **Sidebar** | Smart account resolution — shows correct avatar/author based on repository assignment |

#### Isolation Boundaries

| Dimension | How Isolation Works |
|---|---|
| Token storage | Per-login keys in OS keychain |
| Repository association | `assignedAccountLogin` field in IndexedDB |
| API calls | `API.fromAccount()` creates account-specific client |
| Git credentials | Trampoline resolves account via assignment + folder detection |
| Commit authorship | Local git config set per-repo on account switch |
| Clone paths | Per-account default directories |
| UI | Account picker in clone dialog, switcher in commit avatar |

#### Files Changed

**New Files:**
- `app/src/lib/get-account-for-repository.ts` — Core multi-account resolution engine (188 lines)
- `app/src/lib/trampoline/find-account.ts` — Credential helper account finder with folder detection (139 lines)
- `app/src/ui/changes/commit-message-avatar.tsx` — Account switcher UI (576 lines)

**Modified Files:**
- `app/src/lib/keychain.ts` — Token key format: `endpoint/login`
- `app/src/lib/stores/accounts-store.ts` — Multi-account loading, legacy migration
- `app/src/models/account.ts` — `accountEquals()` compares by (endpoint, id)
- `app/src/lib/api.ts` — `getAccountsForEndpoint()`, `getAccountForEndpoint()`
- `app/src/models/repository.ts` — `assignedAccountLogin` field
- `app/src/lib/stores/repositories-store.ts` — `setAccountForRepository()`
- `app/src/lib/stores/app-store.ts` — `_setRepositoryAccount()`, `autoAssignAccountsByFolder()`
- `app/src/lib/trampoline/trampoline-environment.ts` — `repoPathToAssignedAccount` mapping
- `app/src/ui/clone-repository/clone-repository.tsx` — Account picker, per-account paths
- `app/src/ui/changes/sidebar.tsx` — Smart account resolution
- `app/src/ui/changes/filter-changes-list.tsx` — Passes `onAccountChanged` through
- `app/src/lib/git/config.ts` — `setConfigValue()` for local git config
- `app/src/lib/email.ts` — `lookupPreferredEmail()`
- `app/src/ui/lib/default-dir.ts` — `getDefaultDirForAccount()`, `setDefaultDirForAccount()`

### Screenshots / Video

**Video Demo — Full Multi-Account Workflow:**

https://github.com/user-attachments/assets/c402893c-7d84-4b9f-8322-efa80f2e751b

The video demonstrates:
1. Signing in with two different GitHub accounts
2. Cloning a repository with account-specific folder detection (`GitHub/{username}/repo-name`)
3. Viewing account assignment in the sidebar
4. Switching accounts via the commit message avatar
5. Committing and pushing with correct credentials for each account

### Release notes

Notes: native-multi-account-support

### Notes for Reviewers

This is a **working proof-of-concept** built by a single developer. The core architecture is solid, but there are areas that could benefit from fine-tuning:

- **Testing**: The credential helper flow needs more edge-case testing with SSH key rotation, token expiry, and enterprise accounts
- **UI Polish**: The account switcher popover could use design review for consistency with existing GitHub Desktop patterns
- **Migration**: The legacy token migration path works but could be more robust
- **Error Handling**: Some edge cases in account resolution could be more graceful

**This is not a production-ready feature** — it's a demonstration that multi-account support is feasible within the existing architecture. The implementation is complete enough to show the full flow (sign in → clone → commit → push with correct credentials), but would need additional testing and polish before merging.

Built entirely by **@GI-STANDARDS** as a solo project.

---

**Related:**
- Original tracking issue: #3707
- Previous attempt (closed): #21467 by Mahmadabid
- Fork: [GI-STANDARDS/git-max-mod](https://github.com/GI-STANDARDS/GITmaxed)
