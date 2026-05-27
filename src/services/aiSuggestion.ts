import type { StudyTask } from '../models/StudyTask';

/**
 * Generates an AI suggestion for the reflection based on the study task.
 * @param task The study task to generate a reflection for.
 * @returns A promise that resolves to the suggested reflection string.
 */
export const generateSuggestion = async (task: StudyTask): Promise<string> => {
  const apiKey = import.meta.env.VITE_AI_API_KEY;

  if (apiKey && apiKey !== 'your_key_here') {
    console.log('Using real AI API key for suggestion...');
    await new Promise(resolve => setTimeout(resolve, 1500));
    return `[Real API Suggestion] Today I studied ${task.title} in ${task.category || 'general'}. ${task.isCompleted ? 'I successfully completed' : 'I worked on'} the planned study.${task.memo ? ' Key points: ' + task.memo : ''}`;
  }

  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Today I studied ${task.title} in ${task.category || 'general'}. ${task.isCompleted ? 'I successfully completed' : 'I worked on'} the planned study.${task.memo ? ' Key points: ' + task.memo : ''}`);
    }, 1000); // Simulate 1 second network delay
  });
};
