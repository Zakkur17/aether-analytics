import React from 'react';

// We'll use fictional, but realistic-sounding company names
const trustedBy = ["QuantumLeap", "StellarForge", "NexusCore", "Vertex.AI", "Momentum"];

export default function SocialProof() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-8 text-center">
      <p className="text-sm font-semibold text-text-secondary tracking-widest uppercase mb-8">
        Trusted by the world's most innovative teams
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
        {trustedBy.map((company) => (
          <span key={company} className="text-2xl font-medium text-text-secondary opacity-60">
            {company}
          </span>
        ))}
      </div>
    </section>
  );
}
