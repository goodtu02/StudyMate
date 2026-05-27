import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'secondary' | 'cancel' | 'outline' | 'ai' | 'success';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  style,
  ...props 
}) => {
  let baseStyle: React.CSSProperties = {
    padding: '0.4rem 0.8rem',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    fontWeight: 'normal',
    fontSize: '0.85rem'
  };

  switch (variant) {
    case 'primary':
      baseStyle = { ...baseStyle, backgroundColor: '#007bff', color: 'white', fontWeight: 'bold' };
      break;
    case 'danger':
      baseStyle = { ...baseStyle, backgroundColor: '#dc3545', color: 'white' };
      break;
    case 'cancel':
      baseStyle = { ...baseStyle, backgroundColor: '#ccc', color: '#333', border: '1px solid #aaa' };
      break;
    case 'ai':
      baseStyle = { ...baseStyle, backgroundColor: '#6f42c1', color: 'white' };
      break;
    case 'success':
      baseStyle = { ...baseStyle, backgroundColor: '#28a745', color: 'white', fontWeight: 'bold' };
      break;
  }

  return (
    <button className={`custom-button ${variant}`} style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </button>
  );
};
