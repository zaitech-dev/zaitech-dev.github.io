import React, { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';

// Lazy load non-critical sections below the fold
const About = lazy(() => import('@/components/sections/About'));
const Services = lazy(() => import('@/components/sections/Services'));
const Work = lazy(() => import('@/components/sections/Work'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Footer = lazy(() => import('@/components/sections/Footer'));
const AnalyticsTest = lazy(() => import('@/components/AnalyticsTest'));

// Loading component for lazy-loaded sections
const SectionSkeleton = () => (
  <div className="min-h-[400px] bg-zai-secondary animate-pulse flex items-center justify-center">
    <div className="text-gray-400">Loading...</div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zai-primary text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Work />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
      {/* Temporary analytics testing component - Remove after testing */}
      {process.env.NODE_ENV === 'development' && (
        <Suspense fallback={null}>
          <AnalyticsTest />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
