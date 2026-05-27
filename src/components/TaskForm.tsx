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
    <div className="task-form-container">
      <h2>{initialData ? 'Edit Study Task' : 'Create Study Task'}</h2>
      {error && <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor="title" style={{ display: 'block' }}>Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="E.g., Math Chapter 1"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor="date" style={{ display: 'block' }}>Date *</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor="category" style={{ display: 'block' }}>Category</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="E.g., Math"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor="estimatedMinutes" style={{ display: 'block' }}>Estimated Time (minutes)</label>
          <input
            id="estimatedMinutes"
            type="number"
            value={estimatedMinutes}
            onChange={(e) => setEstimatedMinutes(e.target.value ? parseInt(e.target.value, 10) : '')}
            min="1"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor="memo" style={{ display: 'block' }}>Memo</label>
          <textarea
            id="memo"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="Additional notes..."
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
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
