import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'dark' ? '#555' : '#61dafb',
        color: theme === 'dark' ? 'white' : 'black'
      }}
    >
      Thème: {theme === 'light' ? '☀️ Clair' : '🌙 Sombre'}
    </button>
  );
}

export default ThemeToggle;