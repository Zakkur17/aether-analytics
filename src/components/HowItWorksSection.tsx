"use client";

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Database, Brain, BarChart3, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: "Connect Your Data",
    description: "Seamlessly integrate with 200+ data sources. Our secure connectors work with your existing infrastructure without disruption.",
    details: ["CRM & ERP Systems", "Cloud Databases", "APIs & Webhooks", "File Uploads"]
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced AI algorithms automatically identify patterns, trends, and anomalies across your entire data ecosystem.",
    details: ["Pattern Recognition", "Predictive Modeling", "Anomaly Detection", "Trend Analysis"]
  },
  {
    icon: BarChart3,
    title: "Visual Insights",
    description: "Transform complex data into beautiful, interactive dashboards that everyone on your team can understand and act upon.",
    details: ["Interactive Dashboards", "Custom Reports", "Real-time Updates", "Mobile Optimization"]
  },
  {
    icon: Zap,
    title: "Actionable Results",
    description: "Receive automated alerts, recommendations, and insights that drive immediate business value and strategic decisions.",
    details: ["Smart Alerts", "Action Recommendations", "Performance Tracking", "ROI Measurement"]
  }
];

export default function HowItWorksSection() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-background-dark to-background-light">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-accent-blue" />
            <span className="text-sm text-text-secondary font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            How Aether Works
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From scattered data to strategic advantage in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-accent-blue/50 to-transparent z-0">
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-accent-blue/50" />
                  </div>
                )}
                
                {/* Step Card */}
                <div className="glass-card p-8 h-full hover:glass-card-enhanced transition-all duration-500 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-accent-blue group-hover:text-accent-purple transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA at bottom */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary mb-6">
            Ready to see Aether in action?
          </p>
          <div className="inline-flex items-center gap-4">
            <button className="glass-card px-8 py-4 hover:glass-card-enhanced transition-all duration-300 text-accent-blue font-semibold hover:scale-105">
              Schedule a Demo
            </button>
            <button className="text-text-secondary hover:text-accent-blue transition-colors duration-300 underline underline-offset-4">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
