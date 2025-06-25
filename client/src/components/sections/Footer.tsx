import React from 'react';
import { Github, Linkedin, Mail, Instagram, Rss } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { trackExternalLink, trackContactInteraction } from '@/lib/analytics';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 bg-zai-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4 md:mb-0">
            <picture>
              <source srcSet="/assets/logo-white.avif" type="image/avif" />
              <source srcSet="/assets/logo-white.webp" type="image/webp" />
              <img src="/assets/logo-white.webp" alt="Zaitech Development Logo" className="h-8 w-auto" />
            </picture>
            <span className="text-lg font-semibold">Zaitech Development</span>
          </div>
          
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a 
              href="https://github.com/zaitech-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="GitHub"
              onClick={() => trackExternalLink('https://github.com/zaitech-dev', 'GitHub Footer')}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/company/zaitech-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="LinkedIn"
              onClick={() => trackExternalLink('https://linkedin.com/company/zaitech-dev', 'LinkedIn Footer')}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://instagram.com/a.z.lens" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="Instagram"
              onClick={() => trackExternalLink('https://instagram.com/a.z.lens', 'Instagram Footer')}
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://zaitech.blog" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="Blog RSS"
              onClick={() => trackExternalLink('https://zaitech.blog', 'Blog Footer')}
            >
              <Rss size={24} />
            </a>
            <a 
              href="mailto:contact@zaitech.dev" 
              className="text-gray-400 hover:text-zai-accent transition-colors" 
              aria-label="Email"
              onClick={() => trackContactInteraction('email', 'footer')}
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
