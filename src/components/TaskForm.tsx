import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { StudyTask } from '../models/StudyTask';
import { Button } from './ui/Button';

interface TaskFormProps {
  onSave: (task: StudyTask) => void;
  initialData?: StudyTask;
  onCancel?: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSave, initialData, onCancel }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [date, setDate] = useState(initialData?.date || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [estimatedMinutes, setEstimatedMinutes] = useState<number | ''>(initialData?.estimatedMinutes || '');
  const [memo, setMemo] = useState(initialData?.memo || '');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDate(initialData.date);
      setCategory(initialData.category || '');
      setEstimatedMinutes(initialData.estimatedMinutes || '');
      setMemo(initialData.memo || '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !date.trim()) {
      setError('Please enter both a study title and a study date.');
      return;
    }

    const now = new Date().toISOString();
    const taskData: StudyTask = {
      id: initialData?.id || uuidv4(),
      title: title.trim(),
      date,
      isCompleted: initialData?.isCompleted || false,
      category: category.trim() || undefined,
      estimatedMinutes: typeof estimatedMinutes === 'number' ? estimatedMinutes : undefined,
      memo: memo.trim() || undefined,
      createdAt: initialData?.createdAt || now,
      updatedAt: now,
    };

    onSave(taskData);

    if (!initialData) {
      // Reset form
      setTitle('');
      setDate('');
      setCategory('');
      setEstimatedMinutes('');
      setMemo('');
    }
  };

  return (
    <div className="task-form-card glass-card">
      <h2>{initialData ? 'Edit Study Task' : 'Create Study Task'}</h2>
      
      {error && (
        <div className="error-banner" role="alert">
          <svg 
            stroke="currentColor" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            height="18" 
            width="18"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="task-form-grid">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="E.g., Math Chapter 1"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input
            id="date"
            type="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="E.g., Math"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="estimatedMinutes">Estimated Time (minutes)</label>
          <input
            id="estimatedMinutes"
            type="number"
            className="form-input"
            value={estimatedMinutes}
            onChange={(e) => setEstimatedMinutes(e.target.value ? parseInt(e.target.value, 10) : '')}
            min="1"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="memo">Memo</label>
          <textarea
            id="memo"
            className="form-textarea"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="Additional notes..."
          />
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <Button type="submit" variant="primary">
            {initialData ? 'Update Task' : 'Save Task'}
          </Button>
          {onCancel && (
            <Button type="button" onClick={onCancel} variant="cancel">
              Cancel
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
