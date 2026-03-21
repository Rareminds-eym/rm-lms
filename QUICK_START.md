# Quick Start Guide

Get up and running in 5 minutes!

## 🚀 Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 🔥 Most Used Commands

```bash
# Development
npm start                    # Start dev server
npm test                     # Run tests

# Code Quality
npm run lint:fix            # Fix all linting issues
npm run format              # Format all code

# Validation
npm run validate            # Run all checks (before PR)

# Docker
npm run docker:build        # Build Docker image
npm run docker:run          # Run in container
```

## 📝 Commit Messages

Use this format:

```bash
git commit -m "feat: add new feature"
git commit -m "fix: resolve bug"
git commit -m "docs: update readme"
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 🎯 Before Pushing

```bash
npm run validate
```

This runs:

- ✅ Type checking
- ✅ Linting
- ✅ Format checking
- ✅ Tests with coverage
- ✅ Production build

## 🐛 Troubleshooting

### Build fails?

```bash
npm run clean
npm install
npm run build
```

### Git hooks not working?

```bash
npx husky install
```

### Tests failing?

```bash
npm test -- --clearCache
npm test
```

## 📚 Documentation

- [README.md](README.md) - Project overview
- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - Architecture details
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) - Deployment guide
- [docs/SETUP_SUMMARY.md](docs/SETUP_SUMMARY.md) - Complete setup details

## 🆘 Need Help?

1. Check [docs/CHECKLIST.md](docs/CHECKLIST.md)
2. Read [CONTRIBUTING.md](CONTRIBUTING.md)
3. Open an issue on GitHub

## ⚡ Pro Tips

- Use `npm run lint:fix` before committing
- Run `npm run validate` before creating PR
- Check `.vscode/extensions.json` for recommended extensions
- Use `npm run docker:dev` for containerized development

---

**Ready to code!** 🎉
