## 📌 Task

<!-- tasks.md의 Task ID와 설명을 그대로 붙여넣으세요 -->
**Task ID**: `T004-T007`
**Feature**: Feature `003`

## 📄 Description

<!-- 이 태스크에서 정확히 무엇을 해야 하는지 서술하세요 -->
- [ ] T004 [US1] Add "✨ AI Suggestion" button to `src/components/ReflectionArea.tsx`
- [ ] T005 [US1] Wire button click to call `generateSuggestion(task)` and set the result as the textarea value
- [ ] T006 [US1] Add loading state (button disabled + "Generating..." text) during async API call (even for mock, for consistency)
- [ ] T007 [US1] If real API call fails, fall back to mock suggestion and log error to console

**File(s) to modify/create**:
- `src/components/ReflectionArea.tsx`
- `src/components/TaskCard.tsx`

## ✅ Done Criteria

<!-- 이 태스크가 완료된 조건 (spec.md §13.6 기반) -->
- [ ] 요구사항을 만족한다
- [ ] 수동 테스트를 통과했다
- [ ] PR description에 변경사항 및 테스트 결과를 기록했다
- [ ] AI 사용 및 인간 검토 내용을 기록했다

## 🔗 Related

- **Feature Issue**: #63
- **Spec**: `specs/003-featurename-ai-reflection/spec.md`
