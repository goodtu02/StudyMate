## 📋 Feature Overview

`TaskCard`에서 발생한 완료 상태 토글(체크박스 클릭) 이벤트를 `App.tsx`에서 받아 로컬 스토리지에 반영하고, 화면 상태를 즉시 업데이트합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-005 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/App.tsx` 내에 `handleToggleTask(id: string)` 함수 추가
- [ ] 현재 태스크의 `isCompleted` 상태를 반전시켜 `updateTask(id, { isCompleted: !current })` 호출
- [ ] 반환된 최신 배열로 `setTasks` 업데이트
- [ ] `<TaskList>`에 `onToggleTask` 전달

## ✅ Acceptance Criteria

1. 태스크 카드의 체크박스를 클릭하면 즉시 완료(또는 미완료) 상태가 시각적으로 토글되어야 한다 (취소선, 투명도 등).
2. 새로고침을 해도 토글된 상태가 그대로 유지되어야 한다.

## 🌿 Branch

`feat/t022-wire-toggle-logic`

## 📌 Notes

- T021에서 만들어 둔 `onToggleTask` prop과 실제 스토리지 변경 로직을 이어주는 단계입니다. 이를 통해 Phase 7 (US5)가 모두 완료됩니다.
