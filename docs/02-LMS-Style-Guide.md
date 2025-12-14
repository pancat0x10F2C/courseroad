# LMS Style Guide

## Commit Message Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to ensure consistent and meaningful commit messages.

## Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

## Examples

### Good Commit Messages

```bash
feat: add user authentication system
fix: resolve login button not responding
docs: update API documentation
style: format code with prettier
refactor: extract user validation logic
perf: optimize image loading performance
test: add unit tests for auth service
build: update dependencies
ci: add GitHub Actions workflow
chore: update package.json scripts
```

### With Scope

```bash
feat(auth): add JWT token validation
fix(ui): resolve mobile responsive issues
docs(api): add endpoint documentation
test(auth): add login integration tests
```

### With Body and Footer

```bash
feat: add dark mode support

Implement dark mode toggle functionality with persistent storage.
Users can now switch between light and dark themes.

Closes #123
```

## Rules

1. **Type**: Must be one of the allowed types
2. **Subject**:
    - Must be lowercase
    - No period at the end
    - Maximum 72 characters
    - Use imperative mood ("add" not "added" or "adds")
3. **Body**: Maximum 100 characters per line
4. **Footer**: Maximum 100 characters per line

## Testing Your Commits

Before committing, you can test your commit message:

```bash
# Test a commit message
echo "feat: add new feature" | bunx commitlint

# Check the last commit
bun run commitlint:check
```

## Git Hooks

This project has automatic commit message validation via Husky git hooks:

- **Pre-commit**: Runs linting, formatting, and type checking
- **Commit-msg**: Validates commit message format

## Breaking Changes

For breaking changes, add `!` after the type or add `BREAKING CHANGE:` in the footer:

```bash
feat!: remove deprecated API endpoints

BREAKING CHANGE: The /v1/users endpoint has been removed. Use /v2/users instead.
```

## Getting Help

If commitlint rejects your commit message, it will show exactly what's wrong:

```bash
⧗   input: Invalid commit message
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```

Fix the issues and try again!
