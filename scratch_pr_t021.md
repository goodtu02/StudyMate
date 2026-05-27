## 📋 Summary

`TaskCard` 컴포넌트 내에 개별 태스크의 완료 상태(`isCompleted`)를 보여주고 토글할 수 있는 체크박스 UI를 추가했습니다.

## 🔗 Related Issue

Closes #33

## 🌿 Branch

`feat/t021-task-completion-toggle` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/components/TaskCard.tsx` | 제목 좌측에 `input type="checkbox"` 추가 및 `onToggleTask` prop 연결 |
| `specs/001-featurename-core-task/tasks.md` | T021 완료 처리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | TaskCard 내 체크박스 추가 및 onToggleTask prop 연동 | 체크박스 및 제목을 묶어 플렉스 컨테이너로 배치하는 코드 작성 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| - | 완료 여부에 따른 체크박스 상태(`checked`) 노출 확인 | ✅ Pass |
| - | 체크박스 클릭 시 `onToggleTask` 호출 여부 확인 | ✅ Pass |

**Manual test steps performed**:
버튼 UI 노출과 기본적인 onChange 이벤트가 정상 트리거되는 것을 확인했습니다. 실제 스토리지 변경 로직은 T022 단계에서 완료 후 전체 테스트를 진행합니다.

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

UI 레벨의 체크박스 추가 작업입니다. 다음 T022 이슈에서 `App.tsx` 전역 상태 및 로컬 스토리지와 연동하여 Phase 7을 마무리할 예정입니다.
