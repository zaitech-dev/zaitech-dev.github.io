import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimationWithTracking } from '@/hooks/useScrollAnimationWithTracking';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimationWithTracking('portfolio');

  const projects = (t('portfolioProjects') as unknown) as Array<{
    client: string;
    title: string;
    location: string;
    period: string;
    status: string;
    description: string;
    technologies: string[];
  }>;

  return (
    <section id="portfolio" className="py-20 px-4 bg-zai-secondary/30 text-white">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('portfolioTitle')}</h2>
          <div className="w-24 h-1 bg-zai-accent mx-auto mb-8"></div>
        </div>
        
        <div className="relative">
          <div className="timeline-line"></div>
          
          <div className="space-y-12">
            {projects.map((project, index) => {
              const { elementRef, isVisible } = useScrollAnimation();
              return (
                <div key={index} ref={elementRef} className={`timeline-item relative pl-12 rtl:pl-0 rtl:pr-12 fade-in ${isVisible ? 'active' : ''}`}>
                  <div className="glass rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-zai-accent mb-1">
                          {project.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {project.client}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {project.location}
                        </p>
                      </div>
                      <div className="text-right rtl:text-left mt-2 md:mt-0">
                        <span className="text-sm text-gray-400 block">
                          {project.period}
                        </span>
                        <span className={`text-sm font-semibold ${
                          project.status === 'ongoing' ? 'text-zai-success' : 'text-gray-400'
                        }`}>
                          {t(project.status as any)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-zai-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
