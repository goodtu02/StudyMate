import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'secondary' | 'cancel' | 'outline' | 'ai' | 'success';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`custom-button ${variant} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
