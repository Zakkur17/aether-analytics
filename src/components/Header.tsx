import React from 'react';
import Button from './Button';

export default function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto py-6 px-8 flex justify-between items-center">
      <div className="text-xl font-bold text-text-primary">
        AETHER
      </div>
      <nav>
        <Button variant="primary">
          Request a Demo
        </Button>
      </nav>
    </header>
  );
}
