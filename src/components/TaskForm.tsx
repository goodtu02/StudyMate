import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StudyTask } from '../models/StudyTask';

interface TaskFormProps {
  onSave: (task: StudyTask) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [estimatedMinutes, setEstimatedMinutes] = useState<number | ''>('');
  const [memo, setMemo] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !date.trim()) {
      setError('Please enter both a study title and a study date.');
      return;
    }

    const now = new Date().toISOString();
    const newTask: StudyTask = {
      id: uuidv4(),
      title: title.trim(),
      date,
      isCompleted: false,
      category: category.trim() || undefined,
      estimatedMinutes: typeof estimatedMinutes === 'number' ? estimatedMinutes : undefined,
      memo: memo.trim() || undefined,
      createdAt: now,
      updatedAt: now,
    };

    onSave(newTask);

    // Reset form
    setTitle('');
    setDate('');
    setCategory('');
    setEstimatedMinutes('');
    setMemo('');
  };

  return (
    <div className="task-form-container">
      <h2>Create Study Task</h2>
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
        <button type="submit" className="save-button" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Save Task</button>
      </form>
    </div>
  );
};
