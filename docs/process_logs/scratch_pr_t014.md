## 📋 Summary

`TaskCard` 컴포넌트들을 리스트 형태로 렌더링하고, 등록된 태스크가 없을 경우 빈 화면(empty-state) 메시지를 표시하는 `TaskList` 컴포넌트를 구현했습니다.

## 🔗 Related Issue

Closes #19

## 🌿 Branch

`feat/t014-tasklist` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/components/TaskList.tsx` | TaskList 컴포넌트 신규 생성 및 empty-state 분기 처리 |
| `src/App.tsx` | 메인 렌더링 영역에 TaskList 컴포넌트 적용 |
| `specs/001-featurename-core-task/tasks.md` | T014 완료 처리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | TaskList 컴포넌트 생성 요청 | TaskList UI 코드 작성 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| - | 태스크가 없을 때 빈 화면 메시지 표시 | ✅ Pass |
| - | 태스크가 존재할 때 정상적인 목록 렌더링 | ✅ Pass |

**Manual test steps performed**:
1. 애플리케이션 초기 구동 시 "No study tasks have been created yet." 메시지가 뜨는지 확인
2. 새로운 태스크를 폼을 통해 추가한 후 리스트에 `TaskCard` 형태로 나타나는지 확인

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

T014 작업 건입니다.
