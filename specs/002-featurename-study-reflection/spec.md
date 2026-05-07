# Feature Specification: Study Reflection

**Feature Branch**: `002-study-reflection`  
**Created**: 2026-05-07  
**Status**: Draft  
**Source**: spec.md §4.4, §5 (FR-006), §15.2 Feature 002

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Write a Reflection for a Study Task (Priority: P1)

After studying, the user opens a task and writes a short reflection describing what was difficult, what went well, and what to improve next time. The reflection is saved and linked to the task.

**Why this priority**: Reflection is the second core value proposition of StudyMate after task management.

**Independent Test**: Can be fully tested by creating a task, writing a reflection, saving it, and verifying it persists after refresh.

**Acceptance Scenarios**:

1. **Given** a study task exists, **When** the user enters reflection text and clicks Save, **Then** the reflection is saved and displayed in the task.
2. **Given** a reflection was saved, **When** the browser is refreshed, **Then** the reflection text still appears in the task.
3. **Given** a task has no reflection, **When** viewing the task, **Then** a placeholder message indicates no reflection has been written.

---

### User Story 2 - Edit an Existing Reflection (Priority: P2)

A user reopens a task that already has a reflection and edits the text. The updated reflection replaces the old one and persists.

**Why this priority**: Users should be able to revise their reflections as thinking evolves.

**Independent Test**: Can be tested by saving a reflection, editing it, and verifying the updated text persists.

**Acceptance Scenarios**:

1. **Given** a task has an existing reflection, **When** the user edits the text and saves, **Then** the updated reflection is shown.
2. **Given** the reflection was edited, **When** the browser is refreshed, **Then** the updated text remains.

---

### Edge Cases

- What if the user saves an empty reflection? → An empty string is allowed (clears the existing reflection).
- What if the task is deleted while a reflection exists? → The reflection is deleted along with the task (data integrity).

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-006-1**: System MUST allow the user to enter reflection text for any study task.
- **FR-006-2**: The reflection MUST be saved and linked to the specific study task by task ID.
- **FR-006-3**: System MUST allow the user to edit an existing reflection.
- **FR-006-4**: System MUST persist the reflection in localStorage as part of the StudyTask entity.
- **FR-006-5**: System MUST display a suitable placeholder message when no reflection has been written for a task.

### Key Entities

- **StudyTask.reflection**: string field in the StudyTask entity (spec.md §7.1); stored and retrieved as part of the task object.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Reflection text entered by the user is saved correctly and associated with the correct task.
- **SC-002**: Reflection text persists after browser refresh (TC-006 from spec.md §12.3 passes).
- **SC-003**: Editing a reflection correctly replaces the old text.
- **SC-004**: A placeholder message appears when no reflection exists.

---

## Assumptions

- Reflection is a free-text field with no length limit enforced by the UI (reasonable browser/localStorage limit applies).
- Reflection is saved as part of the StudyTask object in localStorage; no separate storage key is needed.
- This feature depends on Feature 001 (Core Study Task Management) being implemented first.
