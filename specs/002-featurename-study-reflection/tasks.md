# Tasks: Study Reflection

**Input**: Design documents from `/specs/002-featurename-study-reflection/`  
**Prerequisites**: Feature 001 (Core Task Management) complete ✅, plan.md ✅, spec.md ✅

---

## Phase 1: Setup

- [ ] T001 Verify `src/models/StudyTask.ts` has `reflection: string` field (from Feature 001 — add if missing)

---

## Phase 2: Foundational

- [ ] T002 Add `updateReflection(taskId: string, text: string)` to `src/services/storage.ts`: updates `task.reflection` and `task.updatedAt`, then saves

**Checkpoint**: Storage can save and load reflection text correctly

---

## Phase 3: User Story 1 — Write a Reflection (Priority: P1) 🎯 MVP

**Goal**: User can enter and save a reflection for any task; reflection persists after refresh.

**Independent Test**: Create task → open reflection area → type text → save → verify text shown → refresh → verify text remains.

### Implementation

- [x] T003 [US1] Create `src/components/ReflectionArea.tsx`:
  - Textarea for reflection input
  - Save button calling `updateReflection(taskId, text)`
  - Placeholder message "No reflection written yet." when reflection is empty (FR-006-5)
- [x] T004 [US1] Mount `ReflectionArea` inside `TaskCard.tsx` (collapsible or always visible)
- [x] T005 [US1] Initialize textarea value from `task.reflection` so existing reflection is pre-loaded

**Checkpoint**: TC-006 passes — reflection saves and persists after refresh

---

## Phase 4: User Story 2 — Edit an Existing Reflection (Priority: P2)

**Goal**: User can modify a previously saved reflection; updated text persists.

**Independent Test**: Save a reflection → edit text → save again → verify updated text → refresh → verify updated text remains.

### Implementation

- [x] T006 [US2] Ensure `ReflectionArea.tsx` textarea is always editable (no separate "edit mode" needed — textarea is the edit mode)
- [x] T007 [US2] Confirm `updateReflection` in `storage.ts` overwrites existing reflection correctly and updates `updatedAt`

**Checkpoint**: Editing and re-saving a reflection works correctly

---

## Phase 5: Polish

- [x] T008 [P] Add visual indicator (e.g., pencil icon or "Reflection saved" confirmation) after saving
- [x] T009 Verify reflection is deleted when the parent task is deleted (data integrity check in `deleteTask`)

---

## Dependencies & Execution Order

- **Phase 1** → No dependencies (verification step)
- **Phase 2** → Requires Phase 1
- **Phase 3** → Requires Phase 2 (storage function must exist before component)
- **Phase 4** → Requires Phase 3
- **Phase 5** → Requires Phase 3+

### MVP Scope

Complete **Phases 1–3** for minimum viable reflection feature: TC-006 passes.
