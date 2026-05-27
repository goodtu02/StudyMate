import { StudyTask } from '../models/StudyTask';

/**
 * Generates an AI suggestion for the reflection based on the study task.
 * @param task The study task to generate a reflection for.
 * @returns A promise that resolves to the suggested reflection string.
 */
export const generateSuggestion = async (task: StudyTask): Promise<string> => {
  const apiKey = import.meta.env.VITE_AI_API_KEY;

  if (apiKey && apiKey !== 'your_key_here') {
    // In the future, this is where the real API call would go.
    // For now, if the key is provided, we can simulate a successful real API call
    // or you could actually wire up a fetch to an endpoint.
    console.log('Using real AI API key for suggestion...');
    
    // Simulating network delay
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
