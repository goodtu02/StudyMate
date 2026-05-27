## 📋 Feature Overview

수정된 태스크 데이터를 기존 배열에서 찾아 업데이트하고 스토리지에 다시 저장하는 `updateTask` 로직을 구현합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-003 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/services/storage.ts` 파일에 `updateTask(id, changes)` 함수 구현
- [ ] 파라미터로 받은 `id`에 해당하는 태스크를 찾아 `changes` 객체로 병합하여 덮어쓰기
- [ ] 업데이트 시 해당 태스크의 `updatedAt` 필드를 현재 시간으로 자동 갱신
- [ ] 업데이트된 전체 리스트를 `saveTasks`를 이용해 localStorage에 다시 저장하고 반환

## ✅ Acceptance Criteria

1. **Given** 기존 데이터가 스토리지에 있고 특정 ID와 변경할 데이터를 전달하여 `updateTask`를 호출하면, **When** 스토리지를 확인했을 때, **Then** 해당 데이터만 변경되어 있고 `updatedAt` 필드가 현재 시간으로 갱신되어 있다.

## 🌿 Branch

`feat/t017-update-logic`

## 📌 Notes

- 변경이 성공하면 갱신된 새로운 전체 리스트를 반환하여 `App.tsx`에서 즉각적으로 상태를 동기화할 수 있도록 설계합니다.
