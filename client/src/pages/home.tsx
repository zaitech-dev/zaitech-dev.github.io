import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Skills from '@/components/sections/Skills';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zai-primary text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Work />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
