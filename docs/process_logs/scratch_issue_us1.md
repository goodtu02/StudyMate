## 📋 Feature Overview

사용자가 새로운 학습 태스크(제목, 날짜 등)를 생성하여 리스트에 추가하고 데이터를 저장할 수 있는 폼을 구현합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-001 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/components/TaskForm.tsx` 생성 및 필수/선택 필드 구현 (제목, 날짜 등)
- [ ] 제목과 날짜가 비어있을 경우 저장 방지 및 에러 메시지 표시 (폼 유효성 검사)
- [ ] `TaskForm`과 `storage.ts`의 `saveTasks()`를 연동하여 `src/App.tsx`의 상태 업데이트

## ✅ Acceptance Criteria

1. **Given** 학습 생성 폼에서, **When** 유효한 제목과 날짜를 입력하고 저장하면, **Then** 태스크가 생성되고 리스트에 표시된다.
2. **Given** 학습 생성 폼에서, **When** 필수 필드(제목, 날짜)를 누락하고 저장하면, **Then** 에러 메시지가 표시되고 태스크는 저장되지 않는다.
3. **Given** 태스크가 성공적으로 생성된 후, **When** 브라우저를 새로고침하면, **Then** 태스크가 유지된다.

## 🌿 Branch

`feat/create-a-study-task-form`

## 📌 Notes

- 컴포넌트 레벨에서의 간단한 유효성 검사 수행
- 데이터를 저장한 후에는 폼 초기화 수행
