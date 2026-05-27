## 📋 Summary

Creates `aiSuggestion.ts` service with mock implementation and placeholder for real API calls (T003).

## 🔗 Related Issue

Closes #66

## 🌿 Branch

`task/t003-create-ai-suggestion-service` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/services/aiSuggestion.ts` | New file with `generateSuggestion` function |
| `specs/003-featurename-ai-reflection/tasks.md` | Update task progress |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | aiSuggestion.ts 로직 작성 | mock 템플릿 반환 및 딜레이 로직 구현 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| N/A | Foundational API logic | ⏭️ Skip |

**Manual test steps performed**:
1. Run `npx tsc --noEmit` to verify type safety.

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

N/A
