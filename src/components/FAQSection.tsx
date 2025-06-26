"use client";

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:glass-card-enhanced">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-lg md:text-xl font-semibold text-text-primary pr-4">
          {question}
        </h3>
        <div className="flex-shrink-0 text-accent-blue">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <p className="text-text-secondary leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Aether integrate with existing systems?",
      answer: "Aether seamlessly connects with 200+ data sources including CRMs, ERPs, databases, and cloud services through our secure API framework. Most integrations are completed in under 24 hours with zero downtime."
    },
    {
      question: "What makes Aether different from other analytics platforms?",
      answer: "Unlike traditional BI tools, Aether uses AI to automatically identify patterns, predict trends, and suggest actions. We focus on actionable insights rather than just data visualization, turning complexity into clarity."
    },
    {
      question: "How secure is my data with Aether?",
      answer: "Security is our top priority. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data never leaves your secure environment - we bring the analytics to you."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Every client gets dedicated success management, 24/7 technical support, and access to our data science team. We also provide comprehensive training and ongoing optimization recommendations."
    },
    {
      question: "How quickly can I see results?",
      answer: "Most clients see immediate value within the first week. Our rapid deployment process and pre-built templates mean you can start gaining insights from day one, with full customization available as you grow."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-background-dark">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary">
            Everything you need to know about transforming your data strategy
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
