import Header from '@/components/Header';
import Button from '@/components/Button';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import Testimonial from '@/components/Testimonial';
import FinalCTA from '@/components/FinalCTA';
import AnimatedSection from '@/components/AnimatedSection'; // Import the wrapper

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Wrap the hero content in AnimatedSection */}
        <AnimatedSection className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-bold text-text-primary leading-tight">
              Clarity in Complexity.
            </h1>
            <p className="text-xl text-text-secondary">
              Aether transforms your scattered business data into a single, intelligent stream of actionable insights. Stop guessing, start knowing.
            </p>
            <div className="flex gap-4 mt-4">
              <Button variant="secondary">
                How it Works
              </Button>
            </div>
          </div>
          <div className="h-96 rounded-xl bg-background-light">
            {/* 3D visual placeholder */}
          </div>
        </AnimatedSection>
        
        <SocialProof />
        <Features />
        <Testimonial />
        <FinalCTA />
      </main>
    </>
  );
}