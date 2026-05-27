# Tasks: Testing and Quality Management

**Input**: Design documents from `/specs/004-featurename-testing-and/`  
**Prerequisites**: Features 001, 002, 003 complete ✅, plan.md ✅, spec.md ✅

---

## Phase 1: Setup

- [x] T001 Create `docs/04_test_plan.md` with the TC-001–TC-010 table structure from spec.md §12.3 (Status column: Pass/Fail/Pending)
- [x] T002 Create `docs/05_quality_management.md` with sections: Code Quality Review, AI Output Review, Refactoring Log, Definition of Done Checklist
- [x] T003 [P] Create `docs/screenshots/` directory

---

## Phase 2: Manual Test Execution (Must Have Tests)

**⚠️ CRITICAL**: Run in the order listed; record Pass/Fail for each test case in `docs/04_test_plan.md`

- [x] T004 Run TC-001 (Create task valid)
- [x] T005 Run TC-002 (Create task empty)
- [x] T006 Run TC-003 (Today's task)
- [x] T007 Run TC-004 (Complete task)
- [x] T008 Run TC-005 (Refresh after complete)
- [x] T009 Run TC-006 (Reflection)
- [x] T010 Run TC-007 (Edit task)
- [x] T011 Run TC-008 (Delete task)
- [x] T012 Run TC-009 (Persistence)
- [x] T013 Run TC-010 (AI suggestion)

**Checkpoint**: All TC-001 through TC-010 results recorded in `docs/04_test_plan.md`

---

## Phase 3: Bug Documentation and Fixing

- [ ] T014 For each failed test case: create a GitHub Issue using the Bug Report format from spec.md §12.4
- [ ] T015 Fix identified bugs (each fix in a separate commit referencing the Issue number)
- [ ] T016 Re-run failed test cases after fixes and record retest results in `docs/04_test_plan.md`

**Checkpoint**: All Must Have test cases (TC-001 through TC-009) pass

---

## Phase 4: Code Quality Review

Apply spec.md §13.2–§13.5 review criteria to each major code section:

- [ ] T017 [P] Review `src/services/storage.ts` against AI Output Review criteria (spec.md §13.5)
- [ ] T018 [P] Review `src/components/TaskForm.tsx` — check single responsibility, error handling
- [ ] T019 [P] Review `src/components/TaskCard.tsx` — check state logic, visual distinction
- [ ] T020 [P] Review `src/services/aiSuggestion.ts` — check fallback handling
- [ ] T021 Extract any duplicated logic into utility functions (commit under `refactor/quality-pass` branch)
- [ ] T022 Record review findings in `docs/05_quality_management.md` (accepted / modified / rejected per §9.4)

---

## Phase 5: Screenshots

- [ ] T023 Capture screenshot: app home page with task list (docs/screenshots/01_task_list.png)
- [ ] T024 Capture screenshot: task creation form (docs/screenshots/02_task_form.png)
- [ ] T025 Capture screenshot: today's tasks highlighted (docs/screenshots/03_today_tasks.png)
- [ ] T026 Capture screenshot: completed task (docs/screenshots/04_completed_task.png)
- [ ] T027 Capture screenshot: reflection area with saved text (docs/screenshots/05_reflection.png)
- [ ] T028 Capture screenshot: AI suggestion in textarea (docs/screenshots/06_ai_suggestion.png)
- [ ] T029 Update README to reference screenshots and document setup/run instructions

---

## Phase 6: Final Verification

- [ ] T030 Confirm Definition of Done (spec.md §13.6) is met for all merged features
- [ ] T031 Verify all GitHub Issues, PRs, and Discussions are in order per spec.md §11
- [ ] T032 Commit final `docs/04_test_plan.md` and `docs/05_quality_management.md`

---

## Dependencies & Execution Order

- **Phase 1** → No dependencies
- **Phase 2** → Requires all features (001, 002, 003) to be stable and merged
- **Phase 3** → Requires Phase 2
- **Phase 4** → Can start in parallel with Phase 3 (different files)
- **Phase 5** → Requires Phase 3 (bugs fixed before screenshots)
- **Phase 6** → Requires all prior phases

### MVP Scope

Complete **Phases 1–3**: TC-001 through TC-009 pass and results documented. This is required for a passing assignment grade.
