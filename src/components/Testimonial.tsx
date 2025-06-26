"use client";

import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: TestimonialData[] = [
  {
    quote: "Aether didn't just give us charts; it gave us a strategic advantage. We're making smarter, faster decisions across the board. It paid for itself in the first quarter.",
    author: "Elena Vasić",
    role: "Chief Technology Officer",
    company: "Innovate Corp",
    avatar: "EV",
    rating: 5
  },
  {
    quote: "The AI-powered insights are incredible. Aether predicted our inventory needs with 95% accuracy, saving us millions in overstock costs. It's like having a crystal ball for business.",
    author: "Marcus Rodriguez",
    role: "Operations Director",
    company: "Global Logistics Corp",
    avatar: "MR",
    rating: 5
  },
  {
    quote: "Implementation was seamless, and the ROI was immediate. Our team loves the intuitive dashboards, and executives finally have real-time visibility into all business metrics.",
    author: "Emily Watson",
    role: "Chief Data Officer",
    company: "Innovation Labs",
    avatar: "EW",
    rating: 5
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <AnimatedSection className="py-20 bg-gradient-to-br from-background-dark via-background-light to-background-dark">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-text-secondary">
            See how companies are transforming their business with Aether
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="glass-card-enhanced p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 text-accent-blue/20 w-16 h-16" />
            
            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent-blue fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl text-text-primary font-medium leading-relaxed text-center mb-8 relative z-10">
              &quot;{currentTestimonial.quote}&quot;
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                {currentTestimonial.avatar}
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-text-primary">
                  {currentTestimonial.author}
                </div>
                <div className="text-text-secondary">
                  {currentTestimonial.role}, {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="glass-card p-3 hover:glass-card-enhanced transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-accent-blue" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-accent-blue scale-125' 
                      : 'bg-text-secondary/30 hover:bg-text-secondary/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="glass-card p-3 hover:glass-card-enhanced transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-accent-blue" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
