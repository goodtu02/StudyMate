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
        <div className="summary-stat-box total">
          <div className="stat-icon-wrapper">
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              height="18" 
              width="18"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div className="stat-info">
            <span className="summary-stat-label">Total</span>
            <span className="summary-stat-value">{total}</span>
          </div>
        </div>
        
        <div className="summary-stat-box completed">
          <div className="stat-icon-wrapper">
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              height="18" 
              width="18"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="stat-info">
            <span className="summary-stat-label">Completed</span>
            <span className="summary-stat-value completed">{completed}</span>
          </div>
        </div>
        
        <div className="summary-stat-box pending">
          <div className="stat-icon-wrapper">
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              height="18" 
              width="18"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div className="stat-info">
            <span className="summary-stat-label">Pending</span>
            <span className="summary-stat-value pending">{pending}</span>
          </div>
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
