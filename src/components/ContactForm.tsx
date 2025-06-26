"use client";

import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-background-dark border border-background-light rounded-xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">Thank You!</h3>
            <p className="text-text-secondary">We&apos;ll be in touch within 24 hours to schedule your personalized demo.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-text-primary mb-2">Request Your Demo</h3>
            <p className="text-text-secondary mb-6">See how Aether can transform your data workflow in just 15 minutes.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-text-secondary text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-light border border-background-light rounded-lg text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-text-secondary text-sm mb-2">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-light border border-background-light rounded-lg text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
                  placeholder="your@company.com"
                />
              </div>
              
              <div>
                <label className="block text-text-secondary text-sm mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-light border border-background-light rounded-lg text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label className="block text-text-secondary text-sm mb-2">What would you like to see?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-background-light border border-background-light rounded-lg text-text-primary focus:border-accent-blue focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your data challenges..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Schedule My Demo
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
