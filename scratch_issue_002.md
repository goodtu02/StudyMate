## 📋 Feature Overview

Implement Study Reflection (FR-006) which allows users to write, edit, and save a free-text reflection for each study task directly within the TaskCard.

## 🔗 Related Spec

- **Spec**: `specs/002-featurename-study-reflection/spec.md`
- **Plan**: `specs/002-featurename-study-reflection/plan.md`
- **Tasks**: `specs/002-featurename-study-reflection/tasks.md`
- **Requirements**: FR-006 (spec.md §5)

## 📝 Scope of Work

- [ ] Add `reflection` field to StudyTask model
- [ ] Implement `updateReflection` storage logic
- [ ] Create `ReflectionArea` component
- [ ] Integrate into `TaskCard`
- [ ] Add save feedback indicator

## ✅ Acceptance Criteria

1. **Given** a study task, **When** a user types into the reflection area and saves, **Then** the reflection is stored and persists on reload.
2. **Given** an existing reflection, **When** a user edits and saves it, **Then** the new text overwrites the old one and persists.

## 🌿 Branch

`feat/implement-study-reflection`

## 📌 Notes

- Will update `storage.ts` and `StudyTask.ts`
- Depends on Feature 001 core task management completion.
