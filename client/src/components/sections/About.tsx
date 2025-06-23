import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 bg-zai-primary text-white">
      <div className="container mx-auto max-w-4xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutTitle')}</h2>
          <div className="w-24 h-1 bg-zai-accent mx-auto mb-8"></div>
        </div>
        
        <div ref={contentRef} className={`glass rounded-2xl p-8 md:p-12 fade-in ${contentVisible ? 'active' : ''}`}>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
            {t('aboutDescription')}
          </p>
          
          <div className="mt-8 p-6 bg-zai-primary/50 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">{t('contactDetails')}</h3>
                <p className="text-gray-300">{t('location')}</p>
                <p className="text-zai-accent font-semibold">contact@zaitech.dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
