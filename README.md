<div align="center">

# 🚀 [GITmaxed](https://github.com/GI-STANDARDS/GITmaxed/releases/latest)

### **Multi-Account GitHub Desktop for Power Developers**

Manage **multiple GitHub accounts** in a single GitHub Desktop installation without constantly signing in and out.

![GitHub](https://img.shields.io/badge/GitHub-Desktop-black?logo=github)
![Platform](https://img.shields.io/badge/Platform-Windows-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)
![Multi Account](https://img.shields.io/badge/Feature-Multiple%20Accounts-orange)

---

**One Desktop. Multiple GitHub Accounts. [Check Issue Before Downloading](https://github.com/GI-STANDARDS/GITmaxed/issues/2)**

</div>

---

# ✨ Why GITmaxed?

> [!IMPORTANT]
> **GitHub Desktop currently supports only one signed-in GitHub account at a time.**
>
> GITmaxed removes this limitation by allowing you to use multiple GitHub accounts inside the same application.

Perfect for developers who use:

- 💼 Work account
- 👨‍💻 Personal account
- 🚀 Open Source account
- 🏢 Organization accounts

without repeatedly logging in and out.

---

# 🎯 Features

| Feature | Status |
|---------|:------:|
| 🔐 Multiple GitHub Accounts | ✅ |
| 👤 Account Picker while Cloning | ✅ |
| 📂 Per-Account Repository Folder | ✅ |
| 🤖 Automatic Account Detection | ✅ |
| 🔄 Commit Account Switcher | ✅ |
| 🔒 Credential Isolation | ✅ |
| ✍ Correct Commit Author | ✅ |

---

# 📸 Preview

https://github.com/user-attachments/assets/53c91f6d-0d72-4e2c-8bfe-c241f8029126

---

# ⚡ Quick Start

## 📥 Installation

Download the [Latest Release](https://github.com/GI-STANDARDS/GITmaxed/releases/latest)

```text
1. Launch GitHubDesktop.exe
2. Sign in with your first GitHub account
3. Open:
   Settings → Accounts
4. Add additional GitHub accounts
5. Start working 🚀
```

---

## 🛠 Build From Source

```bash
git clone https://github.com/GI-STANDARDS/GITmaxed

cd GITmaxed

yarn install

yarn build:prod

yarn start
```

---

# 🧠 How It Works

```text
Repository
      │
      ▼
Is Account Assigned?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
 ▼         ▼
Use      Detect Folder
Assigned     │
Account      ▼
        GitHub/{username}/{repo}
               │
        ┌──────┴──────┐
        │             │
     Found         Not Found
        │             │
        ▼             ▼
 Use Matching     Fallback to
    Account      Default Account
```

---

# 🏗 Architecture

## 🧩 3-Tier Account Resolution

```text
1️⃣ Manual Assignment
        │
        ▼
2️⃣ Folder Detection
GitHub/{username}/{repo}
        │
        ▼
3️⃣ Endpoint Fallback
```

This guarantees the correct account is selected whenever possible while remaining fully backward compatible.

---

# 📁 Project Structure

| File | Purpose |
|------|---------|
| `app/src/lib/get-account-for-repository.ts` | 🧠 Core account resolution engine |
| `app/src/lib/trampoline/find-account.ts` | 🔐 Credential helper |
| `app/src/ui/changes/commit-message-avatar.tsx` | 👤 Commit account switcher |

---

# 💡 Example Folder Structure

```text
GitHub
│
├── john-work
│   ├── API
│   ├── Dashboard
│   └── Website
│
├── john-personal
│   ├── Portfolio
│   ├── Game
│   └── AI
│
└── OpenSource
    ├── React
    └── Linux
```

GITmaxed automatically determines which GitHub account should be used based on the repository location.

---

# ✅ Benefits

- 🚀 No constant login/logout
- 🔐 Separate credentials
- 👤 Correct commit author
- 📂 Automatic account selection
- ⚡ Faster workflow
- 🧹 Cleaner repository organization

---

# ⚠ Current Limitations

> [!WARNING]
> This project is still evolving.

Current limitations include:

- Windows only
- GitHub Enterprise not supported yet
- UI still needs refinement
- Automated multi-account testing is not implemented

---

# 📌 Roadmap

- [x] Multiple GitHub accounts
- [x] Credential isolation
- [x] Folder detection
- [x] Commit account switcher
- [ ] GitHub Enterprise support
- [ ] macOS support
- [ ] Linux support
- [ ] UI improvements
- [ ] Automated tests
- [ ] Plugin architecture

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve GITmaxed:

```text
Fork
   │
   ▼
Create Branch
   │
   ▼
Commit Changes
   │
   ▼
Open Pull Request 🚀
```

---

# ⭐ Support

If [GITmaxed](https://github.com/GI-STANDARDS/GITmaxed/releases/latest) saves you time,

⭐ **Star the repository**

and help other developers discover it.

---

# 📜 License

Licensed under the **MIT License**.

---

<div align="center">

### Built with ❤️ by GI-STANDARDS for developers
### managing multiple GitHub identities.

**No more logging in. No more logging out. Just code.**
14-jul-2026 8AM

</div>
