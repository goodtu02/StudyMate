## 📋 Feature Overview

스토리지에서 특정 태스크를 삭제하고, 이 변경사항을 앱의 전체 상태에 반영하여 UI 상에서 즉시 태스크가 사라지게 하는 로직을 구현합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-004 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/services/storage.ts`에 `deleteTask(id: string)` 구현: 특정 ID 제외하고 로컬 스토리지에 재저장
- [ ] `src/App.tsx`에 `handleDeleteTask(id: string)` 구현하여 `setTasks` 상태 갱신
- [ ] `<TaskList>`와 `<TaskCard>`를 통해 `handleDeleteTask` 전달 (T019에서 만들어둔 `onDeleteTask` prop 연결)

## ✅ Acceptance Criteria

1. 태스크 카드의 Delete 버튼을 클릭하고 확인을 누르면, 리스트에서 즉시 태스크가 제거된다.
2. 새로고침을 해도 해당 태스크는 다시 나타나지 않는다. (로컬 스토리지에서 삭제됨)

## 🌿 Branch

`feat/t020-wire-delete-logic`

## 📌 Notes

- T019에서 추가한 UI와 `onDeleteTask` prop을 실제 데이터 변경 로직과 연결함으로써 Phase 6(User Story 4)가 모두 완료됩니다.
