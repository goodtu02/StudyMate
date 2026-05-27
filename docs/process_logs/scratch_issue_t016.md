## 📋 Feature Overview

`TaskCard` 컴포넌트에 'Edit' 버튼을 추가하고, 이 버튼을 클릭하면 해당 태스크의 기존 데이터를 미리 채운 상태로 `TaskForm`이 열려 수정할 수 있는 인라인 편집 모드를 구현합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-003 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/components/TaskForm.tsx` 수정: `initialData` 및 `onCancel` prop 추가하여 수정 모드 지원
- [ ] `src/components/TaskCard.tsx` 수정: 내부 상태로 `isEditing` 추가, 'Edit' 버튼 렌더링
- [ ] `TaskCard` 내에서 `isEditing`이 true일 때 기존 내용 대신 `TaskForm`을 렌더링
- [ ] 폼 취소 시 `isEditing`을 false로 변경하여 조회 모드로 복귀

## ✅ Acceptance Criteria

1. **Given** 태스크가 렌더링된 상태에서, **When** 'Edit' 버튼을 클릭하면, **Then** 해당 태스크의 데이터가 채워진 폼으로 UI가 전환된다.
2. **Given** 편집 폼이 열린 상태에서, **When** 'Cancel' 버튼을 클릭하면, **Then** 원래의 카드 형태로 UI가 복귀된다.

## 🌿 Branch

`feat/t016-task-edit-mode`

## 📌 Notes

- 저장 버튼을 눌렀을 때의 실제 상태 업데이트 로직은 T017, T018에서 별도 구현 예정이므로, 본 이슈에서는 UI 전환 및 폼 재사용 로직에만 집중합니다.
