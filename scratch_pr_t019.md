## 📋 Summary

기존 `TaskCard` 컴포넌트 내에 태스크를 삭제할 수 있는 'Delete' 버튼을 추가하고, 클릭 시 사용자 확인을 거친 후 상위 컴포넌트로 삭제 이벤트를 전달하는 `onDeleteTask` prop을 적용했습니다.

## 🔗 Related Issue

Closes #29

## 🌿 Branch

`feat/t019-task-delete-btn` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/components/TaskCard.tsx` | `onDeleteTask` prop 추가 및 빨간색 계열의 Delete 버튼 UI 구성 |
| `specs/001-featurename-core-task/tasks.md` | T019 완료 처리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | TaskCard 삭제 버튼 UI 추가 요청 | onDeleteTask 콜백 및 확인창이 포함된 UI 버튼 구현 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| - | Delete 버튼 UI의 렌더링 확인 | ✅ Pass |
| - | 버튼 클릭 시 확인(confirm) 창 동작 확인 | ✅ Pass |

**Manual test steps performed**:
버튼 UI 노출과 JS 기본 confirm 모달이 정상 동작하는 것을 확인했습니다. 실제 삭제 기능 연동은 T020 단계에서 완료 후 전체 테스트를 진행합니다.

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

UI 버튼만 먼저 적용한 작업입니다. T020에서 `App.tsx` 연동 후 Phase 6를 마무리하겠습니다.
