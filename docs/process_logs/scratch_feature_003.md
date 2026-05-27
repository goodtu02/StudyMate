## 🎯 Feature Description

Add an "AI Suggestion" button to the reflection area. When clicked, a mock AI function generates a template-based reflection suggestion using the task's title, category, and memo. The suggestion is placed into the reflection input field for the user to edit before saving.

## 📝 Specifications

- **Spec Document**: `specs/003-featurename-ai-reflection/spec.md`
- **Related Requirements**: FR-007

## ✅ Acceptance Criteria

- [ ] AI Suggestion button is present in the ReflectionArea
- [ ] Clicking the button triggers a suggestion generation
- [ ] Loading state is displayed during generation
- [ ] Generated suggestion populates the reflection textarea
- [ ] API keys are securely handled via `.env` (Optional real API fallback)
