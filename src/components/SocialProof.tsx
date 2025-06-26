import React from 'react';
import AnimatedSection from './AnimatedSection';

// Realistic company logos/names with better visual treatment
const trustedBy = [
  { name: "TechFlow", sector: "Manufacturing" },
  { name: "Quantum Dynamics", sector: "FinTech" },
  { name: "StellarForge", sector: "Aerospace" },
  { name: "NexusCore", sector: "Healthcare" },
  { name: "Vertex Systems", sector: "Energy" },
  { name: "Momentum Labs", sector: "AI/ML" }
];

export default function SocialProof() {
  return (
    <AnimatedSection className="w-full max-w-7xl mx-auto py-16 px-8">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-text-secondary tracking-widest uppercase mb-4">
          Trusted by Industry Leaders Worldwide
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
        {trustedBy.map((company, index) => (
          <div 
            key={company.name} 
            className="group text-center transition-all duration-300 hover:transform hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="glass-card p-4 h-full flex flex-col justify-center hover:glass-card-enhanced transition-all duration-300 min-h-[80px]">
              <div className="text-sm md:text-base font-bold text-text-secondary group-hover:text-accent-blue transition-colors duration-300 mb-1 leading-tight">
                {company.name}
              </div>
              <div className="text-xs text-text-secondary/60 group-hover:text-text-secondary transition-colors duration-300">
                {company.sector}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-text-secondary">
          <span className="text-accent-blue font-semibold">500+</span> companies trust Aether with their most critical data
        </p>
      </div>
    </AnimatedSection>
  );
}
