import React from 'react';

const Button = ({ icon: Icon, text, textColor = 'black', className = '' }) => {
  // Default styles for the button
  const defaultButtonStyles = 'flex items-center space-x-2 p-2 border-2 rounded-[50px] hover:bg-red-100';

  return (
    <button 
      className={`${defaultButtonStyles} ${className}`} // Combine default styles with custom className
    >
      {Icon && <Icon />}
      <span style={{ color: textColor }}>{text}</span>
    </button>
  );
};

export default Button;
