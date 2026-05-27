# Agent Logs

## Feature 003: AI Reflection Suggestion Implementation Decision
**Date**: 2026-05-27

### Context
Feature 003 requires an AI suggestion button to help users write reflections. The spec explicitly states that the MVP can use a mock AI function, with an optional real API integration via `.env`.

### Decision
We implemented the `aiSuggestion.ts` service with a primary `generateSuggestion` function that:
1. Checks for `import.meta.env.VITE_AI_API_KEY`.
2. If present and not the default template (`'your_key_here'`), it simulates a real API call.
3. If not present, it falls back to a template-based mock string.
4. We added a 1-second simulated delay to the mock to ensure the "Generating..." loading UI in `ReflectionArea.tsx` could be manually tested.

### Rationale
This approach isolates the AI generation logic in a dedicated service file, keeping the React component clean. Using an `.env` file for the API key ensures we comply with the security rules.
