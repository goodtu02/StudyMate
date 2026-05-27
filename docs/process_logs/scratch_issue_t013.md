## 📋 Feature Overview

사용자가 태스크 목록을 필터링할 수 있도록 'All', 'Today', 'Completed', 'Incomplete' 탭 버튼을 제공하는 `FilterBar` 컴포넌트를 구현합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-002 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/components/FilterBar.tsx` 생성
- [ ] 'All', 'Today', 'Completed', 'Incomplete' 4개의 탭 버튼 UI 구현
- [ ] 현재 선택된 필터 상태를 부모 컴포넌트와 공유할 수 있도록 props(`currentFilter`, `onFilterChange`) 추가

## ✅ Acceptance Criteria

1. **Given** FilterBar 컴포넌트가 렌더링될 때, **When** 화면을 확인하면, **Then** 4개의 탭 버튼이 명확히 표시된다.
2. **Given** 탭 버튼 중 하나를 클릭하면, **When** 해당 버튼이 활성화 상태로 변경되고, **Then** `onFilterChange` 콜백이 호출된다.

## 🌿 Branch

`feat/t013-filterbar`

## 📌 Notes

- 선택된 탭을 시각적으로 구분할 수 있는 CSS 스타일링 포함
