import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const skillCategories = (t('skillsCategories') as unknown) as Array<{
    title: string;
    skills: string[];
  }>;

  return (
    <section id="skills" className="py-20 px-4 bg-zai-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('skillsTitle')}</h2>
          <div className="w-24 h-1 bg-zai-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">{t('skillsDescription')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => {
            const { elementRef, isVisible } = useScrollAnimation();
            return (
              <div key={index} ref={elementRef} className={`glass rounded-xl p-6 h-fit fade-in ${isVisible ? 'active' : ''}`}>
                <h3 className="text-lg font-bold mb-4 text-zai-accent text-center">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <div className="w-2 h-2 rounded-full bg-zai-success flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
