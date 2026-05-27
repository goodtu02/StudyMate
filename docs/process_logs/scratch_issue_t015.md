## 📋 Feature Overview

사용자가 `FilterBar`에서 선택한 탭('All', 'Today', 'Completed', 'Incomplete')에 맞게 태스크 리스트가 실제 필터링되도록 로직을 추가합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-002 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/App.tsx` 또는 `src/components/TaskList.tsx`에 필터링 로직 구현
- [ ] 'Today' 필터 시 `dateUtils.isToday()` 함수를 사용하여 오늘 날짜의 데이터만 표시
- [ ] 'Completed', 'Incomplete' 탭 클릭 시 각각 상태(`isCompleted`)에 맞게 데이터 표시
- [ ] 'All' 탭 선택 시 모든 데이터 표시

## ✅ Acceptance Criteria

1. **Given** 태스크들이 존재하고 필터가 'All'로 설정되어 있으면, **When** 리스트를 렌더링하면, **Then** 모든 태스크가 표시된다.
2. **Given** 태스크들이 존재하고 필터가 'Today'로 설정되어 있으면, **When** 리스트를 렌더링하면, **Then** 오늘 날짜로 등록된 태스크만 표시된다.
3. **Given** 태스크들이 존재하고 필터가 'Completed' 혹은 'Incomplete'로 설정되어 있으면, **When** 리스트를 렌더링하면, **Then** 해당 완료 상태와 일치하는 태스크만 표시된다.

## 🌿 Branch

`feat/t015-filter-logic`

## 📌 Notes

- `src/utils/dateUtils.ts` 의 `isToday` 함수를 반드시 활용하여 오늘 여부를 검증합니다.
