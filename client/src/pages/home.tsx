import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Skills from '@/components/sections/Skills';
import Footer from '@/components/sections/Footer';
import AnalyticsTest from '@/components/AnalyticsTest';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zai-primary text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Footer />
      {/* Temporary analytics testing component - Remove after testing */}
      {process.env.NODE_ENV === 'development' && <AnalyticsTest />}
    </div>
  );
};

export default Home;
