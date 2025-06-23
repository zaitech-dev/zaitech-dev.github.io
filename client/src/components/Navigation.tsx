import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import logoWhite from '@assets/zaitech-logo-w-nobg_1750701872454.png';
import { Button } from '@/components/ui/button';

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
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'home', section: 'home' },
    { key: 'about', section: 'about' },
    { key: 'work', section: 'work' },
    { key: 'skills', section: 'skills' },
    { key: 'testimonials', section: 'testimonials' },
    { key: 'contact', section: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'nav-backdrop bg-zai-primary/95' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoWhite} alt="Zaitech Development Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">Zaitech Development</span>
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
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Button
                variant={language === 'en' ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'bg-zai-accent hover:bg-zai-accent/80' : 'bg-gray-600 hover:bg-gray-500'}
              >
                EN
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setLanguage('ar')}
                className={language === 'ar' ? 'bg-zai-accent hover:bg-zai-accent/80' : 'bg-gray-600 hover:bg-gray-500'}
              >
                العربية
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            <div className="flex space-x-2 rtl:space-x-reverse pt-2">
              <Button
                variant={language === 'en' ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'bg-zai-accent hover:bg-zai-accent/80' : 'bg-gray-600 hover:bg-gray-500'}
              >
                EN
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setLanguage('ar')}
                className={language === 'ar' ? 'bg-zai-accent hover:bg-zai-accent/80' : 'bg-gray-600 hover:bg-gray-500'}
              >
                العربية
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
