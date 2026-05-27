import React from 'react';
import { StudyTask } from '../models/StudyTask';
import { TaskCard } from './TaskCard';

interface TaskListProps {
  tasks: StudyTask[];
  onUpdateTask?: (id: string, changes: Partial<StudyTask>) => void;
  onDeleteTask?: (id: string) => void;
  onToggleTask?: (id: string) => void;
  emptyMessage?: string;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask, onDeleteTask, onToggleTask, emptyMessage }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state" style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
        <p>{emptyMessage || 'No study tasks have been created yet. Add your first study plan for today.'}</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />
      ))}
    </div>
  );
};
