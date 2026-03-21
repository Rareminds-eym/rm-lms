# LMS - Learning Management System

[![CI](https://github.com/[username]/lms/workflows/CI/badge.svg)](https://github.com/[username]/lms/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern Learning Management System built with React and TypeScript.

## Features

- ⚡ React 19 with TypeScript
- 🎨 Modern UI with CSS
- 🧪 Testing with Jest and React Testing Library
- 📦 Production-ready build configuration
- 🔍 ESLint + Prettier + Stylelint for code quality
- 🐶 Husky for Git hooks
- 📝 Conventional commits with Commitlint
- 🚀 CI/CD with GitHub Actions

## Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0

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

### Utilities

- `npm run validate` - Run all checks (type-check, lint, format, test, build)
- `npm run clean` - Clean build artifacts and cache

## Project Structure

```
lms/
├── .github/              # GitHub configuration
│   ├── workflows/        # CI/CD workflows
│   └── ISSUE_TEMPLATE/   # Issue templates
├── .husky/               # Git hooks
├── .vscode/              # VS Code settings
├── public/               # Static files
├── src/                  # Source code
│   ├── App.tsx           # Main app component
│   ├── index.tsx         # Entry point
│   └── ...
├── .editorconfig         # Editor configuration
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── .stylelintrc.json     # Stylelint configuration
├── commitlint.config.js  # Commitlint configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Code Quality Tools

This project uses industry-standard tools to maintain code quality:

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **Stylelint** - CSS linting
- **TypeScript** - Static type checking
- **Husky** - Git hooks automation
- **lint-staged** - Run linters on staged files
- **Commitlint** - Enforce conventional commits

### Git Hooks

- **pre-commit**: Runs lint-staged (lints and formats staged files)
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

## Security

See [SECURITY.md](SECURITY.md) for information on reporting security vulnerabilities.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Create React App Documentation](https://create-react-app.dev/)
- [Testing Library Documentation](https://testing-library.com/)
