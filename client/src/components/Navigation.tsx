import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import LanguageToggle from '@/components/LanguageToggle';
import logoWhite from '@assets/zaitech-logo-b-nobg_1750701875981.png';
import { Button } from '@/components/ui/button';
import { trackButtonClick } from '@/lib/analytics';

const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      // Track navigation clicks
      trackButtonClick(`nav_${sectionId}`, 'navigation');
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'home', section: 'home' },
    { key: 'about', section: 'about' },
    { key: 'services', section: 'services' },
    { key: 'work', section: 'work' },
    { key: 'skills', section: 'skills' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'nav-backdrop bg-zai-primary/95' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoWhite} alt={t('logoAlt')} className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">{t('companyName')}</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="text-white hover:text-zai-accent transition-colors cursor-pointer"
              >
                {t(item.key as any)}
              </button>
            ))}
            <LanguageToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3 rtl:space-x-reverse">
            <LanguageToggle />
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left py-2 text-white hover:text-zai-accent transition-colors"
              >
                {t(item.key as any)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
