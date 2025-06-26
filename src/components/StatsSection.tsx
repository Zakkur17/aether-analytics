"use client";

import React, { useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function StatItem({ end, label, suffix = '', prefix = '' }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const incrementTime = 50; // Update every 50ms
    const steps = duration / incrementTime;
    const increment = end / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent mb-3">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-text-primary font-medium text-lg">{label}</div>
    </>
  );
}

export default function StatsSection() {
  const stats = [
    { end: 500, label: 'Enterprise Clients', suffix: '+' },
    { end: 99, label: 'Data Accuracy', suffix: '.9%' },
    { end: 73, label: 'Time Savings', suffix: '%' },
    { end: 24, label: 'Faster Insights', suffix: 'x' }
  ];

  return (
    <AnimatedSection className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-purple/5"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent-purple/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Proven Results That Speak
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <p className="text-xl text-text-primary font-medium leading-relaxed px-6 py-4 glass-card-soft relative z-10">
              Join hundreds of companies that have transformed their data into their competitive advantage
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center hover:glass-card-enhanced transition-all duration-300">
              <StatItem
                end={stat.end}
                label={stat.label}
                suffix={stat.suffix}
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
