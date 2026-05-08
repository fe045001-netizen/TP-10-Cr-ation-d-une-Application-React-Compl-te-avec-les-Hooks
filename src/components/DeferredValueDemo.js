import React, { useState, useDeferredValue, useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function DeferredValueDemo() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  const { theme } = useTheme();

  const expensiveUI = useMemo(() => {
    console.log('Rendering expensive UI with:', deferredText);

    const startTime = performance.now();
    while (performance.now() - startTime < 100) {
      // Simulation d'un travail intensif
    }

    return (
      <div
        style={{
          padding: '10px',
          backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0',
          borderRadius: '4px',
          marginTop: '10px',
        }}
      >
        <h4>Rendu coûteux</h4>

        <p>Texte différé: {deferredText || '(vide)'}</p>

        <div>
          {deferredText.split('').map((char, index) => (
            <span
              key={index}
              style={{
                display: 'inline-block',
                padding: '4px',
                margin: '2px',
                backgroundColor: theme === 'dark' ? '#555' : '#e0e0e0',
                borderRadius: '4px',
              }}
            >
              {char || ' '}
            </span>
          ))}
        </div>
      </div>
    );
  }, [deferredText, theme]);

  const isStale = text !== deferredText;

  return (
    <div className="deferred-value-demo" style={{ margin: '20px 0' }}>
      <h3>Démonstration de useDeferredValue</h3>

      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tapez du texte..."
          style={{ width: '100%', maxWidth: '300px' }}
        />
      </div>

      <p>
        Texte saisi: {text || '(vide)'}
        {isStale && ' (mise à jour en cours...)'}
      </p>

      {expensiveUI}

      <p style={{ fontSize: '0.8em' }}>
        (Ouvrez la console pour voir quand le rendu coûteux est effectué)
      </p>
    </div>
  );
}

export default DeferredValueDemo;