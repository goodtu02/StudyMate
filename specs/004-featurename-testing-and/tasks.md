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

- [x] T014 [US-BUG] Create Issues for bugs (Skipped: No bugs found)
- [x] T015 [US-BUG] Fix bugs (write failing test first) (Skipped: No bugs found)
- [x] T016 [US-BUG] Re-run tests and record in 04_test_plan.md (Skipped: No bugs found)

**Checkpoint**: All Must Have test cases (TC-001 through TC-009) pass

---

## Phase 4: Code Quality Review

Apply spec.md §13.2–§13.5 review criteria to each major code section:

- [x] T017 Review `src/services/storage.ts` for FR-QUAL-003 compliance (Error Handling)
- [x] T018 Review `src/components/TaskForm.tsx` for FR-QUAL-002 (DRY principles)
- [x] T019 Review `src/components/TaskCard.tsx` for FR-QUAL-002 (DRY principles)
- [x] T020 Review `src/services/aiSuggestion.ts` for FR-QUAL-001 (Security)
- [x] T021 [US-REF] Extract duplicated logic (e.g. form fields, date formatting) into reusable utilities or components (with TDD)
- [x] T022 Record findings and refactoring results in `docs/05_quality_management.md` (accepted / modified / rejected per §9.4)

---

## Phase 5: Screenshots and Documentation

- [x] T023 Launch application locally (`npm run dev`)
- [x] T024 Capture `docs/screenshots/home_empty.png` (Empty list state)
- [x] T025 Capture `docs/screenshots/create_task.png` (Filled form)
- [x] T026 Capture `docs/screenshots/home_tasks.png` (List with tasks)
- [x] T027 Capture `docs/screenshots/reflection.png` (Reflection UI)
- [x] T028 Update `README.md` to include these screenshots (spec.md §13.6)
- [x] T029 Create PR to merge Feature 004 into `dev`

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
