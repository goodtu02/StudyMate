# Feature Specification: Core Study Task Management

**Feature Branch**: `001-core-task-management`  
**Created**: 2026-05-07  
**Status**: Draft  
**Source**: spec.md §3.1, §4, §5 (FR-001–FR-005, FR-008, FR-009), §15.2 Feature 001

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Create a Study Task (Priority: P1)

A user creates a new study task by entering a title, date, and optional fields (category, estimated time, memo). The task appears immediately in the task list and persists after browser refresh.

**Why this priority**: This is the foundational capability. Without task creation, no other feature is usable.

**Independent Test**: Can be fully tested by opening the app, filling the task form, saving, and verifying the task appears in the list and survives a page refresh.

**Acceptance Scenarios**:

1. **Given** the task form is open, **When** the user enters a valid title and date and clicks Save, **Then** the task appears in the task list immediately.
2. **Given** a task was created, **When** the user refreshes the browser, **Then** the task still appears in the list.
3. **Given** the task form is open, **When** the user clicks Save with an empty title, **Then** an error message is shown and no task is saved.
4. **Given** the task form is open, **When** the user clicks Save without a date, **Then** an error message is shown and no task is saved.

---

### User Story 2 - View and Filter Study Tasks (Priority: P1)

A user opens the app and sees all study tasks in a list. Today's tasks are visually highlighted or shown in a separate section. The user can filter tasks by All / Today / Completed / Incomplete. Completed and incomplete tasks are visually distinguishable.

**Why this priority**: Viewing tasks is equally critical as creating them for the MVP to be usable.

**Independent Test**: Can be fully tested by creating tasks with different dates and completion states, then verifying filter and today's highlight behavior.

**Acceptance Scenarios**:

1. **Given** tasks exist with various dates, **When** the user selects the "Today" filter, **Then** only tasks scheduled for today are shown.
2. **Given** tasks with mixed completion status exist, **When** viewing the list, **Then** completed tasks are visually different from incomplete tasks.
3. **Given** no tasks exist, **When** the app loads, **Then** an empty-state message is displayed: "No study tasks have been created yet."
4. **Given** no tasks are scheduled for today, **When** the "Today" filter is selected, **Then** the message "There are no study tasks scheduled for today." is shown.

---

### User Story 3 - Edit a Study Task (Priority: P2)

A user selects an existing task and edits its title, date, category, estimated time, or memo. Updated values are saved and reflected in the list.

**Why this priority**: Editing is important but not blocking for MVP — users can delete and re-create if needed.

**Independent Test**: Can be tested by creating a task, editing it, and verifying the updated values persist after refresh.

**Acceptance Scenarios**:

1. **Given** a task exists, **When** the user opens edit mode, **Then** existing values are pre-filled in the form.
2. **Given** the user modifies the title and saves, **When** viewing the list, **Then** the updated title is shown.
3. **Given** the user saves an edit with an empty title, **Then** the edit is rejected and an error is shown.
4. **Given** a task is edited and saved, **When** the browser is refreshed, **Then** the updated values remain.

---

### User Story 4 - Delete a Study Task (Priority: P2)

A user deletes an unwanted task. The task is immediately removed from the list and does not reappear after refresh.

**Why this priority**: Clean-up capability is needed but secondary to core CRUD.

**Independent Test**: Can be tested by creating a task, deleting it, and verifying it is gone after refresh.

**Acceptance Scenarios**:

1. **Given** a task exists, **When** the user clicks the delete action, **Then** the task is removed from the list immediately.
2. **Given** a task was deleted, **When** the browser is refreshed, **Then** the task is not present.

---

### User Story 5 - Mark a Task as Completed (Priority: P1)

After finishing studying, the user marks a task as completed. The completion status is saved and visually reflected.

**Why this priority**: Completion tracking is a core value proposition of StudyMate.

**Independent Test**: Can be tested by creating a task, toggling completion, and verifying status persists after refresh.

**Acceptance Scenarios**:

1. **Given** an incomplete task exists, **When** the user clicks the completion control, **Then** the task status changes to completed immediately.
2. **Given** a task was marked completed, **When** the browser is refreshed, **Then** the completed status remains.
3. **Given** a completed task, **When** the user toggles completion again, **Then** the task reverts to incomplete.

---

### User Story 6 - View Study Progress Summary (Priority: P2)

The app shows a summary panel with the number of today's tasks, the number completed, and a completion rate.

**Why this priority**: Provides motivational feedback but is not blocking for core usage.

**Independent Test**: Can be tested by creating tasks, completing some, and verifying the summary counts update correctly.

**Acceptance Scenarios**:

1. **Given** tasks exist for today, **When** viewing the app, **Then** the summary shows correct total and completed counts.
2. **Given** a task is marked complete, **When** viewing the summary, **Then** the completed count and rate update immediately.

---

### Edge Cases

- What happens when localStorage is corrupted or cannot be parsed? → Show error message "There was a problem loading saved data. The application will start with an empty state." and reset to empty state.
- What happens when the user enters a date in an invalid format? → Block save and show an error.
- What happens when the task list has ~100 items? → List renders normally without performance degradation.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST allow the user to create a study task with title (required), date (required), category (optional), estimated minutes (optional), and memo (optional).
- **FR-002**: System MUST display all registered study tasks in a list with completed/incomplete visual distinction.
- **FR-003**: System MUST highlight or filter tasks scheduled for today.
- **FR-004**: System MUST allow the user to edit any field of an existing task.
- **FR-005**: System MUST allow the user to delete a study task.
- **FR-006**: System MUST allow the user to toggle task completion status.
- **FR-007**: System MUST persist all task data in localStorage under the key `studymate.tasks`.
- **FR-008**: System MUST display empty-state messages when no tasks exist or no tasks match the filter.
- **FR-009**: System MUST validate that title and date are non-empty before saving; display an error message otherwise.
- **FR-010**: System MUST display a summary panel showing today's task count, completed count, and completion rate.
- **FR-011**: System MUST handle localStorage parsing errors gracefully without crashing.

### Key Entities

- **StudyTask**: `{ id, title, category, studyDate (YYYY-MM-DD), estimatedMinutes, memo, isCompleted, completedAt, reflection, createdAt, updatedAt }` — see spec.md §7.1 for full schema.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A user can create a task with title and date in under 30 seconds.
- **SC-002**: Created tasks are visible in the task list immediately after saving.
- **SC-003**: All task data (create, edit, delete, complete) persists correctly after browser refresh.
- **SC-004**: Filter modes (All / Today / Completed / Incomplete) correctly show the right subset of tasks.
- **SC-005**: Empty-state and error messages are shown in all required scenarios.
- **SC-006**: Test cases TC-001 through TC-009 from spec.md §12.3 all pass.

---

## Assumptions

- Single-user app with no login; data is stored locally in the browser.
- Desktop browser is the primary target; basic mobile responsiveness is required.
- localStorage is the persistence mechanism; no server-side storage is needed.
- The StudyTask data model from spec.md §7.1 is the canonical schema.
- Features in the "Won't Have" list (login, server sync, calendar integration) are out of scope.
