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

## ⚠️ MANDATORY: Branch & PR Workflow

You MUST follow this workflow for every change without exception.

### Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | 최종 안정 코드 (직접 푸시 금지) |
| `dev` | 개발 통합 브랜치 — 모든 PR의 base 브랜치 |
| `<issue-title>` | 기능/버그/태스크 작업 브랜치 |

### Mandatory Workflow (순서 엄수)

1. **Issue 먼저 생성** — 작업 전 반드시 GitHub Issue를 올바른 템플릿으로 생성한다.
2. **브랜치 생성** — 브랜치명은 Issue 제목과 동일하게 한다 (공백 → `-`, 소문자).
   - 예: Issue 제목 `feat: implement task form` → 브랜치명 `feat/implement-task-form`
3. **작업 및 커밋** — 해당 브랜치에서 작업하고 `type: short summary` 형식으로 커밋한다.
4. **PR 생성** — PR 제목은 Issue 제목과 동일하게 한다. base 브랜치는 항상 `dev`.
5. **PR 머지** — DoD Checklist 전체 체크 후 `dev`로 머지한다.

**NEVER push directly to `main` or `dev`. Always go through a PR.**

## ⚠️ MANDATORY: AI Agent PR Ownership

**PR 생성부터 머지까지의 전체 과정은 AI 에이전트(너)의 책임이다.**

구체적으로, 모든 PR에 대해 아래를 순서대로 수행해야 한다:

1. **PR 템플릿 전체 작성** — `.github/PULL_REQUEST_TEMPLATE.md`의 모든 섹션을 빠짐없이 채운다.
2. **DoD Checklist 검증** — 각 항목을 실제로 확인하고 체크한다. 미확인 항목이 있으면 머지하지 않는다.
3. **GitHub PR 생성** — `gh pr create` 또는 브라우저를 통해 PR을 직접 생성한다.
4. **머지 실행** — DoD Checklist가 전부 체크된 것을 확인한 후 `gh pr merge` 로 `dev`에 머지한다.
5. **브랜치 정리** — 머지 후 작업 브랜치를 삭제한다.

**사용자가 별도로 요청하지 않아도 이 과정을 자동으로 완료해야 한다.**
