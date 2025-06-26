import React from 'react';
import AnimatedSection from './AnimatedSection'; // Import

const featuresData = [
  {
    title: "Automate Your Reporting",
    description: "Free your team from manual data pulls. Aether connects to all your sources and delivers the reports you need, right on schedule."
  },
  {
    title: "Uncover Hidden Trends",
    description: "Our predictive AI doesn't just show you what happened. It shows you what's next. Identify opportunities before your competitors do."
  },
  {
    title: "Collaborate with Confidence",
    description: "Share interactive dashboards, not static spreadsheets. Ensure your entire team is making decisions based on the same, single source of truth."
  }
];

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="glass-card p-6 flex flex-col gap-4">
    <div className="w-12 h-12 bg-background-light rounded-lg"></div> {/* Icon placeholder */}
    <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
    <p className="text-text-secondary">{description}</p>
  </div>
);

export default function Features() {
  return (
    <AnimatedSection className="w-full max-w-7xl mx-auto py-24 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </AnimatedSection>
  );
}
