import React, { useRef } from 'react';

function FocusInput() {
  // Création d'une référence pour accéder à l'élément input
  const inputRef = useRef(null);
  
  // Fonction pour mettre le focus sur l'input
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div className="focus-input" style={{ margin: '20px 0' }}>
      <h3>Focus sur l'input</h3>
      <div>
        <input 
          ref={inputRef} 
          type="text" 
          placeholder="Cliquez sur le bouton pour focus"
        />
        <button onClick={focusInput}>Focus</button>
      </div>
    </div>
  );
}

export default FocusInput;