import React from 'react';
import { ChevronDown, Github, Linkedin, Instagram, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { trackButtonClick, trackExternalLink, trackContactInteraction } from '@/lib/analytics';

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
          backgroundImage: `url('/assets/header-background.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zai-primary/70 via-zai-primary/50 to-zai-primary/70" />
      
      <div ref={elementRef} className={`relative z-10 text-center px-4 max-w-4xl mx-auto fade-in ${isVisible ? 'active' : ''}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-title">
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
          <a 
            href="https://github.com/zaitech-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-white hover:text-zai-accent transition-colors" 
            aria-label="GitHub"
            onClick={() => trackExternalLink('https://github.com/zaitech-dev', 'GitHub')}
          >
            <Github size={32} />
          </a>
          <a 
            href="https://linkedin.com/company/zaitech-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-white hover:text-zai-accent transition-colors" 
            aria-label="LinkedIn"
            onClick={() => trackExternalLink('https://linkedin.com/company/zaitech-dev', 'LinkedIn')}
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="https://instagram.com/a.z.lens" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-white hover:text-zai-accent transition-colors" 
            aria-label="Instagram"
            onClick={() => trackExternalLink('https://instagram.com/a.z.lens', 'Instagram')}
          >
            <Instagram size={32} />
          </a>
          <a 
            href="https://zaitech.blog" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-white hover:text-zai-accent transition-colors" 
            aria-label="RSS"
            onClick={() => trackExternalLink('https://zaitech.blog', 'Blog')}
          >
            <Rss size={32} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => {
              trackButtonClick('learn_more', 'hero');
              scrollToSection('about');
            }}
            className="bg-zai-accent hover:bg-zai-accent/80 text-white font-semibold"
          >
            {t('learnMore')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/30 text-white hover:bg-white/10 font-semibold bg-transparent hover:border-white/30"
          >
            <a
              href="mailto:contact@zaitech.dev"
              onClick={() => trackContactInteraction('email')}
            >
              {t('getInTouch')}
            </a>
          </Button>
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
