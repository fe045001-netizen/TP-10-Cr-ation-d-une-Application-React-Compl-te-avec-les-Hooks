import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import ThemeToggle from './components/ThemeToggle';
import OnlineStatus from './components/OnlineStatus';

import HomePage from './pages/HomePage';
import HooksPage from './pages/HooksPage';
import AboutPage from './pages/AboutPage';

// Composant utilisant le thème
function ThemedApp() {
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
    color: theme === 'dark' ? '#f5f5f5' : '#333',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#222' : '#282c34',
    padding: '20px',
  };

  return (
    <div className="App" style={appStyle}>
      <header className="App-header" style={headerStyle}>
        <h1>Todo App Avancée</h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          <ThemeToggle />
          <OnlineStatus />
        </div>
      </header>

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:section" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

// Composant racine
function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;