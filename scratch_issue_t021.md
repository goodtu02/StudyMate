## 📋 Feature Overview

사용자가 개별 태스크의 완료 여부를 토글할 수 있도록 `TaskCard`에 체크박스를 추가합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-005 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/components/TaskCard.tsx` 수정: 좌측에 체크박스 UI 추가
- [ ] 체크박스의 상태(checked)를 `task.isCompleted` 속성에 바인딩
- [ ] 체크박스 상태 변경(onToggle)을 상위 컴포넌트로 전달하기 위한 `onToggleTask?: (id: string) => void` 추가 (T022에서 연동)

## ✅ Acceptance Criteria

1. 태스크 카드 영역 제목 옆이나 좌측에 완료 상태를 나타내는 체크박스가 표시되어야 한다.
2. `task.isCompleted`가 `true`일 경우 체크된 상태로, `false`일 경우 체크 해제된 상태로 표시되어야 한다.
3. 체크박스 클릭 시 `onToggleTask` 핸들러가 호출되어야 한다.

## 🌿 Branch

`feat/t021-task-completion-toggle`

## 📌 Notes

- 이 작업은 UI에 체크박스를 그리고 상태를 렌더링하는 것에 초점을 둡니다. T022에서 실제 `storage.ts`와 App 상태를 업데이트하는 로직을 결합합니다.
