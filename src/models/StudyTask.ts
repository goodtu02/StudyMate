export interface StudyTask {
  id: string; // UUID
  title: string; // Required: Task name (e.g., "Math Chapter 1")
  date: string; // Required: Target date (YYYY-MM-DD)
  isCompleted: boolean; // Required: Completion status
  category?: string; // Optional: Subject or category
  estimatedMinutes?: number; // Optional: Estimated time to complete
  memo?: string; // Optional: Additional notes
  reflection?: string; // Optional: Post-study reflection text
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  completedAt?: string; // ISO date string (set when marked complete)
}
