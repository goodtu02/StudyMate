import React, { useState } from 'react';
import { StudyTask } from '../models/StudyTask';
import { TaskForm } from './TaskForm';

interface TaskCardProps {
  task: StudyTask;
  onUpdateTask?: (id: string, changes: Partial<StudyTask>) => void;
  onDeleteTask?: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <div style={{ marginBottom: '1rem', border: '1px solid #007bff', padding: '1rem', borderRadius: '8px' }}>
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
        <div>
          <span className="status-badge" style={{
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            backgroundColor: task.isCompleted ? '#d4edda' : '#fff3cd',
            color: task.isCompleted ? '#155724' : '#856404',
            marginRight: '0.5rem'
          }}>
            {task.isCompleted ? 'Done' : 'Pending'}
          </span>
          <button 
            onClick={() => setIsEditing(true)}
            style={{ padding: '0.25rem 0.5rem', cursor: 'pointer', fontSize: '0.8rem', marginRight: '0.5rem' }}
          >
            Edit
          </button>
          <button 
            onClick={() => {
              if (onDeleteTask && window.confirm('Are you sure you want to delete this task?')) {
                onDeleteTask(task.id);
              }
            }}
            style={{ padding: '0.25rem 0.5rem', cursor: 'pointer', fontSize: '0.8rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Delete
          </button>
        </div>
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
