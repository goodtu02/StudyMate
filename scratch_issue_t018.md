## 📋 Feature Overview

`App.tsx`에서 개별 태스크가 수정되었을 때 상태를 업데이트할 수 있는 핸들러를 만들고, 이를 `TaskList`와 `TaskCard`에 전달하여 사용자가 UI에서 편집을 완료하면 전체 목록과 로컬 스토리지가 즉시 동기화되도록 연동합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-003 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/App.tsx` 내에 `handleUpdateTask(id, changes)` 함수 구현 (내부에서 `storage.ts`의 `updateTask` 호출 및 반환된 새 리스트로 `setTasks`)
- [ ] `src/components/TaskList.tsx`에 `onUpdateTask` prop 추가 및 `App.tsx`에서 전달
- [ ] `src/components/TaskCard.tsx`에 `onUpdateTask` prop 추가 및 `TaskList`에서 전달
- [ ] `TaskCard`의 인라인 편집 폼(TaskForm)의 저장 이벤트에 `onUpdateTask` 연결

## ✅ Acceptance Criteria

1. **Given** 여러 태스크가 있고 리스트 화면에 있을 때, **When** 특정 태스크의 Edit 버튼을 눌러 내용을 수정하고 Update 버튼을 누르면, **Then** 폼이 즉시 닫히고 화면 상의 해당 카드의 내용이 변경된 내용으로 보여야 한다.
2. 새로고침을 해도 수정한 데이터가 로컬 스토리지에 정상적으로 유지되어야 한다.

## 🌿 Branch

`feat/t018-wire-edit-save`

## 📌 Notes

- T016, T017의 작업을 최종적으로 화면에 통합하는 이슈입니다. 이것이 완료되면 US3 (Edit a Task) 구현이 완성됩니다.
