import React from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleTheme }) => {
  return (
    <header className="app-header">
      <div className="header-title-section">
        <h1>
          <span>StudyMate</span>
          <svg 
            stroke="currentColor" 
            fill="currentColor" 
            strokeWidth="0" 
            viewBox="0 0 24 24" 
            height="32" 
            width="32" 
            style={{ color: 'var(--primary)' }}
            aria-hidden="true"
          >
            <path d="M12 2L14.7 9.3L22 12L14.7 14.7L12 22L9.3 14.7L2 12L9.3 9.3L12 2Z"></path>
          </svg>
        </h1>
        <p>An AI-Assisted Personal Study Schedule and Reflection Web Application</p>
      </div>
      <div className="header-actions">
        <button 
          type="button"
          onClick={onToggleTheme} 
          className="theme-toggle-btn"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              height="20" 
              width="20"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              height="20" 
              width="20"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};
