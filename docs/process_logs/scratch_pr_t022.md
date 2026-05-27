## 📋 Summary

T021에서 UI에 추가한 체크박스를 통해 발생하는 상태 반전 이벤트(`onToggleTask`)를 `App.tsx`에서 수신하고, 전역 상태(state)와 로컬 스토리지 데이터의 `isCompleted` 속성을 업데이트하도록 연동했습니다.

## 🔗 Related Issue

Closes #35

## 🌿 Branch

`feat/t022-wire-toggle-logic` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/App.tsx` | 특정 태스크의 `isCompleted` 상태를 반전시켜 `updateTask`를 호출하고 배열을 다시 설정하는 `handleToggleTask` 추가 |
| `src/components/TaskList.tsx` | App.tsx로부터 받은 `handleToggleTask`를 `<TaskCard>`로 전달 |
| `specs/001-featurename-core-task/tasks.md` | T022 체크 완료로 Phase 7 (US5) 모두 마무리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 상태 연동 | ✅ Yes | App.tsx에서 토글 이벤트 수신 및 업데이트 로직 작성 | handleToggleTask 생성 및 updateTask에 반전된 값 전달 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| TC-009 | 태스크 완료 시 체크박스 상태, 취소선, 회색 처리 및 새로고침 후 유지 확인 | ✅ Pass |
| TC-010 | 완료된 태스크를 다시 미완료로 변경 시 정상 복구 및 새로고침 후 유지 확인 | ✅ Pass |

**Manual test steps performed**:
1. 앱 화면에서 기존 미완료 태스크의 체크박스 클릭
2. 체크박스가 체크되며 카드 전체가 흐려지고(opacity 0.6) 제목에 취소선이 생기는지 확인
3. 브라우저를 새로고침한 뒤에도 완료 상태가 유지됨을 확인
4. 다시 체크박스를 클릭하여 미완료 상태로 돌아오는 것 확인

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

이 PR을 통해 **Phase 7: User Story 5 (Toggle Task Completion)**가 완벽히 구현되었습니다. 태스크의 완료 처리가 실시간으로 상태 및 스토리지에 반영됩니다.
