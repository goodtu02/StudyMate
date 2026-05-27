import React from 'react';
import type { StudyTask } from '../models/StudyTask';

interface SummaryPanelProps {
  tasks: StudyTask[];
}

export const SummaryPanel: React.FC<SummaryPanelProps> = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.isCompleted).length;
  const pending = total - completed;
  const progressPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="summary-card glass-card">
      <div className="summary-grid">
        <div className="summary-stat-box">
          <span className="summary-stat-label">Total</span>
          <span className="summary-stat-value">{total}</span>
        </div>
        <div className="summary-stat-box">
          <span className="summary-stat-label">Completed</span>
          <span className="summary-stat-value completed">{completed}</span>
        </div>
        <div className="summary-stat-box">
          <span className="summary-stat-label">Pending</span>
          <span className="summary-stat-value pending">{pending}</span>
        </div>
      </div>
      
      <div className="summary-progress-wrapper">
        <div className="summary-progress-info">
          <span>Progress</span>
          <span>{progressPercentage}%</span>
        </div>
        <div className="summary-progress-bar-bg">
          <div 
            className="summary-progress-bar-fill" 
            style={{ width: `${progressPercentage}%` }}
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  );
};
