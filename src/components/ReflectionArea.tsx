import React, { useState } from 'react';

interface ReflectionAreaProps {
  taskId: string;
  initialReflection?: string;
  onSave: (taskId: string, text: string) => void;
}

export const ReflectionArea: React.FC<ReflectionAreaProps> = ({ taskId, initialReflection = '', onSave }) => {
  const [text, setText] = useState(initialReflection);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    onSave(taskId, text);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="reflection-area" style={{ marginTop: '1rem', borderTop: '1px dashed #ccc', paddingTop: '1rem' }}>
      <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Study Reflection</h4>
      {(!text && !isSaved) && <p style={{ fontSize: '0.85rem', color: '#888', margin: '0 0 0.5rem 0', fontStyle: 'italic' }}>No reflection written yet.</p>}
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setIsSaved(false);
        }}
        placeholder="What did you learn? What was difficult? What will you do better next time?"
        style={{ 
          width: '100%', 
          minHeight: '80px', 
          padding: '0.5rem', 
          borderRadius: '4px', 
          border: '1px solid #ccc', 
          marginBottom: '0.5rem', 
          boxSizing: 'border-box',
          fontFamily: 'inherit',
          resize: 'vertical'
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button 
          onClick={handleSave}
          style={{ 
            padding: '0.4rem 0.8rem', 
            cursor: 'pointer', 
            fontSize: '0.85rem', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Save Reflection
        </button>
        {isSaved && <span style={{ color: '#28a745', fontSize: '0.85rem', fontWeight: 'bold' }}>✓ Reflection saved</span>}
      </div>
    </div>
  );
};
