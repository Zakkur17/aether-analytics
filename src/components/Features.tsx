import React from 'react';
import AnimatedSection from './AnimatedSection';
import { BarChart3, TrendingUp, Users, LucideIcon } from 'lucide-react'; // Import icons

const featuresData = [
  {
    title: "Automate Your Reporting",
    description: "Free your team from manual data pulls. Aether connects to all your sources and delivers the reports you need, right on schedule.",
    icon: BarChart3
  },
  {
    title: "Uncover Hidden Trends",
    description: "Our predictive AI doesn't just show you what happened. It shows you what's next. Identify opportunities before your competitors do.",
    icon: TrendingUp
  },
  {
    title: "Collaborate with Confidence",
    description: "Share interactive dashboards, not static spreadsheets. Ensure your entire team is making decisions based on the same, single source of truth.",
    icon: Users
  }
];

const FeatureCard = ({ title, description, icon: Icon }: { title: string, description: string, icon: LucideIcon }) => (
  <div className="glass-card p-8 flex flex-col gap-6 group hover:scale-105 hover:glass-card-enhanced transition-all duration-500 relative overflow-hidden cursor-pointer">
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Sparkle effects on hover */}
    <div className="absolute top-4 right-4 w-2 h-2 bg-accent-blue/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-200"></div>
    <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent-purple/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-500"></div>
    
    <div className="relative z-10">
      <div className="w-16 h-16 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-accent-blue/25">
        <Icon className="w-8 h-8 text-accent-blue group-hover:text-accent-purple transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-bold text-text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple group-hover:bg-clip-text transition-all duration-300">{title}</h3>
      <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/80 transition-colors duration-300">{description}</p>
    </div>
  </div>
);

export default function Features() {
  return (
    <AnimatedSection className="w-full max-w-7xl mx-auto py-24 px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text-primary mb-4">
          Transform Your Data Workflow
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Stop drowning in spreadsheets. Start making decisions with confidence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </AnimatedSection>
  );
}
