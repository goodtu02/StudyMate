## 📋 Summary

사용자가 필터를 적용했을 때 필터 결과가 없는 경우와, 아예 등록된 태스크가 없는 경우를 구분하여 사용자에게 더 정확한 안내(Empty State)를 제공하도록 개선했습니다. (FR-008 요구사항 충족)

## 🔗 Related Issue

Closes #43

## 🌿 Branch

`chore/t028-empty-state-messages` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/components/TaskList.tsx` | 빈 화면 처리를 위해 `emptyMessage` prop을 선택적으로 받을 수 있도록 추가 |
| `src/App.tsx` | 전체 태스크 개수가 0개일 때와, 필터링된 결과가 0개일 때의 메시지를 다르게 하여 `emptyMessage`로 전달 |
| `specs/001-featurename-core-task/tasks.md` | T028 체크 완료 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| Empty State 로직 수정 | ✅ Yes | 필터 적용 여부에 따른 빈 화면 문구 개선 | `TaskList`에 prop 추가 및 `App.tsx`에서 조건부 텍스트 전달 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| 필터 결과 없음 확인 | 데이터가 1개 이상 있을 때 특정 필터(예: 'Completed')를 적용해 결과가 없으면 필터용 메시지가 노출되는지 확인 | ✅ Pass |

**Manual test steps performed**:
태스크를 1개 추가하고 'Completed' 탭(아직 완료되지 않은 상태)을 누르면 "No tasks found for the "Completed" filter." 라는 정확한 메시지가 렌더링됨을 확인했습니다.

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
- [x] **Assignees** 등록을 했다 (권한 문제로 수동 진행 필요)
- [x] **Label** 등록을 했다 (chore)

---

## 💬 Reviewer Notes

간단한 안내 문구 개선 작업입니다. 머지하고 바로 T029(에러 핸들링 테스트)로 넘어가겠습니다.
