# 🤝 Contributing to Parth-Mind

Thank you for your interest in contributing! This guide will help you get started and ensure a smooth, consistent process for all contributors.

## 🚀 Development Setup

### 1. Fork the repository
Visit the [Parth-Mind GitHub page](https://github.com/gayatrikate04/Parth-Mind.git) and click **"Fork"** to create your own copy.

### 2. Clone your fork
```bash
git clone https://github.com/<your-username>/Parth-Mind.git
cd Parth-Mind
```

### 3. Install dependencies
```bash
npm install
```

### 4. Set up environment variables
- Copy `.env.example` to `.env.local`
- Fill in required variables (e.g., database URL, API keys)

**Example:**
```env
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret
FIREBASE_API_KEY=your_firebase_api_key
```

### 5. Run local development server
```bash
npm run dev
```

### 6. Run tests locally
```bash
npm test
```

---

## 📝 Coding Style

- Use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) for formatting and linting
- Follow the existing code structure and naming conventions
- Write clear, descriptive comments where necessary
- Use functional components and hooks for React code

---

## 📋 Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```
<type>(optional scope): <description>

[optional body]
[optional footer]
```

### Types
| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, missing semi colons, etc) |
| `refactor` | Code refactoring |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |

**Example:**
```
feat(auth): add Google sign-in support
```

---

## 🔄 Pull Request Workflow

1. **Fork** the repository and create your branch from `main` or the relevant feature branch
2. **Make changes** and commit them following the commit message format
3. **Ensure** all tests pass and code is linted
4. **Open** a pull request (PR) with a clear description of your changes
5. **Link** any related issues in your PR description
6. **Respond** to review feedback and make necessary updates

---

## 💬 Need Help?

If you have questions, feel free to:
- Open an issue for discussion
- Join project discussions
- Reach out to maintainers

**Welcome aboard and happy coding!** 🎉