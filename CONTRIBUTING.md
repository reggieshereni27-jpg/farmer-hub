# Contributing to Farmer Hub

Thank you for your interest in contributing to Farmer Hub! We welcome contributions from everyone. This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We are committed to providing a welcoming and inclusive environment.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear, descriptive title
   - Detailed description of the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots/logs if applicable
   - Your environment (OS, browser, versions)

### Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue with:
   - Clear, descriptive title starting with "[FEATURE]"
   - Detailed description of the feature
   - Use cases and benefits
   - Possible implementation approach
   - Examples or mockups if applicable

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes following the coding standards
4. Commit messages should be clear and descriptive
5. Push to your fork: `git push origin feature/your-feature-name`
6. Create a Pull Request with:
   - Clear title describing the changes
   - Reference to related issues
   - Description of changes
   - Screenshots for UI changes
   - Testing instructions

## Coding Standards

### JavaScript/TypeScript
- Use ESLint configuration provided
- Follow Airbnb style guide
- Use const/let, avoid var
- Use async/await over promises
- Add JSDoc comments for functions

### Python
- Follow PEP 8 style guide
- Use type hints
- Add docstrings to functions and classes
- Use meaningful variable names

### General
- Write clean, readable code
- Add comments for complex logic
- Keep functions small and focused
- Use meaningful variable and function names
- Write tests for new features

## Testing

- Write unit tests for new features
- Ensure all tests pass: `npm test` or `python -m pytest`
- Aim for >80% code coverage
- Test edge cases and error handling

## Commit Messages

Follow these guidelines:
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 50 characters
- Reference issues and pull requests liberally
- Example: "Add crop rotation tracking (#42)"

## Pull Request Process

1. Update documentation as needed
2. Add tests for new features
3. Update CHANGELOG.md
4. Ensure CI/CD passes
5. Request review from maintainers
6. Address review feedback
7. Maintainers merge when approved

## Development Setup

```bash
# Fork and clone
git clone https://github.com/YOUR-USERNAME/farmer-hub.git
cd farmer-hub

# Add upstream remote
git remote add upstream https://github.com/reggieshereni27-jpg/farmer-hub.git

# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git commit -am "Add your feature"

# Push to your fork
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## Need Help?

- Check existing issues and discussions
- Read the documentation
- Ask in GitHub Discussions
- Contact: support@farmerhub.com

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Monthly newsletter

Thank you for contributing! 🙏
