import React, { useState } from 'react';
import type { StudyTask } from '../models/StudyTask';
import { TaskForm } from './TaskForm';
import { ReflectionArea } from './ReflectionArea';
import { Button } from './ui/Button';

interface TaskCardProps {
  task: StudyTask;
  onUpdateTask?: (id: string, changes: Partial<StudyTask>) => void;
  onDeleteTask?: (id: string) => void;
  onToggleTask?: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onUpdateTask, onDeleteTask, onToggleTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <div className="task-item-card glass-card editing-card" style={{ border: '2px solid var(--primary)' }}>
        <TaskForm 
          initialData={task} 
          onSave={(updatedTask) => {
            if (onUpdateTask) {
              onUpdateTask(task.id, updatedTask);
            }
            setIsEditing(false);
          }} 
          onCancel={() => setIsEditing(false)} 
        />
      </div>
    );
  }

  return (
    <div className={`task-item-card glass-card ${task.isCompleted ? 'completed' : ''}`}>
      <div className="task-card-header">
        <div className="task-card-title-group">
          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={task.isCompleted} 
              onChange={() => {
                if (onToggleTask) {
                  onToggleTask(task.id);
                }
              }}
            />
            <span className="checkbox-checkmark">
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          </label>
          <h3 className={`task-card-title ${task.isCompleted ? 'line-through' : ''}`}>
            {task.title}
          </h3>
        </div>
        <div className="task-card-actions">
          <span className={`tag-badge status ${task.isCompleted ? 'success' : 'pending'}`}>
            {task.isCompleted ? 'Done' : 'Pending'}
          </span>
          <Button onClick={() => setIsEditing(true)}>
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => {
              if (onDeleteTask && window.confirm('Are you sure you want to delete this task?')) {
                onDeleteTask(task.id);
              }
            }}
          >
            Delete
          </Button>
        </div>
      </div>
      
      <div className="task-meta-row">
        <div className="meta-item">
          <svg 
            stroke="currentColor" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            height="14" 
            width="14"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>{task.date}</span>
        </div>
        {task.category && (
          <div className="meta-item">
            <span className="tag-badge category">{task.category}</span>
          </div>
        )}
        {task.estimatedMinutes && (
          <div className="meta-item">
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              height="14" 
              width="14"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{task.estimatedMinutes} mins</span>
          </div>
        )}
      </div>
      
      <ReflectionArea 
        task={task} 
        onSave={(taskId, text) => {
          if (onUpdateTask) {
            onUpdateTask(taskId, { reflection: text });
          }
        }} 
      />
    </div>
  );
};
