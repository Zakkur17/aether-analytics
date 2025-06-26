"use client";

import Header from '@/components/Header';
import Button from '@/components/Button';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import Testimonial from '@/components/Testimonial';
import FinalCTA from '@/components/FinalCTA';
import AnimatedSection from '@/components/AnimatedSection';
import HeroVisual from '@/components/HeroVisual';
import StatsSection from '@/components/StatsSection';
import DashboardPreview from '@/components/DashboardPreview';
import FAQSection from '@/components/FAQSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BackToTop from '@/components/BackToTop';
import ScrollProgress from '@/components/ScrollProgress';
import PricingSection from '@/components/PricingSection';

export default function Home() {
  const scrollToDemo = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-blue/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-purple/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent-blue/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent-purple/30 rounded-full animate-pulse delay-3000"></div>
          <div className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-accent-blue/25 rounded-full animate-pulse delay-4000"></div>
        </div>
        
        {/* Enhanced Hero Section */}
        <AnimatedSection className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 mb-20 relative z-10">
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 w-fit">
              <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary font-medium">Enterprise Analytics Platform</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight">
              Clarity in{' '}
              <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                Complexity
              </span>
              .
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Aether transforms your scattered business data into a single, intelligent stream of actionable insights. 
              <span className="text-text-primary font-semibold"> Stop guessing, start knowing.</span>
            </p>
            
            {/* Stats Preview */}
            <div className="flex items-center gap-8 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-accent-blue font-bold text-xs">500+</span>
                </div>
                <span>Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-full flex items-center justify-center">
                  <span className="text-accent-purple font-bold text-xs">99.9%</span>
                </div>
                <span>Data Accuracy</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button variant="primary">
                Get Started Free
              </Button>
              <Button variant="secondary" onClick={scrollToDemo}>
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Enhanced Hero Visual */}
          <div className="relative">
            <HeroVisual />
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass-card p-3 animate-float">
              <div className="text-xs text-text-secondary">Real-time Analytics</div>
              <div className="text-sm font-bold text-accent-blue">Live</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card p-3 animate-float-delayed">
              <div className="text-xs text-text-secondary">Processing Speed</div>
              <div className="text-sm font-bold text-accent-purple">10x Faster</div>
            </div>
          </div>
        </AnimatedSection>
        
        <SocialProof />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <StatsSection />
        <div id="features">
          <Features />
        </div>
        <DashboardPreview />
        <div id="testimonials">
          <Testimonial />
        </div>
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <BackToTop />
    </>
  );
}