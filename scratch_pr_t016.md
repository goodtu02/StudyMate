## 📋 Summary

`TaskCard`에서 인라인으로 직접 편집할 수 있도록 'Edit' 버튼을 추가하고, 이 버튼 클릭 시 기존 데이터가 채워진 상태로 `TaskForm`이 나타나도록 구현했습니다.

## 🔗 Related Issue

Closes #23

## 🌿 Branch

`feat/t016-task-edit-mode` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/components/TaskForm.tsx` | `initialData` 및 `onCancel` prop 추가, 초기 상태 반영 로직, 수정/취소 버튼 분기 구현 |
| `src/components/TaskCard.tsx` | 'Edit' 버튼 추가 및 `isEditing` 상태에 따른 `TaskForm` 렌더링 분기 |
| `specs/001-featurename-core-task/tasks.md` | T016 완료 처리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | TaskCard와 TaskForm 연동 편집모드 구현 | TaskForm 재사용 및 TaskCard 토글 상태 로직 작성 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| - | 'Edit' 버튼 클릭 시 폼으로 전환되며 기존 내용이 채워지는지 확인 | ✅ Pass |
| - | 'Cancel' 버튼 클릭 시 원래의 카드 보기 상태로 복귀하는지 확인 | ✅ Pass |

**Manual test steps performed**:
1. 리스트 상의 임의의 태스크 카드에서 Edit 버튼 클릭
2. 폼 필드에 해당 카드의 기존 데이터(title, date 등)가 정상 채워진 것 확인
3. Cancel 버튼을 눌러 다시 카드로 돌아오는 것 확인

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

T016 단일 작업입니다. UI 전환 로직만 적용되었으며, 실제 스토리지 저장 및 전역 상태 업데이트는 T017, T018에서 진행됩니다.
