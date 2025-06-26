"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ children, variant = 'primary', className = '', onClick, href }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 hover:transform hover:scale-105 active:scale-95 relative overflow-hidden group";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:from-blue-400 hover:to-purple-400 shadow-lg hover:shadow-xl hover:shadow-accent-blue/25 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
    secondary: "bg-transparent border-2 border-text-secondary text-text-secondary hover:bg-background-light hover:border-accent-blue hover:text-accent-blue glass-card-soft hover:glass-card"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, '_blank');
    } else {
      // Default demo action
      console.log('Demo requested');
      alert('Demo request feature coming soon! 🚀');
    }
  };

  return (
    <button className={combinedStyles} onClick={handleClick}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
