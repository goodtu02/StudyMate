## 📋 Summary

로컬 스토리지에 저장된 특정 태스크를 삭제하고(state 반영), 이를 화면에 즉시 업데이트하는 기능(T020)을 구현했습니다. T019에서 추가한 UI 삭제 이벤트(`onDeleteTask`)를 App.tsx 최상단까지 끌어올려 전역 상태와 스토리지를 동기화했습니다.

## 🔗 Related Issue

Closes #31

## 🌿 Branch

`feat/t020-wire-delete-logic` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/services/storage.ts` | `deleteTask(id)` 구현: 대상 ID를 제외한 목록을 스토리지에 재저장 |
| `src/App.tsx` | `deleteTask` 호출 및 반환된 배열로 `setTasks`를 수행하는 `handleDeleteTask` 추가 |
| `src/components/TaskList.tsx` | `<TaskCard>`에 `onDeleteTask` 연결 (App.tsx에서 넘겨받은 prop 사용) |
| `specs/001-featurename-core-task/tasks.md` | T020 체크 완료로 Phase 6 (US4) 모두 마무리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 스토리지 로직 | ✅ Yes | storage.ts 삭제 로직 추가 | deleteTask 구현 코드 생성 | 검토 후 수용 |
| 상태 연동 | ✅ Yes | App.tsx 상태 변경 로직 연동 | handleDeleteTask 생성 및 props 전달 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| TC-008 | 태스크 삭제 시 즉시 리스트에서 제거되고 새로고침해도 반영 유지 | ✅ Pass |

**Manual test steps performed**:
1. 앱 화면에서 기존 태스크의 Delete 버튼 클릭
2. 브라우저 confirm 창에서 "확인" 클릭
3. 클릭 즉시 목록에서 해당 태스크 제거됨을 확인
4. 브라우저를 새로고침한 뒤에도 삭제된 상태가 유지됨을 확인

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

이 PR을 통해 **Phase 6: User Story 4 (Delete a Task)**가 완전히 구현되었습니다. 이제 개별 태스크의 CRUD(생성, 조회, 수정, 삭제) 사이클이 기본적으로 완성되었습니다.
