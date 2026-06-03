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
    return `오늘 ${task.category || '일반'} 과목의 "${task.title}" 학습을 진행했습니다. ${task.isCompleted ? '계획한 학습을 성공적으로 완료했습니다.' : '아직 진행 중인 학습입니다.'}${task.memo ? ' 핵심 내용: ' + task.memo : ''} 내일도 꾸준히 이어가 봅시다!`;
  }

  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`오늘 ${task.category || '일반'} 과목의 "${task.title}" 학습을 진행했습니다. ${task.isCompleted ? '계획한 학습을 성공적으로 완료했습니다.' : '아직 진행 중인 학습입니다.'}${task.memo ? ' 핵심 내용: ' + task.memo : ''} 내일도 꾸준히 이어가 봅시다!`);
    }, 1000); // Simulate 1 second network delay
  });
};
