"use client";

import React, { useState } from 'react';
import Button from './Button';
import ContactForm from './ContactForm';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openForm = () => {
    setIsFormOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background-dark/80 border-b border-white/10">
        <div className="w-full max-w-7xl mx-auto py-4 px-8">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center shadow-lg shadow-accent-blue/25">
                <div className="w-6 h-6 bg-white rounded-sm opacity-90"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-text-primary">AETHER</div>
                <div className="text-xs text-text-secondary tracking-wide">ANALYTICS</div>
              </div>
            </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#how-it-works" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How it Works
            </a>
            <a 
              href="#features" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Testimonials
            </a>
            <Button variant="primary" onClick={openForm}>
              Request a Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-primary hover:text-accent-blue transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-background-dark border border-background-light rounded-lg mt-2 mx-8 p-6 z-50">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-text-secondary hover:text-text-primary transition-colors py-2">Features</a>
              <a href="#testimonials" className="text-text-secondary hover:text-text-primary transition-colors py-2">Testimonials</a>
              <a href="#pricing" className="text-text-secondary hover:text-text-primary transition-colors py-2">Pricing</a>
              <div className="pt-4 border-t border-background-light">
                <Button variant="primary" className="w-full" onClick={openForm}>
                  Request a Demo
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>
      
      <ContactForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}
