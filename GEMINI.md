<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan:

- Feature 001 (Core Task Management): specs/001-featurename-core-task/plan.md
- Feature 002 (Study Reflection): specs/002-featurename-study-reflection/plan.md
- Feature 003 (AI Reflection Suggestion): specs/003-featurename-ai-reflection/plan.md
- Feature 004 (Testing & Quality): specs/004-featurename-testing-and/plan.md

Constitution: .specify/memory/constitution.md
Top-level spec: docs/spec.md
<!-- SPECKIT END -->

## ⚠️ MANDATORY: GitHub Issue & PR Templates

You MUST ALWAYS use the following templates without exception.

### Issues

Three issue types exist under `.github/ISSUE_TEMPLATE/`:

| Type | Template File | When to Use |
|------|--------------|-------------|
| Feature | `feature_request.md` | New feature implementation |
| Bug | `bug_report.md` | Bug found during testing (spec.md §12.4 format) |
| Task | `task.md` | Single implementation task from tasks.md |

**Rules:**
- Every Issue MUST use the correct template — never create a blank issue.
- Bug reports MUST follow the exact structure in spec.md §12.4.
- Feature issues MUST reference the related `specs/` files and FR-XXX requirements.

### Pull Requests

Template: `.github/PULL_REQUEST_TEMPLATE.md`

**Rules (ALL mandatory per spec.md §10.4, §13.5, §13.6):**
- Every PR MUST fill in ALL sections: Summary, Related Issue, Changes, AI Usage Log, Test Results, Definition of Done Checklist.
- The **AI Usage Log** table MUST be filled in for every step where AI was used.
- The **Test Results** table MUST list the relevant TC-XXX test cases and their Pass/Fail results.
- The **Definition of Done Checklist** MUST be fully checked before merging.
- Every PR MUST reference a related Issue with `Closes #N`.
- PRs MUST NOT be merged if any DoD checklist item is unchecked.

### Commit Messages

Follow spec.md §11.3 format: `type: short summary`
Valid types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`
