// Button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Define additional props here if needed
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default Button;
