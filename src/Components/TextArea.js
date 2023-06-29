import React from 'react';

const TextArea = (props) => {
  const textareaStyles = {
    border: '4px solid #353C4A',
    background: '#181E29',
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
    outline: 'none',
  };

  return (
    <textarea
      className="w-full h-12 p-2 rounded-full"
      placeholder={props.placeholder}
      style={textareaStyles}
    ></textarea>
  );
};

export default TextArea;
