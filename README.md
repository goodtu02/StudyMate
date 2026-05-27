# StudyMate 📚

StudyMate is a modern web application designed to help you manage your study tasks, reflect on your learning, and get AI-powered study suggestions.

> **Project Context**: This project was developed as an assignment to explore **Process-based Vibe Coding**. The goal was to build a complete software product using an AI coding agent while systematically applying software engineering processes—such as specification, task decomposition, TDD, and quality management—to control the scope and assure quality.

---

## ✨ Features

- **Task Management**: Create, view, edit, delete, and complete your daily study tasks.
- **Study Reflection**: After completing a task, write a reflection to internalize what you learned.
- **AI Suggestion**: Get an AI-generated study reflection based on your task's title, category, and memo to help you start writing.
- **Local Persistence**: No server setup required! All your tasks are securely saved locally in your browser (`localStorage`).
- **Responsive & Accessible**: Clean, modern, and accessible UI.

---

## 📷 Screenshots

| Empty State | Create Task |
|-------------|-------------|
| ![Empty State](docs/screenshots/home_empty.png) | ![Create Task](docs/screenshots/create_task.png) |

| Task List | Reflection & AI Suggestion |
|-------------|----------------------------|
| ![Task List](docs/screenshots/home_tasks.png) | ![Reflection](docs/screenshots/reflection.png) |

---

## 🏗 Project Documentation

Throughout the development lifecycle, we maintained rigorous documentation of the processes, testing, and AI interactions:

- [Project Specification](docs/spec.md): The root document detailing requirements and boundaries.
- [Test Plan & Results](docs/04_test_plan.md): Systematic manual & automated integration test results.
- [Quality Management](docs/05_quality_management.md): Code quality review, refactoring logs, and AI output review.
- [Process Logs](docs/process_logs/): A collection of scratch files documenting the PRs, issues, and step-by-step TDD workflows.

---

## 🛠 Technologies Used

- **Frontend Core**: React 19, TypeScript, Vite
- **Testing**: Vitest, React Testing Library, jsdom
- **Styling**: Vanilla CSS with customized design tokens
- **Data Persistence**: Local Storage API
- **Tooling**: ESLint, Prettier, GitHub Actions (optional)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/goodtu02/StudyMate.git
   cd StudyMate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

### Running Tests

StudyMate includes automated integration tests designed with the **Test-Driven Development (TDD)** approach.

```bash
# Run tests
npm run test

# Run tests with UI coverage
npm run test:ui
```

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
