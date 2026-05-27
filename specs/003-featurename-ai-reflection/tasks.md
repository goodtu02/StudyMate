# Tasks: AI Reflection Suggestion

**Input**: Design documents from `/specs/003-featurename-ai-reflection/`  
**Prerequisites**: Feature 001 + 002 complete ✅, plan.md ✅, spec.md ✅

---

## Phase 1: Setup

- [x] T001 Create `.env.example` with `VITE_AI_API_KEY=your_key_here` (for optional real API)
- [x] T002 Verify `.env` is in `.gitignore` (add if missing)

---

## Phase 2: Foundational

- [x] T003 Create `src/services/aiSuggestion.ts`:
  - Export `generateSuggestion(task: StudyTask): string` function
  - Default: mock implementation using template string
    - Template: `"Today I studied [title] in [category]. [isCompleted ? 'I successfully completed' : 'I worked on'] the planned study. [memo ? 'Key points: ' + memo : '']"`
  - Optional: if `import.meta.env.VITE_AI_API_KEY` is set, call real AI API instead

**Checkpoint**: `generateSuggestion` can be called and returns a non-empty string

---

## Phase 3: User Story 1 — AI Suggestion Button (Priority: P2)

**Goal**: Clicking "AI Suggestion" places a generated reflection text into the reflection textarea.

**Independent Test**: Open any task → click "✨ AI Suggestion" → verify a non-empty suggestion appears in the textarea → edit → save.

### Implementation

- [x] T004 [US1] Add "✨ AI Suggestion" button to `src/components/ReflectionArea.tsx`
- [x] T005 [US1] Wire button click to call `generateSuggestion(task)` and set the result as the textarea value
- [x] T006 [US1] Add loading state (button disabled + "Generating..." text) during async API call (even for mock, for consistency)
- [x] T007 [US1] If real API call fails, fall back to mock suggestion and log error to console

**Checkpoint**: TC-010 passes — suggestion button works, suggestion can be edited and saved

---

## Phase 4: Polish

- [x] T008 [P] Add tooltip or help text near AI button: "Generates a suggested reflection based on your task details"
- [x] T009 Document AI suggestion implementation decision in `docs/agent_logs.md` (mock vs. real API, rationale)

---

## Dependencies & Execution Order

- **Phase 1** → No dependencies (environment setup)
- **Phase 2** → Requires Phase 1
- **Phase 3** → Requires Phase 2 (service must exist before UI)
- **Phase 4** → Requires Phase 3

### MVP Scope

Complete **Phases 1–3**: TC-010 passes. Mock AI is fully acceptable.
