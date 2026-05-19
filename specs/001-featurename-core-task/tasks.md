# Tasks: Core Study Task Management

**Input**: Design documents from `/specs/001-featurename-core-task/`  
**Prerequisites**: plan.md ✅, spec.md ✅

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization with React + TypeScript

- [x] T001 Initialize React + TypeScript project with Vite in the repository root (`npm create vite@latest . -- --template react-ts`)
- [x] T002 Install dependencies: `uuid`, `@types/uuid`
- [x] T003 [P] Configure ESLint and Prettier for TypeScript/React
- [x] T004 [P] Create base directory structure: `src/components/`, `src/services/`, `src/models/`, `src/utils/`
- [x] T005 Create `src/models/StudyTask.ts` with the StudyTask TypeScript interface per spec.md §7.1

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: localStorage service and data utilities that ALL user stories depend on

⚠️ **CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Implement `src/services/storage.ts`: `loadTasks()`, `saveTasks(tasks)`, `parseTasksSafely()` with error handling per FR-011
- [x] T007 Implement `src/utils/dateUtils.ts`: `isToday(dateString)`, `formatDate(dateString)` helpers
- [x] T008 Write basic error boundary or try-catch in storage service that resets to empty state on parse failure

**Checkpoint**: Storage service tested manually — tasks can be saved and loaded from localStorage

---

## Phase 3: User Story 1 — Create a Study Task (Priority: P1) 🎯 MVP

**Goal**: User can create a study task with title + date (required) and optional fields; task appears in list and persists.

**Independent Test**: Open app → fill form → save → verify task in list → refresh → verify task remains.

### Implementation

- [x] T009 [P] [US1] Create `src/components/TaskForm.tsx`: form fields (title*, date*, category, estimatedMinutes, memo) + Save button
- [x] T010 [US1] Add form validation in `TaskForm.tsx`: block save when title or date is empty, show error message per FR-009
- [x] T011 [US1] Wire `TaskForm` to `storage.ts`: on valid save, call `saveTasks()` and update state in `src/App.tsx`

**Checkpoint**: User Story 1 independently functional — TC-001 and TC-002 pass

---

## Phase 4: User Story 2 — View and Filter Tasks (Priority: P1)

**Goal**: Task list displays all tasks; today's tasks are highlighted; filter tabs work.

**Independent Test**: Create tasks with different dates → verify filter modes (All/Today/Completed/Incomplete) show correct subsets.

### Implementation

- [ ] T012 [P] [US2] Create `src/components/TaskCard.tsx`: display task title, date, category, status badge
- [ ] T013 [P] [US2] Create `src/components/FilterBar.tsx`: All / Today / Completed / Incomplete tab buttons
- [ ] T014 [US2] Create `src/components/TaskList.tsx`: renders filtered list of `TaskCard` components; shows empty-state message per FR-008
- [ ] T015 [US2] Implement filter logic in `TaskList.tsx` or `App.tsx` using `dateUtils.isToday()` for Today filter

**Checkpoint**: User Stories 1 + 2 functional — TC-001, TC-002, TC-003 pass

---

## Phase 5: User Story 3 — Edit a Study Task (Priority: P2)

**Goal**: User can edit an existing task; updated values persist.

**Independent Test**: Create task → edit title → save → verify updated value → refresh → verify persistence.

### Implementation

- [ ] T016 [US3] Add edit mode toggle to `TaskCard.tsx`: clicking Edit opens `TaskForm.tsx` pre-filled with task data
- [ ] T017 [US3] Implement update logic in `storage.ts`: `updateTask(id, changes)` function; updates `updatedAt` field
- [ ] T018 [US3] Wire edit save to `App.tsx` state; reflect changes in `TaskList.tsx` immediately

**Checkpoint**: TC-007 passes

---

## Phase 6: User Story 4 — Delete a Task (Priority: P2)

**Goal**: User can delete a task; it disappears immediately and does not return after refresh.

**Independent Test**: Create task → delete → verify gone → refresh → verify gone.

### Implementation

- [ ] T019 [US4] Add Delete button to `TaskCard.tsx`
- [ ] T020 [US4] Implement `deleteTask(id)` in `storage.ts`; wire to `App.tsx` state update

**Checkpoint**: TC-008 passes

---

## Phase 7: User Story 5 — Mark Task as Completed (Priority: P1)

**Goal**: Completion status can be toggled; persists after refresh; completed tasks look different.

**Independent Test**: Create task → toggle complete → verify visual change → refresh → verify status remains.

### Implementation

- [ ] T021 [US5] Add completion toggle control (checkbox or button) to `TaskCard.tsx`
- [ ] T022 [US5] Implement `toggleComplete(id)` in `storage.ts`: updates `isCompleted`, `completedAt`, `updatedAt`
- [ ] T023 [US5] Apply visual distinction (strikethrough, opacity, badge) to completed tasks in `TaskCard.tsx`

**Checkpoint**: TC-004, TC-005 pass

---

## Phase 8: User Story 6 — Progress Summary Panel (Priority: P2)

**Goal**: Summary panel shows today's task count, completed count, and completion rate.

**Independent Test**: Create 3 tasks for today → complete 1 → verify summary shows "1/3 (33%)".

### Implementation

- [ ] T024 [US6] Create `src/components/SummaryPanel.tsx`: compute today's total, completed, rate from task list
- [ ] T025 [US6] Mount `SummaryPanel` in `App.tsx` above the task list; pass current task list as prop

**Checkpoint**: Summary panel updates when tasks are completed

---

## Phase 9: Polish & Cross-Cutting Concerns

- [ ] T026 [P] Add responsive CSS for mobile layout (basic media queries)
- [ ] T027 [P] Add `src/components/Header.tsx` with app name and short description
- [ ] T028 Verify all empty-state messages are in place (FR-008)
- [ ] T029 Test localStorage error handling manually (corrupt data → graceful reset)
- [ ] T030 Run full manual test TC-001 through TC-009 and record results in `docs/04_test_plan.md`

---

## Dependencies & Execution Order

- **Phase 1** → No dependencies
- **Phase 2** → Requires Phase 1 (T006-T008 require T004-T005)
- **Phases 3-8** → All require Phase 2 completion; can be done sequentially
- **Phase 9** → Requires all prior phases

### MVP Scope

Complete **Phases 1–3 + Phase 7** for minimum viable demo:
- User can create a task and mark it complete — the core loop.
