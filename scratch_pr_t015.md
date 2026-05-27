## 📋 Summary

사용자가 `FilterBar`에서 탭('All', 'Today', 'Completed', 'Incomplete')을 선택할 때, 조건에 맞는 태스크만 화면에 렌더링되도록 필터 로직을 구현했습니다. 특히 'Today' 필터는 `dateUtils.isToday()` 유틸리티 함수를 사용해 판별합니다.

## 🔗 Related Issue

Closes #21

## 🌿 Branch

`feat/t015-filter-logic` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/App.tsx` | `isToday` 임포트 및 `currentFilter` 상태에 따른 `filteredTasks` 계산 로직 추가 |
| `specs/001-featurename-core-task/tasks.md` | T015 완료 처리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | 필터 로직 추가 요청 | switch 문을 통한 필터 로직 적용 코드 작성 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| TC-001 | 'All' 탭에서 모든 태스크 표시 여부 확인 | ✅ Pass |
| TC-002 | 'Today' 탭에서 오늘 등록된 태스크만 표시 여부 확인 | ✅ Pass |
| TC-003 | 'Completed', 'Incomplete' 탭에서 상태별 필터링 확인 | ✅ Pass |

**Manual test steps performed**:
1. 다수의 태스크 생성 후 다양한 필터 탭 클릭
2. 상태와 날짜에 맞게 리스트가 즉시 변경되는지 눈으로 확인

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

T015 단일 작업 건입니다. Phase 4(US2)의 마지막 체크포인트 기능이 모두 완성되었습니다.
