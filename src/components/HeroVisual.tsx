"use client";

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Loader2 } from 'lucide-react';

export default function HeroVisual() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="h-96 md:h-full w-full rounded-xl overflow-hidden relative bg-background-light">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background-light">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 text-accent-blue animate-spin" />
            <p className="text-text-secondary text-sm">Loading 3D experience...</p>
          </div>
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-background-light">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-accent-blue/40 rounded-full"></div>
            </div>
            <p className="text-text-secondary">3D Preview Unavailable</p>
          </div>
        </div>
      )}

      <Spline 
        scene="https://prod.spline.design/qj4n-17Vp07oAC0s/scene.splinecode"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
