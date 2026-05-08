import React, { forwardRef, useRef, useImperativeHandle } from 'react';

// forwardRef permet de transmettre une ref du parent à l'enfant
const CustomInput = forwardRef((props, ref) => {
  // Ref interne pour l'élément input
  const inputRef = useRef(null);
  
  // useImperativeHandle personnalise la valeur exposée au parent via ref
  useImperativeHandle(ref, () => ({
    // Méthodes exposées au parent
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    },
    setValue: (value) => {
      inputRef.current.value = value;
    }
  }));
  
  return (
    <input
      ref={inputRef}
      {...props}
      style={{
        padding: '8px',
        border: '2px solid #61dafb',
        borderRadius: '4px',
        ...props.style
      }}
    />
  );
});

export default CustomInput;