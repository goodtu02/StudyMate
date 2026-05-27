## 📋 Summary

태스크 목록 상단에 위치하여 사용자가 'All', 'Today', 'Completed', 'Incomplete' 탭을 통해 목록을 필터링할 수 있도록 돕는 `FilterBar` 컴포넌트를 구현했습니다.

## 🔗 Related Issue

Closes #17

## 🌿 Branch

`feat/t013-filterbar` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/components/FilterBar.tsx` | 4개의 탭을 표시하고 선택 시 콜백을 호출하는 UI 구현 |
| `src/App.tsx` | `FilterBar` 렌더링 및 `currentFilter` 상태 변수 추가 |
| `specs/001-featurename-core-task/tasks.md` | T013 완료 처리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | FilterBar 컴포넌트 생성 요청 | FilterBar UI 및 상태 콜백 코드 작성 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| - | 컴포넌트 마운트 및 활성 탭 UI 반응 확인 | ✅ Pass |

**Manual test steps performed**:
1. 메인 화면 렌더링 확인 (4개의 버튼 정상 표시)
2. 각 버튼을 클릭할 때마다 클릭한 버튼만 활성화(배경색 파란색)되는지 확인

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

T013 단일 작업 건입니다. 아직 실제 필터링 로직은 적용되지 않았으며, UI와 상태값 연동까지만 진행되었습니다. 필터 로직은 T014/T015에서 진행될 예정입니다.
