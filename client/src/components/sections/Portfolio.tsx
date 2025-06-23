import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'Machine Assembler',
      titleAr: 'مجمع الآلة',
      description: 'Hypothetical machine assembler for low-level programming and system optimization.',
      descriptionAr: 'مجمع آلة افتراضي للبرمجة منخفضة المستوى وتحسين النظام.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      link: '#'
    },
    {
      title: 'Generic Camera Calibrator',
      titleAr: 'معاير الكاميرا العام',
      description: 'Advanced camera calibration tool for computer vision applications.',
      descriptionAr: 'أداة معايرة كاميرا متقدمة لتطبيقات الرؤية الحاسوبية.',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      link: '#'
    },
    {
      title: 'ML Production Service',
      titleAr: 'خدمة الإنتاج للتعلم الآلي',
      description: 'Production-grade machine learning backend for real-time position detection.',
      descriptionAr: 'خلفية تعلم آلي بمستوى الإنتاج للكشف عن المواقع في الوقت الفعلي.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      link: '#'
    },
    {
      title: 'Soraiva-bot',
      titleAr: 'روبوت سورايفا',
      description: 'Advanced robotics project for competitive robotics events.',
      descriptionAr: 'مشروع روبوتات متقدم لأحداث الروبوتات التنافسية.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      link: '#'
    },
    {
      title: 'Bombeirinho',
      titleAr: 'بومبيرينيو',
      description: '3rd place winner at RoboGames - Fire-fighting category robot.',
      descriptionAr: 'الفائز بالمركز الثالث في RoboGames - فئة روبوت مكافحة الحرائق.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      link: '#'
    },
    {
      title: 'Tobinho',
      titleAr: 'توبينيو',
      description: '2nd place winner at RoboGames - Tube Push category robot.',
      descriptionAr: 'الفائز بالمركز الثاني في RoboGames - فئة روبوت دفع الأنابيب.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-zai-secondary/30 text-white">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('portfolioTitle')}</h2>
          <div className="w-24 h-1 bg-zai-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { elementRef, isVisible } = useScrollAnimation();
            return (
              <div key={index} ref={elementRef} className={`glass rounded-xl overflow-hidden hover:scale-105 transition-transform fade-in ${isVisible ? 'active' : ''}`}>
                <img 
                  src={project.image} 
                  alt={t('language') === 'ar' ? project.titleAr : project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {t('language') === 'ar' ? project.titleAr : project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {t('language') === 'ar' ? project.descriptionAr : project.description}
                  </p>
                  <a 
                    href={project.link} 
                    className="text-zai-accent hover:text-blue-400 font-semibold flex items-center gap-2"
                  >
                    {t('viewProject')}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
