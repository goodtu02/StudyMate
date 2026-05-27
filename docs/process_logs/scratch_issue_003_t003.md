## 📌 Task

<!-- tasks.md의 Task ID와 설명을 그대로 붙여넣으세요 -->
**Task ID**: `T003`
**Feature**: Feature `003`

## 📄 Description

<!-- 이 태스크에서 정확히 무엇을 해야 하는지 서술하세요 -->
- [ ] T003 Create `src/services/aiSuggestion.ts`:
  - Export `generateSuggestion(task: StudyTask): string` function
  - Default: mock implementation using template string
  - Optional: if `import.meta.env.VITE_AI_API_KEY` is set, call real AI API instead

**File(s) to modify/create**:
- `src/services/aiSuggestion.ts`

## ✅ Done Criteria

<!-- 이 태스크가 완료된 조건 (spec.md §13.6 기반) -->
- [ ] 요구사항을 만족한다
- [ ] 수동 테스트를 통과했다
- [ ] PR description에 변경사항 및 테스트 결과를 기록했다
- [ ] AI 사용 및 인간 검토 내용을 기록했다

## 🔗 Related

- **Feature Issue**: #63
- **Spec**: `specs/003-featurename-ai-reflection/spec.md`
