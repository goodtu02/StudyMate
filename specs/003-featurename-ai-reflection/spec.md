# Feature Specification: AI Reflection Suggestion

**Feature Branch**: `003-ai-reflection-suggestion`  
**Created**: 2026-05-07  
**Status**: Draft  
**Source**: spec.md §4.5, §5 (FR-007), §15.2 Feature 003

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Request an AI Reflection Suggestion (Priority: P2)

When a user is unsure how to write a reflection, they click the "AI Suggestion" button. The system generates a suggested reflection sentence based on the task's title, category, and memo. The user can edit the suggestion before saving it.

**Why this priority**: This is a "Should Have" feature that adds value but is not required for the MVP.

**Independent Test**: Can be tested by clicking the AI Suggestion button and verifying a non-empty suggestion is displayed that the user can then edit and save.

**Acceptance Scenarios**:

1. **Given** a study task exists, **When** the user clicks the AI Suggestion button, **Then** a suggested reflection sentence is displayed in the reflection input area.
2. **Given** a suggestion is displayed, **When** the user edits the text and clicks Save, **Then** the modified reflection is saved (not the original suggestion).
3. **Given** a real external AI API is not configured, **When** the user clicks the AI Suggestion button, **Then** a mock suggestion based on task information is displayed (mock AI is acceptable).

---

### Edge Cases

- What if the task has no title or memo? → The mock/AI function uses whatever fields are available; it still returns a generic suggestion.
- What if the user clicks "AI Suggestion" multiple times? → A new suggestion replaces the current one in the input field.
- What if an external API call fails? → Show an error message and fall back to a mock suggestion, or show an error state gracefully.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-007-1**: System MUST provide an "AI Suggestion" button in the reflection area of each study task.
- **FR-007-2**: Clicking the button MUST display a suggested reflection sentence in the reflection input field.
- **FR-007-3**: The suggestion MUST be based on at least one of: task title, category, memo.
- **FR-007-4**: System MUST allow the user to edit the suggestion before saving.
- **FR-007-5**: If a real AI API is not used, a mock function returning a template-based suggestion is acceptable.
- **FR-007-6**: API keys for any external AI service MUST be stored in `.env` and excluded from the repository via `.gitignore`.

### Key Entities

- **AI Suggestion Function**: Input: `{ title, category, memo, isCompleted }` → Output: `string` (suggested reflection sentence).
- If mock: generates a sentence from a template like "Today I studied [title] in [category]. [isCompleted ? 'I completed' : 'I worked on'] the planned study."

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The AI Suggestion button is visible and clickable in the reflection area (TC-010 from spec.md §12.3 passes).
- **SC-002**: A suggested reflection sentence is displayed after clicking the button.
- **SC-003**: The user can modify the suggestion and save the modified version.
- **SC-004**: If a mock function is used, its behavior is documented in `docs/agent_logs.md`.

---

## Assumptions

- Mock AI implementation is the default; real API integration is optional and depends on key availability.
- If a real API is used (e.g., Gemini, OpenAI), the API key is stored in `.env` and the variable name is documented in `.env.example`.
- This feature depends on Feature 002 (Study Reflection) being implemented first.
- The suggestion replaces the current content of the reflection input field; it does not append.
