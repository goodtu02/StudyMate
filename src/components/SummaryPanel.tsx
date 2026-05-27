import React from 'react';
import type { StudyTask } from '../models/StudyTask';

interface SummaryPanelProps {
  tasks: StudyTask[];
}

export const SummaryPanel: React.FC<SummaryPanelProps> = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.isCompleted).length;
  const pending = total - completed;

  return (
    <div className="summary-panel" style={{
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#f1f8ff',
      border: '1px solid #cce5ff',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#004085' }}>Total</h3>
        <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: '#0056b3' }}>{total}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#155724' }}>Completed</h3>
        <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745' }}>{completed}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#856404' }}>Pending</h3>
        <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: '#ffc107' }}>{pending}</p>
      </div>
    </div>
  );
};
