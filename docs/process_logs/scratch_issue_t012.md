## 📋 Feature Overview

학습 태스크의 제목, 날짜, 카테고리, 상태 배지 등을 표시하는 `TaskCard` UI 컴포넌트를 구현합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-002 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/components/TaskCard.tsx` 생성
- [ ] 태스크 제목, 날짜, 카테고리 표시 UI 구현
- [ ] 태스크의 완료 상태(isCompleted)에 따른 상태 배지 표시

## ✅ Acceptance Criteria

1. **Given** 학습 태스크 데이터가 주어지면, **When** `TaskCard`를 렌더링하면, **Then** 제목, 날짜, 카테고리가 명확하게 표시된다.
2. **Given** 학습 태스크 데이터가 주어지면, **When** 완료 상태(`isCompleted`)가 참/거짓일 때, **Then** 상태를 나타내는 배지가 올바르게 표시된다.

## 🌿 Branch

`feat/t012-taskcard`

## 📌 Notes

- 상태에 따라 시각적인 구분이 가능하도록 간단한 스타일을 적용합니다.
