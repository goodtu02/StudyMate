import { StudyTask } from '../models/StudyTask';

const STORAGE_KEY = 'studymate_tasks';

export const loadTasks = (): StudyTask[] => {
  return parseTasksSafely(localStorage.getItem(STORAGE_KEY));
};

export const saveTasks = (tasks: StudyTask[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to localStorage:', error);
  }
};

export const parseTasksSafely = (data: string | null): StudyTask[] => {
  if (!data) return [];
  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (error) {
    console.error('Failed to parse tasks from localStorage. Resetting to empty state.', error);
    // Error boundary logic: reset to empty state on parse failure
    return [];
  }
};

export const updateTask = (id: string, changes: Partial<StudyTask>): StudyTask[] => {
  const tasks = loadTasks();
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks[index] = {
      ...tasks[index],
      ...changes,
      updatedAt: new Date().toISOString()
    };
    saveTasks(tasks);
  }
  return tasks;
};

export const deleteTask = (id: string): StudyTask[] => {
  const tasks = loadTasks();
  const updatedTasks = tasks.filter(task => task.id !== id);
  saveTasks(updatedTasks);
  return updatedTasks;
};

export const updateReflection = (taskId: string, text: string): StudyTask[] => {
  return updateTask(taskId, { reflection: text });
};
