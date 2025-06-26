import React from 'react';
import AnimatedSection from './AnimatedSection'; // Import

export default function Testimonial() {
  return (
    <AnimatedSection className="w-full bg-background-light py-24">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <p className="text-3xl md:text-4xl leading-snug text-text-primary font-medium">
          "Aether didn't just give us charts; it gave us a strategic advantage. We're making smarter, faster decisions across the board. It paid for itself in the first quarter."
        </p>
        <div className="mt-8">
          <p className="text-xl font-semibold text-text-primary">Elena Vasić</p>
          <p className="text-text-secondary">Chief Technology Officer, Innovate Corp</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
