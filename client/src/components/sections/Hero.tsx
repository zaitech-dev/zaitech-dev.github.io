import React from 'react';
import { ChevronDown, Github, Linkedin, Instagram, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zai-primary">
      {/* Background with atmospheric effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zai-primary/70 via-zai-primary/50 to-zai-primary/70" />
      
      <div ref={elementRef} className={`relative z-10 text-center px-4 max-w-4xl mx-auto fade-in ${isVisible ? 'active' : ''}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {t('heroTitle')}
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-300">
          {t('heroSubtitle')}
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-400">
          {t('heroDescription')}
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 rtl:space-x-reverse mb-8">
          <a href="https://github.com/zaitech-dev" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-zai-accent transition-colors" aria-label="GitHub">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/company/zaitech-dev" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-zai-accent transition-colors" aria-label="LinkedIn">
            <Linkedin size={32} />
          </a>
          <a href="https://instagram.com/a.z.lens" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-zai-accent transition-colors" aria-label="Instagram">
            <Instagram size={32} />
          </a>
          <a href="https://zaitech.blog" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-zai-accent transition-colors" aria-label="RSS">
            <Rss size={32} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('about')}
            className="bg-zai-accent hover:bg-zai-accent/80 text-white font-semibold px-8 py-3"
          >
            {t('learnMore')}
          </Button>
          <a
            href="mailto:contact@zaitech.dev"
            className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
          >
            {t('getInTouch')}
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
