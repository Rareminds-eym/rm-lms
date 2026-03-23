# 🐶 Husky Configuration - Complete Documentation

## ✅ Status: Fully Configured & Working

Husky 9.1.7 is properly installed with 3 git hooks enforcing code quality.

---

## 📋 Overview

### What is Husky?

Husky manages Git hooks to run scripts automatically at specific Git lifecycle events (commit, push, etc.). This ensures code quality before changes are committed or pushed.

### Why Use It?

- ✅ Prevents bad commits from entering the codebase
- ✅ Auto-fixes code issues before commit
- ✅ Enforces commit message standards
- ✅ Catches errors before CI/CD runs
- ✅ Saves time by catching issues early

---

## 🎯 Configured Git Hooks

### 1. pre-commit Hook

**File**: `.husky/pre-commit`  
**Trigger**: Before every `git commit`  
**Speed**: Fast (only staged files)

```bash
npx lint-staged
```

**What it does:**

- 🔒 **Secretlint**: Scans ALL staged files for exposed secrets/API keys
- 🔧 **ESLint**: Auto-fixes JS/TS issues in staged `.ts,.tsx,.js,.jsx` files
- 🎨 **Stylelint**: Auto-fixes CSS issues in staged `.css` files
- ✨ **Prettier**: Formats staged `.ts,.tsx,.js,.jsx,.css,.json,.md` files

**Configuration**: `.lintstagedrc.json`

```json
{
  "*": ["secretlint"],
  "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{css}": ["stylelint --fix", "prettier --write"],
  "*.{json,md}": ["prettier --write"]
}
```

**Example:**

```bash
$ git add src/App.tsx
$ git commit -m "feat: add feature"

⚠ Detected incorrect braces with only single value: `*.{css}`. Reformatted as: `*.css`
[STARTED] Running tasks for staged files...
[STARTED] *.{ts,tsx,js,jsx} — 1 file
[STARTED] eslint --fix
[COMPLETED] eslint --fix
[STARTED] prettier --write
[COMPLETED] prettier --write
[COMPLETED] *.{ts,tsx,js,jsx} — 1 file
[COMPLETED] Running tasks for staged files...
✅ Commit proceeds
```

---

### 2. commit-msg Hook

**File**: `.husky/commit-msg`  
**Trigger**: After commit message is written  
**Speed**: Instant

```bash
npx --no -- commitlint --edit $1
```

**What it does:**

- ✅ Validates commit message follows Conventional Commits format
- ❌ Blocks commits with invalid format

**Configuration**: `commitlint.config.js`

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Code style (formatting)
        'refactor', // Code refactoring
        'perf', // Performance improvement
        'test', // Tests
        'build', // Build system
        'ci', // CI/CD
        'chore', // Maintenance
        'revert', // Revert commit
      ],
    ],
    'body-max-line-length': [0, 'always', Infinity],
    'footer-max-line-length': [0, 'always', Infinity],
  },
};
```

**Valid commit formats:**

```bash
✅ feat: add user authentication
✅ fix: resolve login bug
✅ feat(auth): add OAuth support
✅ fix(api): handle null response
✅ docs: update README
✅ chore: update dependencies
```

**Invalid commit formats:**

```bash
❌ Add feature          # Missing type
❌ added feature        # Wrong tense
❌ feature: add login   # Invalid type
❌ feat add login       # Missing colon
```

**Example:**

```bash
$ git commit -m "added new feature"

⧗   input: added new feature
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]
✖   found 2 problems, 0 warnings

❌ Commit blocked
```

---

### 3. pre-push Hook

**File**: `.husky/pre-push`  
**Trigger**: Before `git push`  
**Speed**: Slower (full validation)

```bash
npm run type-check
npm run lint
npm run build
```

**What it does:**

1. **Type Check**: Runs `tsc --noEmit` to verify TypeScript types
2. **Lint**: Runs full ESLint + Stylelint on entire codebase
3. **Build**: Tests production build to ensure it compiles

**Why this hook?**

- Prevents pushing broken code to remote
- Catches issues before CI/CD runs
- Ensures production build works

**Example:**

```bash
$ git push origin main

> lms@0.1.0 type-check
> tsc --noEmit
✅ No type errors

> lms@0.1.0 lint
> npm-run-all lint:js lint:css
✅ No lint errors

> lms@0.1.0 build
> tsc && vite build
✓ built in 720ms
✅ Build successful

✅ Push proceeds
```

---

## 🔧 Installation & Setup

### Already Installed ✅

```json
{
  "devDependencies": {
    "husky": "^9.1.7",
    "lint-staged": "^16.4.0",
    "@commitlint/cli": "^20.5.0",
    "@commitlint/config-conventional": "^20.5.0"
  },
  "scripts": {
    "prepare": "husky"
  }
}
```

### How It Works

1. When you run `npm install`, the `prepare` script runs
2. `husky` command sets up Git hooks in `.husky/_/`
3. Git is configured to use `.husky/_/` as hooks path
4. Hooks are now active for all Git operations

### Verify Installation

```bash
# Check Husky is installed
npm ls husky
# Output: husky@9.1.7

# Check Git hooks path
git config core.hooksPath
# Output: .husky/_

