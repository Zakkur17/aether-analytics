"use client";

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import { Check, Zap, Crown, Star } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 290,
      icon: Zap,
      features: [
        "Up to 5 data sources",
        "Basic analytics dashboard",
        "Email reports",
        "5GB data storage",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 99,
      annualPrice: 990,
      icon: Crown,
      features: [
        "Unlimited data sources",
        "Advanced analytics & AI insights",
        "Real-time dashboards",
        "50GB data storage",
        "Priority support",
        "Custom integrations",
        "Advanced security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 299,
      annualPrice: 2990,
      icon: Star,
      features: [
        "Everything in Professional",
        "Unlimited data storage",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-background-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 via-transparent to-accent-purple/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent"> Analytics Journey</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Start free, scale as you grow. No hidden fees, no vendor lock-in.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 glass-card-soft p-2 w-fit mx-auto rounded-full">
            <span className={`px-4 py-2 rounded-full transition-all duration-300 ${!isAnnual ? 'text-text-primary font-semibold' : 'text-text-secondary'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`w-12 h-6 rounded-full transition-all duration-300 relative ${isAnnual ? 'bg-accent-blue' : 'bg-text-secondary/30'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 ${isAnnual ? 'left-6.5' : 'left-0.5'}`}></div>
            </button>
            <span className={`px-4 py-2 rounded-full transition-all duration-300 ${isAnnual ? 'text-text-primary font-semibold' : 'text-text-secondary'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-accent-purple/20 text-accent-purple text-xs rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const savings = isAnnual ? Math.round((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12) * 100) : 0;
            
            return (
              <div 
                key={plan.name}
                className={`relative group transition-all duration-500 hover:scale-105 ${
                  plan.popular 
                    ? 'glass-card-premium border-2 border-accent-blue/30 shadow-2xl shadow-accent-blue/20 pt-8' 
                    : 'glass-card hover:glass-card-enhanced'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-accent-blue to-accent-purple text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8 relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-accent-blue to-accent-purple shadow-lg' 
                        : 'bg-gradient-to-br from-accent-blue/20 to-accent-purple/20'
                    }`}>
                      <Icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-accent-blue'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                    <p className="text-text-secondary text-sm">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-text-primary">${price}</span>
                      <span className="text-text-secondary ml-2">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                    {isAnnual && savings > 0 && (
                      <div className="text-sm text-accent-purple font-medium mt-2">
                        Save {savings}% annually
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-text-secondary">
                        <Check className="w-5 h-5 text-accent-blue flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.popular ? "primary" : "secondary"} 
                    className="w-full"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <Button variant="secondary">
            Schedule a Custom Demo
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PricingSection;
