import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-text-secondary/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="glass-card p-6 animate-pulse">
      <div className="w-12 h-12 bg-text-secondary/20 rounded-lg mb-4"></div>
      <div className="h-6 bg-text-secondary/20 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-text-secondary/20 rounded mb-2"></div>
      <div className="h-4 bg-text-secondary/20 rounded w-2/3"></div>
    </div>
  );
}
