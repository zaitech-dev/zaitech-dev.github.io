import React from 'react';
import { Github, Linkedin, Mail, Instagram, Rss } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import logoWhite from '@assets/zaitech-logo-w-nobg_1750701872454.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 bg-zai-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4 md:mb-0">
            <img src={logoWhite} alt="Zaitech Development Logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold">Zaitech Development</span>
          </div>
          
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a 
              href="https://github.com/zaitech-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/company/zaitech-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://instagram.com/a.z.lens" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://zaitech.blog" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="Blog RSS"
            >
              <Rss size={24} />
            </a>
            <a 
              href="mailto:contact@zaitech.dev" 
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
