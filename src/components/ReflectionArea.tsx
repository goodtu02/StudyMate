import React, { useState } from 'react';
import { StudyTask } from '../models/StudyTask';
import { generateSuggestion } from '../services/aiSuggestion';

interface ReflectionAreaProps {
  task: StudyTask;
  onSave: (taskId: string, text: string) => void;
}

export const ReflectionArea: React.FC<ReflectionAreaProps> = ({ task, onSave }) => {
  const [text, setText] = useState(task.reflection || '');
  const [isSaved, setIsSaved] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSave = () => {
    onSave(task.id, text);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const suggestion = await generateSuggestion(task);
      setText(suggestion);
      setIsSaved(false);
    } catch (error) {
      console.error('Failed to generate AI suggestion. Falling back...', error);
      setText(`Today I studied ${task.title}. (Fallback applied due to API error)`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="reflection-area" style={{ marginTop: '1rem', borderTop: '1px dashed #ccc', paddingTop: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Study Reflection</h4>
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          title="Generates a suggested reflection based on your task details"
          style={{
            padding: '0.2rem 0.6rem',
            fontSize: '0.8rem',
            cursor: isGenerating ? 'not-allowed' : 'pointer',
            backgroundColor: '#6f42c1',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            opacity: isGenerating ? 0.6 : 1
          }}
        >
          {isGenerating ? 'Generating...' : '✨ AI Suggestion'}
        </button>
      </div>
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
