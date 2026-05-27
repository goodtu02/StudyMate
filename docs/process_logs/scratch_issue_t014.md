## 📋 Feature Overview

`TaskCard` 컴포넌트들을 리스트 형태로 렌더링하고, 데이터가 없을 때 빈 화면(empty-state) 메시지를 보여주는 `TaskList` 컴포넌트를 구현합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-002, FR-008 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/components/TaskList.tsx` 생성
- [ ] 전달받은 `StudyTask` 배열을 기반으로 `TaskCard` 리스트 렌더링
- [ ] 태스크 배열이 비어있을 경우 FR-008에 명시된 empty-state 메시지 표시
- [ ] `App.tsx`에서 렌더링하던 기존 리스트 로직을 `TaskList` 컴포넌트로 교체

## ✅ Acceptance Criteria

1. **Given** 태스크 데이터가 존재할 때, **When** `TaskList`가 렌더링되면, **Then** 각 데이터에 해당하는 `TaskCard` 목록이 표시된다.
2. **Given** 태스크 데이터가 없을 때, **When** `TaskList`가 렌더링되면, **Then** "No study tasks have been created yet."와 같은 empty-state 메시지가 화면에 표시된다.

## 🌿 Branch

`feat/t014-tasklist`

## 📌 Notes

- 리스트 UI를 관리하는 책임 분리
