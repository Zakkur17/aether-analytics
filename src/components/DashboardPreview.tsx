"use client";

import React, { useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { TrendingUp, BarChart3, PieChart, Activity, Zap, Target } from 'lucide-react';

function AnimatedPieChart() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(85);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="h-32 flex items-center justify-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-text-secondary/20"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#pieGradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-out"
          />
          <defs>
            <linearGradient id="pieGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-accent-blue)" />
              <stop offset="100%" stopColor="var(--color-accent-purple)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-text-primary">
            {Math.floor(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}

function AnimatedChart() {
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const chartData = [40, 65, 45, 80, 60, 90, 75];

  return (
    <div className="h-32 glass-card-soft rounded-lg flex items-end justify-center p-4 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-7 h-full">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-r border-text-secondary/20 last:border-r-0"></div>
          ))}
        </div>
        <div className="absolute inset-0">
          <div className="grid grid-rows-4 h-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-b border-text-secondary/20 last:border-b-0"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated bars */}
      <div className="flex items-end gap-2 h-full relative z-10">
        {chartData.map((height, i) => (
          <div
            key={i}
            className="bg-gradient-to-t from-accent-blue to-accent-purple rounded-sm transition-all duration-1000 ease-out shadow-lg"
            style={{ 
              height: animationStarted ? `${height}%` : '0%', 
              width: '16px',
              transitionDelay: `${i * 150}ms`
            }}
          />
        ))}
      </div>
      
      {/* Trend line overlay */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
        <polyline
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          points={chartData.map((height, i) => 
            `${(i * 100) / (chartData.length - 1)},${100 - height}`
          ).join(' ')}
          className={`transition-all duration-2000 ${animationStarted ? 'opacity-60' : 'opacity-0'}`}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-blue)" />
            <stop offset="100%" stopColor="var(--color-accent-purple)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function DashboardPreview() {
  const metrics = [
    { label: 'Revenue Growth', value: '+23.5%', trend: 'up', icon: TrendingUp },
    { label: 'Conversion Rate', value: '4.8%', trend: 'up', icon: Target },
    { label: 'Active Users', value: '12.4K', trend: 'up', icon: Activity },
    { label: 'Performance Score', value: '94/100', trend: 'up', icon: Zap }
  ];

  return (
    <AnimatedSection className="py-20 bg-gradient-to-br from-background-light to-background-dark">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Your Data, Beautifully Simplified
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how Aether transforms complex data streams into intuitive, actionable dashboards
          </p>
        </div>

        {/* Mock Dashboard Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Dashboard Frame */}
          <div className="glass-card p-8 transition-all duration-500 hover:glass-card-enhanced">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-text-primary">Executive Dashboard</h3>
                <p className="text-text-secondary">Real-time business intelligence</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-text-secondary">Live Data</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-4 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="text-accent-blue" size={20} />
                      <TrendingUp className="text-green-400" size={16} />
                    </div>
                    <div className="text-2xl font-bold text-text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="text-accent-blue" size={20} />
                  <h4 className="font-semibold text-text-primary">Revenue Trends</h4>
                </div>
                <AnimatedChart />
              </div>

              {/* Distribution Chart */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <PieChart className="text-accent-purple" size={20} />
                  <h4 className="font-semibold text-text-primary">Channel Distribution</h4>
                </div>
                <AnimatedPieChart />
              </div>
            </div>
          </div>

          {/* Floating Action Cards */}
          <div className="absolute -right-4 -top-4 glass-card p-4 animate-float">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-text-primary font-medium">AI Insights Active</span>
            </div>
          </div>

          <div className="absolute -left-4 -bottom-4 glass-card p-4 animate-float-delayed">
            <div className="flex items-center gap-2">
              <Zap className="text-accent-blue" size={16} />
              <span className="text-sm text-text-primary font-medium">Auto-Refresh: 30s</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