# Check hooks are executable
ls -la .husky/
# Output: -rwxrwxrwx pre-commit, commit-msg, pre-push
```

---

## 📊 Hook Execution Flow

```
Developer Workflow:
┌─────────────────────────────────────────────────────────┐
│  1. Edit files: src/App.tsx                             │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  2. Stage changes: git add src/App.tsx                  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  3. Commit: git commit -m "feat: add feature"           │
└─────────────────────────────────────────────────────────┘
                          ↓
              ┌───────────────────────┐
              │   PRE-COMMIT HOOK     │
              │   ─────────────────   │
              │   • Secretlint        │ ← Scans for secrets
              │   • ESLint --fix      │ ← Auto-fixes code
              │   • Stylelint --fix   │ ← Auto-fixes styles
              │   • Prettier          │ ← Formats code
              │   ⏱️  ~2-5 seconds     │
              └───────────────────────┘
                          ↓
              ┌───────────────────────┐
              │   COMMIT-MSG HOOK     │
              │   ─────────────────   │
              │   • Commitlint        │ ← Validates format
              │   ⏱️  <1 second        │
              └───────────────────────┘
                          ↓
              ✅ Commit Created
                          ↓
┌─────────────────────────────────────────────────────────┐
│  4. Push: git push origin main                          │
└─────────────────────────────────────────────────────────┘
                          ↓
              ┌───────────────────────┐
              │   PRE-PUSH HOOK       │
              │   ─────────────────   │
              │   • Type check        │ ← tsc --noEmit
              │   • Full lint         │ ← All files
              │   • Build test        │ ← Production build
              │   ⏱️  ~10-30 seconds   │
              └───────────────────────┘
                          ↓
              ✅ Push Succeeds
                          ↓
┌─────────────────────────────────────────────────────────┐
│  5. CI/CD runs on remote (GitHub Actions)               │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Usage Examples

### Normal Workflow (Everything Passes)

```bash
# 1. Make changes
$ vim src/App.tsx

# 2. Stage changes
$ git add src/App.tsx

# 3. Commit (hooks run automatically)
$ git commit -m "feat: add new component"
✔ Running tasks for staged files...
✔ Commitlint validation passed
[main abc1234] feat: add new component
 1 file changed, 10 insertions(+)

# 4. Push (pre-push hook runs)
$ git push origin main
✔ Type check passed
✔ Lint passed
✔ Build passed
Enumerating objects: 5, done.
```

### When Hooks Fail

**Scenario 1: Code Quality Issues**

```bash
$ git commit -m "feat: add feature"
✖ ESLint found errors:
  src/App.tsx
    5:10  error  'unused' is defined but never used  @typescript-eslint/no-unused-vars

✖ lint-staged failed
husky - pre-commit script failed (code 1)
```

**Fix**: Remove unused variable, then commit again

**Scenario 2: Invalid Commit Message**

```bash
$ git commit -m "added feature"
✖ type may not be empty [type-empty]
✖ found 1 problems, 0 warnings
husky - commit-msg script failed (code 1)
```

**Fix**: Use proper format: `git commit -m "feat: add feature"`

**Scenario 3: Build Fails**

```bash
$ git push origin main
> tsc --noEmit
src/App.tsx:10:5 - error TS2322: Type 'string' is not assignable to type 'number'.
✖ Type check failed
husky - pre-push script failed (code 1)
```

**Fix**: Fix TypeScript errors, commit, then push again

---

## 🛠️ Bypassing Hooks (Emergency Only)

### Skip pre-commit and commit-msg

```bash
git commit --no-verify -m "feat: emergency fix"
# or
git commit -n -m "feat: emergency fix"
```

### Skip pre-push

```bash
git push --no-verify
# or
git push -n
```

⚠️ **Warning**: Only use in emergencies! Bypassing hooks can introduce bugs.

---

## 🔍 Troubleshooting

### Hooks Not Running

```bash
# Reinstall Husky
npm run prepare

# Check Git config
git config core.hooksPath
# Should output: .husky/_

# Check hooks are executable
chmod +x .husky/pre-commit .husky/commit-msg .husky/pre-push
```

### Hooks Running Twice

- Check for duplicate hooks in `.git/hooks/`
- Remove any `.sample` files that were modified

### Slow pre-commit Hook

- Normal: lint-staged only runs on staged files
- If slow, check how many files are staged
- Consider splitting large commits

### Commitlint Not Working

```bash
# Test commitlint manually
echo "feat: test" | npx commitlint
# Should pass

echo "invalid" | npx commitlint
# Should fail
```

---

## 📚 Additional Resources

### Commit Message Examples

```bash
# Features
feat: add user authentication
feat(auth): implement OAuth2
feat(api): add user endpoints

# Bug Fixes
fix: resolve login redirect issue
fix(ui): correct button alignment
fix(api): handle null responses

# Documentation
docs: update README with setup instructions
docs(api): add endpoint documentation

# Refactoring
refactor: simplify authentication logic
refactor(utils): extract helper functions

# Performance
perf: optimize image loading
perf(api): add response caching

# Tests
test: add unit tests for auth service
test(e2e): add login flow tests

# Chores
chore: update dependencies
chore(deps): bump react to 19.2.4
```

### Related Files

- `.husky/pre-commit` - Pre-commit hook script
- `.husky/commit-msg` - Commit message validation
- `.husky/pre-push` - Pre-push validation
- `.lintstagedrc.json` - Lint-staged configuration
- `commitlint.config.js` - Commitlint rules
- `package.json` - Husky prepare script

### Documentation Links

- [Husky Documentation](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [commitlint](https://commitlint.js.org/)

---

## ✅ Verification Checklist

- [x] Husky 9.1.7 installed
- [x] Git hooks path configured (`.husky/_`)
- [x] pre-commit hook executable and working
- [x] commit-msg hook executable and working
- [x] pre-push hook executable and working
- [x] lint-staged configured
- [x] commitlint configured
- [x] All hooks tested and passing
- [x] Documentation complete

---

**Last Updated**: 2026-03-23  
**Husky Version**: 9.1.7  
**Status**: ✅ Production Ready
