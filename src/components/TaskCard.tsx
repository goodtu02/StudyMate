import React from 'react';
import { StudyTask } from '../models/StudyTask';

interface TaskCardProps {
  task: StudyTask;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className={`task-card ${task.isCompleted ? 'completed' : ''}`} style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: task.isCompleted ? '#f9f9f9' : '#fff',
      opacity: task.isCompleted ? 0.6 : 1
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
          {task.title}
        </h3>
        <span className="status-badge" style={{
          padding: '0.25rem 0.5rem',
          borderRadius: '4px',
          fontSize: '0.8rem',
          backgroundColor: task.isCompleted ? '#d4edda' : '#fff3cd',
          color: task.isCompleted ? '#155724' : '#856404'
        }}>
          {task.isCompleted ? 'Done' : 'Pending'}
        </span>
      </div>
      <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#555' }}>
        <strong>Date:</strong> {task.date}
        {task.category && (
          <span style={{ marginLeft: '1rem' }}>
            <strong>Category:</strong> {task.category}
          </span>
        )}
      </div>
    </div>
  );
};
