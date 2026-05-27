import React, { useState } from 'react';
import type { StudyTask } from '../models/StudyTask';
import { generateSuggestion } from '../services/aiSuggestion';
import { Button } from './ui/Button';

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
    <div className="reflection-section">
      <div className="reflection-header-row">
        <h4>Study Reflection</h4>
        <Button
          variant="ai"
          onClick={handleGenerate}
          disabled={isGenerating}
          title="Generates a suggested reflection based on your task details"
        >
          {isGenerating ? (
            <span className="ai-loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
          ) : (
            <>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                height="14" 
                width="14"
                aria-hidden="true"
              >
                <path d="M12 2L14.7 9.3L22 12L14.7 14.7L12 22L9.3 14.7L2 12L9.3 9.3L12 2Z"></path>
              </svg>
              <span>AI Suggestion</span>
            </>
          )}
        </Button>
      </div>
      
      {(!text && !isSaved) && (
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.5rem 0', fontStyle: 'italic' }}>
          No reflection written yet.
        </p>
      )}
      
      <textarea
        value={text}
        className="reflection-notebook-textarea"
        onChange={(e) => {
          setText(e.target.value);
          setIsSaved(false);
        }}
        placeholder="What did you learn? What was difficult? What will you do better next time?"
      />
      
      <div className="reflection-footer">
        <Button variant="success" onClick={handleSave}>
          Save Reflection
        </Button>
        {isSaved && (
          <span className="reflection-save-status" style={{ color: 'var(--success)' }}>
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="3" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              height="16" 
              width="16"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Reflection saved</span>
          </span>
        )}
      </div>
    </div>
  );
};
