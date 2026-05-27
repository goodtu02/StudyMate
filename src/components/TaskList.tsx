import React from 'react';
import type { StudyTask } from '../models/StudyTask';
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
      <div className="empty-state-card glass-card">
        <svg 
          viewBox="0 0 200 150" 
          width="160" 
          height="120" 
          style={{ margin: '0 auto 1.25rem', display: 'block', maxWidth: '100%' }} 
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gradient-book" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="gradient-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0.08)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="120" rx="70" ry="12" fill="url(#gradient-shadow)" />
          {/* Main Book stack */}
          <rect x="55" y="82" width="90" height="20" rx="4" fill="var(--bg-secondary)" stroke="var(--border-color)" strokeWidth="1.5" />
          <path d="M55 92 L145 92" stroke="var(--border-color)" strokeWidth="1.5" />
          {/* Top Slanted Book */}
          <g transform="rotate(-10 100 68)">
            <rect x="60" y="55" width="80" height="20" rx="4" fill="url(#gradient-book)" stroke="var(--primary)" strokeWidth="1" />
            <path d="M70 55 L70 75" stroke="white" strokeWidth="1.5" opacity="0.5" />
          </g>
          {/* Sparkles / Stars */}
          <path d="M150 45 L153 51 L160 52 L155 57 L156 63 L150 60 L144 63 L145 57 L140 52 L147 51 Z" fill="var(--warning)" />
          <path d="M45 40 L47 44 L51 45 L48 48 L49 52 L45 50 L41 52 L42 48 L39 45 L43 44 Z" fill="var(--secondary)" opacity="0.6" transform="scale(0.8) translate(10, 10)" />
        </svg>
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
