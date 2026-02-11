# Contributing to ReThought

Thank you for your interest in contributing to ReThought! We welcome contributions from everyone. This document provides guidelines and instructions for contributing to the project.

## 🤝 Ways to Contribute

- **Code**: Submit bug fixes, new features, or improvements
- **Documentation**: Improve README, add code comments, or write guides
- **Bug Reports**: Report issues you find
- **Feature Requests**: Suggest new features or improvements
- **Testing**: Test the application and report bugs

## 🐛 Reporting Bugs

Before submitting a bug report:
1. Check the [Issues](https://github.com/eeoviosa/ReThought/issues) to see if it's already been reported
2. Try to reproduce the issue with the latest code

**When submitting a bug report, include:**
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Your environment (OS, Node.js version, etc.)
- Screenshots or error messages if applicable

## 💡 Suggesting Features

We'd love to hear your ideas! When suggesting a feature:
1. Use a clear, descriptive title
2. Provide a detailed description of the feature
3. Explain why this feature would be useful
4. List examples of how the feature would work

## 🚀 Getting Started

### 1. Fork the Repository
Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/ReThought.git
cd ReThought
```

### 3. Create a Branch
Create a branch with a descriptive name for your changes:
```bash
git checkout -b feature/add-dark-mode
# or
git checkout -b fix/note-deletion-bug
```

### 4. Set Up Development Environment
```bash
npm install
npm run dev
```

### 5. Make Your Changes
- Follow the coding style used in the project
- Write clear, commented code
- Test your changes thoroughly
- Commit messages should be clear and descriptive

### 6. Push Your Changes
```bash
git push origin feature/add-dark-mode
```

### 7. Create a Pull Request
1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch and provide a detailed description
4. Reference any related issues (e.g., "Fixes #123")

## 📋 Pull Request Checklist

Before submitting your pull request:

- [ ] Code follows the project's style guidelines
- [ ] Comments explain the "why" not just the "what"
- [ ] No unnecessary console.log statements
- [ ] Changes are tested locally
- [ ] README is updated if needed
- [ ] No merge conflicts
- [ ] Commit messages are clear and descriptive

## 🎨 Code Style Guidelines

### JavaScript/React
- Use meaningful variable and function names
- Use ES6+ syntax (const/let, arrow functions, etc.)
- Add JSDoc comments for functions
- Keep functions small and focused
- Use consistent indentation (2 spaces)

### Example:
```javascript
/**
 * Fetches notes from the API
 * @returns {Promise<Array>} Array of note objects
 */
const fetchNotes = async () => {
  try {
    const res = await api.get('/notes');
    return res.data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};
```

## 📚 Project Structure

```
ReThought/
├── backend/              # Node.js + Express server
│   ├── models/          # MongoDB schemas
│   ├── src/
│   │   ├── config/      # Database & Redis config
│   │   ├── controllers/ # Request handlers
│   │   ├── middleware/  # Express middleware
│   │   ├── routes/      # API routes
│   │   └── server.js    # Entry point
│   └── package.json
├── frontend/            # React + Vite application
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utilities and helpers
│   │   ├── App.jsx      # Main component
│   │   └── main.jsx     # Entry point
│   └── package.json
└── package.json         # Root workspace scripts
```

## 🔍 Code Review Process

1. A maintainer will review your pull request
2. Changes may be requested - don't worry, this is normal!
3. Update your code based on feedback
4. Once approved, your PR will be merged

## 📖 Documentation

When adding features:
- Update the README if adding a major feature
- Add inline code comments for complex logic
- Document new environment variables in .env.example files

## ❓ Questions?

If you have questions, feel free to:
- Open an issue with your question
- Check existing issues for similar topics
- Ask in pull request comments

## 📝 License

By contributing to ReThought, you agree that your contributions will be licensed under the ISC license.

---

**Thank you for contributing to ReThought!** 🎉
