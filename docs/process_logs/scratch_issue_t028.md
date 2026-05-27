## 📋 Feature Overview

FR-008 요구사항에 따라 데이터가 없는 빈 상태(Empty State)에 대한 처리를 강화합니다.
특히 필터링 결과가 없을 때 노출되는 메시지를 좀 더 명확하게 수정합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`

## 📝 Scope of Work

- [ ] `TaskList.tsx` 컴포넌트가 `emptyMessage` prop을 받도록 수정
- [ ] `App.tsx`에서 필터 적용 여부에 따라 적절한 빈 화면 메시지를 `TaskList`에 전달
  - 예: 전체 태스크가 0개일 때: "No study tasks have been created yet..."
  - 예: 필터 적용 후 결과가 0개일 때: "No tasks found for the selected filter."

## ✅ Acceptance Criteria

1. 태스크가 아예 없을 때와, 필터링 결과만 없을 때의 빈 화면 안내 문구가 다르게 노출되어야 한다.

## 🌿 Branch

`chore/t028-empty-state-messages`

## 📌 Notes

- 사용성 개선(Polish) 목적입니다.
