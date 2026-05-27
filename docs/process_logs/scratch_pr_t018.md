## 📋 Summary

`App.tsx`에서 개별 태스크를 업데이트하고 리스트 상태를 갱신하는 핸들러(`handleUpdateTask`)를 생성했습니다. 이를 `TaskList`와 `TaskCard` 컴포넌트로 전달하여, 태스크 카드 내의 인라인 편집(TaskForm)을 완료하면 화면 상의 리스트 및 로컬 스토리지가 즉각 동기화되도록 구현했습니다.

## 🔗 Related Issue

Closes #27

## 🌿 Branch

`feat/t018-wire-edit-save` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/App.tsx` | `updateTask` 임포트 및 `handleUpdateTask` 구현, `<TaskList>`에 전달 |
| `src/components/TaskList.tsx` | `onUpdateTask` prop 추가 및 `<TaskCard>`로 전달 |
| `src/components/TaskCard.tsx` | `onUpdateTask` prop 추가, TaskForm의 `onSave` 이벤트에서 이를 호출하도록 연동 |
| `specs/001-featurename-core-task/tasks.md` | T018 완료 처리 (Phase 5: US3 완료) |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | 컴포넌트 간 상태 업데이트 함수 전달 | App.tsx -> TaskList -> TaskCard 계층적 prop 전달 코드 작성 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| TC-007 | 태스크 수정 시 화면 즉시 갱신 및 새로고침 후 데이터 유지 | ✅ Pass |

**Manual test steps performed**:
1. 임의의 태스크 생성
2. 해당 태스크의 Edit 버튼 클릭
3. Title, Date 등의 내용 변경 후 Update Task 클릭
4. 편집 폼이 닫히며 즉시 수정된 내용으로 화면 표시되는 것 확인
5. 브라우저 새로고침 후에도 수정된 내용이 정상 유지되는 것 확인

---

## ✅ Definition of Done Checklist

- [x] 관련 요구사항(FR-XXX)을 만족한다
- [x] 수동 테스트를 통과했다
- [x] 이 PR description에 변경사항을 기록했다
- [x] 이 PR description에 테스트 결과를 기록했다
- [x] AI 사용 내역을 위 테이블에 기록했다
- [x] 인간 검토(Human Review) 결과를 위 테이블에 기록했다
- [x] 관련 Issue가 연결되어 있다
- [x] 브랜치명이 spec.md §11.2 형식을 따른다
- [x] 커밋 메시지가 `type: short summary` 형식을 따른다 (spec.md §11.3)
- [x] **Assignees** 등록을 했다
- [x] **Label** 등록을 했다

---

## 💬 Reviewer Notes

T018 작업 완료로 **Phase 5 (US3 — Edit a Task)** 목표를 모두 달성했습니다. 인라인 수정 기능이 완벽히 작동합니다.
