## 📋 Summary

사용자가 새로운 학습 태스크(제목, 날짜 등)를 생성하여 리스트에 추가하고 데이터를 저장할 수 있는 폼 컴포넌트를 구현했습니다.

## 🔗 Related Issue

Closes #13

## 🌿 Branch

`feat/create-a-study-task-form` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/components/TaskForm.tsx` | TaskForm 컴포넌트 생성 및 폼 유효성 검사 추가 |
| `src/App.tsx` | TaskForm 연동, storage.ts 저장 로직 호출 및 상태 업데이트 구현 |
| `specs/001-featurename-core-task/tasks.md` | T009, T010, T011 완료 처리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | TaskForm 및 App 연동 구현 요청 | TaskForm 폼 구현 및 상태 로직 제공 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| TC-001 | 유효한 제목과 날짜 입력 시 저장 | ✅ Pass |
| TC-002 | 필수 필드 누락 시 에러 메시지 표시 및 저장 방지 | ✅ Pass |

**Manual test steps performed**:
1. 빈 폼에서 저장 버튼 클릭 -> 에러 메시지 확인
2. 제목과 날짜 입력 후 저장 버튼 클릭 -> 하단 리스트에 추가되는지 확인
3. 브라우저 새로고침(또는 상태 재초기화) 후 localStorage를 통해 데이터가 유지되는지 확인

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

MVP 동작을 위한 기본적인 Form 구현 및 검증이 완료되었습니다.
