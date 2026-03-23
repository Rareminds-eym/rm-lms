# LMS - Learning Management System

[![CI](https://github.com/Rareminds-eym/rm-lms/workflows/CI/badge.svg)](https://github.com/Rareminds-eym/rm-lms/actions)
[![codecov](https://codecov.io/gh/Rareminds-eym/rm-lms/branch/main/graph/badge.svg)](https://codecov.io/gh/Rareminds-eym/rm-lms)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern Learning Management System built with React and TypeScript.

## Features

- ⚡ React 19 with TypeScript
- 🎨 Modern UI with CSS
- 🧪 Testing with Vitest and React Testing Library
- 📦 Production-ready build configuration with Vite
- 🔍 ESLint + Prettier + Stylelint for code quality
- 🐶 Husky for Git hooks
- 📝 Conventional commits with Commitlint
- 🚀 CI/CD with GitHub Actions

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

For detailed setup instructions, see [TEAM_ONBOARDING.md](TEAM_ONBOARDING.md)

## Available Scripts

### Development

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests in watch mode
- `npm run test:ci` - Run tests once with coverage
- `npm run test:coverage` - Generate coverage report

### Code Quality

- `npm run lint` - Lint all code (JS/TS + CSS)
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run secretlint` - Check for secrets/credentials in code

### Utilities

- `npm run validate` - Run all checks (type-check, lint, format, secretlint, test, build)
- `npm run clean` - Clean build artifacts and cache

## Project Structure

```
lms/
├── .github/              # GitHub configuration
│   ├── workflows/        # CI/CD workflows
│   ├── CODEOWNERS        # Code ownership rules (PROTECTED)
│   └── ISSUE_TEMPLATE/   # Issue templates
├── .husky/               # Git hooks (PROTECTED)
├── .vscode/              # VS Code settings
├── docs/                 # Documentation
│   └── CONFIGURATION_PROTECTION.md  # Config protection guide
├── public/               # Static files
├── src/                  # Source code (FSD architecture)
│   ├── app/              # Application layer
│   ├── pages/            # Pages layer
│   ├── widgets/          # Widgets layer
│   ├── features/         # Features layer
│   ├── entities/         # Entities layer
│   ├── shared/           # Shared layer
│   └── index.tsx         # Entry point
├── eslint.config.js      # ESLint configuration (PROTECTED)
├── tsconfig.json         # TypeScript configuration (PROTECTED)
├── vite.config.ts        # Vite configuration (PROTECTED)
└── package.json          # Dependencies and scripts (PROTECTED)
```

**Note**: Files marked (PROTECTED) require code owner approval to modify. See [Configuration Protection Guide](docs/CONFIGURATION_PROTECTION.md).

## Architecture

This project follows **Feature-Sliced Design (FSD)** methodology with strict layer boundaries enforced by ESLint:

- **app** - Application initialization, providers, global styles
- **pages** - Route pages and page compositions
- **widgets** - Large composite UI blocks
- **features** - User interactions and business features
- **entities** - Business entities and their logic
- **shared** - Reusable utilities, UI kit, API clients

**Import rules** (enforced by ESLint):

- Higher layers can import from lower layers only
- Lower layers cannot import from higher layers
- Violations will fail CI/CD

Learn more: [Feature-Sliced Design](https://feature-sliced.design/)

## Code Quality Tools

This project uses industry-standard tools to maintain code quality:

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **Stylelint** - CSS linting
- **Secretlint** - Secret/credential detection
- **TypeScript** - Static type checking
- **Husky** - Git hooks automation
- **lint-staged** - Run linters on staged files
- **Commitlint** - Enforce conventional commits

### Git Hooks

- **pre-commit**: Runs lint-staged (lints, formats, and checks for secrets in staged files)
- **commit-msg**: Validates commit message format
- **pre-push**: Runs type-check, lint, and build

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

feat: add user authentication
fix: resolve navigation bug
docs: update README
style: format code
refactor: restructure components
test: add unit tests
chore: update dependencies
```

## Testing

```bash
# Run tests in watch mode
npm test

# Run tests once with coverage
npm run test:coverage

# Run tests in CI mode
npm run test:ci
```

## Building for Production

```bash
npm run build
```

The optimized build will be in the `build/` folder.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

**Important**: Changes to configuration files (ESLint, TypeScript, package.json, etc.) require approval from code owners. See [Configuration Protection Guide](docs/CONFIGURATION_PROTECTION.md) for details.

## Configuration Protection

This project has multiple layers of protection to ensure code quality and architectural standards:

1. **CODEOWNERS** - Requires tech lead approval for config changes
2. **Branch Protection** - Enforces reviews and CI checks
3. **Git Hooks** - Local validation and warnings
4. **CI/CD** - Server-side validation (cannot be bypassed)
5. **ESLint Boundaries** - Enforces FSD architecture

See [Configuration Protection Guide](docs/CONFIGURATION_PROTECTION.md) for complete details.

## Security

See [SECURITY.md](SECURITY.md) for information on reporting security vulnerabilities.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/)
