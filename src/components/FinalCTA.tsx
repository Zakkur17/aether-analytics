import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection'; // Import

export default function FinalCTA() {
  return (
    <AnimatedSection className="w-full py-32 text-center">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-text-primary mb-6">
          Ready to see the future of your business?
        </h2>
        <p className="text-xl text-text-secondary mb-10">
          Let us show you how Aether can bring clarity to your data in a personalized 15-minute demo.
        </p>
        <Button variant="primary" className="text-lg px-8 py-4">
          Request My Free Demo
        </Button>
      </div>
    </AnimatedSection>
  );
}
