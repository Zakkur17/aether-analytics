import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-colors";
  
  const variantStyles = {
    primary: "bg-accent-blue text-white hover:bg-blue-400",
    secondary: "bg-transparent border border-text-secondary text-text-secondary hover:bg-background-light"
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
}
