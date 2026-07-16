# Contributing to GITmaxed

:+1: :tada: :sparkling_heart: Thanks for your interest! :sparkling_heart: :tada: :+1:

The following is a set of guidelines for contributing to GITmaxed. These are just guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

Note that GITmaxed is an evolving project, so expect things to change over time as we learn, listen and refine how we work with the community.

#### Table Of Contents

- [What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Code of Conduct](#code-of-conduct)

- [How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Help Wanted](#help-wanted)

- [Development Setup](#development-setup)

## What should I know before I get started?

### Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](../CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.
Please report unacceptable behavior to gitmaxed@outlook.com.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for GITmaxed.
Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report)
as you might find out that you don't need to create one. When you are creating
a bug report, please include as many details as possible.

#### Before Submitting A Bug Report

**Perform a cursory search** to see if the problem has already been reported. If it does exist, add a thumbs-up to the issue to indicate this is also an issue for you, and add a comment to the existing issue if there is extra information you can contribute.

#### How Do I Submit A Bug Report?

Bugs are tracked as GitHub issues. Simply create an issue and fill out the provided issue template.

The information we are interested in includes:

 - details about your environment - which build, which operating system
 - details about reproducing the issue - what steps to take, what happens, how often it happens
 - other relevant information - log files, screenshots, etc

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for GITmaxed, including completely new features and minor improvements to existing functionality.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion)
as you might find out that you don't need to create one.

#### Before Submitting An Enhancement Suggestion

**Perform a cursory search** to see if the enhancement has already been suggested. If it has, add a thumbs-up to indicate your interest in it, or comment if there is additional information you would like to add.

#### How Do I Submit An Enhancement Suggestion?

Enhancement suggestions are tracked as GitHub issues. Simply create an issue and fill out the provided issue template.

Some additional advice:

* **Use a clear and descriptive title** for the feature request
* **Provide a step-by-step description of the suggested enhancement**
* **Explain why this enhancement would be useful** to GITmaxed users
* **Include screenshots and animated GIFs** if relevant

### Help Wanted

As part of building GITmaxed, we'll identify tasks that are good for external contributors to pick up. These tasks:

 - have low impact, or have a known workaround
 - should be addressed
 - have a narrow scope and/or easy reproduction steps
 - can be worked on independent of other tasks

These issues will be labelled as `help wanted` in the repository. If you are interested in contributing to the project, please comment on the issue to let the core team (and the community) know you are interested in the issue.

## Development Setup

### Prerequisites

- **Node.js** — v22 (check `.node-version` in the repo)
- **Yarn** — v4 (check `.yarnrc` in the repo)
- **Visual Studio Build Tools** — With "Desktop development with C++" workload
- **Windows 10/11** — 64-bit

### Getting Started

```bash
# Clone the repository
git clone https://github.com/GI-STANDARDS/GITmaxed.git
cd GITmaxed

# Install dependencies
yarn install

# Build native modules
cd app
node-gyp rebuild
cd ..

# Build the app
yarn build:prod
```

### Running Tests

```bash
# Run all unit tests
yarn test

# Run specific test file
yarn test <file>

# Run ESLint
yarn lint
```

## Style Guide

Please follow the existing code style and conventions in the codebase. See `copilot-instructions.md` for detailed TypeScript and React conventions.

## License

By contributing to GITmaxed, you agree that your contributions will be licensed under the MIT License.
