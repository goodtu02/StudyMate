# StudyMate Constitution

## Core Principles

### I. Specification-First

Every feature MUST be described in a specification before implementation begins.
The spec.md is the single source of truth. AI-generated code must be traced back to a requirement ID.
No code is written without a corresponding functional or non-functional requirement.

### II. Scope Control (Non-Negotiable)

Only features listed in Section 3.1 (In Scope) of spec.md MUST be implemented.
Must Have features take absolute priority. Should Have and Could Have features are implemented only if Must Have features are complete and process evidence is not compromised.
Scope changes MUST be documented in GitHub Discussions with rationale.

### III. Process Evidence

Every feature MUST have a corresponding GitHub Issue, feature branch, commit history, and Pull Request.
AI agent usage, human review decisions, and test results MUST be recorded in PR descriptions or `docs/agent_logs.md`.
Development must not be concentrated on a single date — continuous progress recording is required.

### IV. Human Accountability

AI-generated code MUST be reviewed by a human before merging.
Test results MUST be verified by a human. Bugs MUST be recorded as Issues or PR comments.
The human developer retains final responsibility for requirements, scope, quality, and the final report argument.

### V. Testability and Quality Gates

A feature is DONE only when: it satisfies requirements, passes manual tests, PR is documented, and it is merged to `main`.
Test cases MUST be written for all Must Have features (TC-001 through TC-010 in spec.md Section 12.3).
Data with missing required values (title, date) MUST NOT be saved. localStorage errors MUST be handled gracefully.

## Technology Constraints

- Frontend: React or Next.js with TypeScript
- Styling: CSS Modules, Tailwind CSS, or basic CSS
- Storage: localStorage (key: `studymate.tasks`)
- AI Feature: Mock AI function acceptable if real API is not practical
- No login, no server-side user management, no external calendar integration
- API keys MUST NOT be committed to the repository; use `.env` + `.gitignore`

## Development Workflow

- Branch naming follows spec.md Section 11.2 (e.g., `feature/task-form`, `feature/reflection`)
- Commit messages follow `type: short summary` format per spec.md Section 11.3
- Pull Requests MUST reference related Issues
- GitHub Discussions MUST record major design decisions and retrospective

## Governance

This constitution supersedes all other development practices for the StudyMate project.
Amendments require a new entry in the Change History (spec.md Section 21) and a GitHub Discussion comment.
All PRs are reviewed for compliance with these principles before merge.

**Version**: 1.0.0 | **Ratified**: 2026-05-07 | **Last Amended**: 2026-05-07
