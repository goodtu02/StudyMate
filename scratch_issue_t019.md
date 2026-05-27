## 📋 Feature Overview

사용자가 기존 태스크를 삭제할 수 있도록 `TaskCard` UI에 삭제(Delete) 버튼을 추가합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-004 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/components/TaskCard.tsx` 수정: 삭제 버튼 UI 추가
- [ ] `TaskCardProps`에 `onDeleteTask?: (id: string) => void` 추가 및 연동
- [ ] 버튼 스타일 추가 (예: 붉은색 텍스트 혹은 배경 등, 직관적인 삭제 UI)

## ✅ Acceptance Criteria

1. 태스크 카드 영역에 Delete 버튼이 시각적으로 표시되어야 한다.
2. 버튼 클릭 시 상위 컴포넌트로 삭제할 대상의 id를 전달할 수 있어야 한다.

## 🌿 Branch

`feat/t019-task-delete-btn`

## 📌 Notes

- 이 작업은 UI와 Prop 구조 변경에 초점을 둡니다. 실제 삭제를 수행하고 데이터를 지우는 로직은 T020에서 `App.tsx`와 `storage.ts` 단에서 진행합니다.
