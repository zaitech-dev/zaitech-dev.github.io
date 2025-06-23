import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: t('leadership'),
      titleKey: 'leadership',
      skills: [
        t('techLeadership'),
        t('backendDev'),
        t('paymentProcessing'),
        t('ecommerceSolutions'),
        t('mobileCloud')
      ]
    },
    {
      title: t('programmingLanguages'),
      titleKey: 'programmingLanguages',
      skills: ['Kotlin', 'Golang', 'C++', 'Python', 'C', 'Javascript'],
      isGrid: true
    },
    {
      title: t('frameworksLibraries'),
      titleKey: 'frameworksLibraries',
      skills: ['Spring Boot', 'Ktor', 'MATLAB', 'Flask', 'TensorFlow', 'ROS'],
      isGrid: true
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-zai-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('skillsTitle')}</h2>
          <div className="w-24 h-1 bg-zai-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">{t('skillsDescription')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const { elementRef, isVisible } = useScrollAnimation();
            return (
              <div key={index} ref={elementRef} className={`glass rounded-xl p-6 fade-in ${isVisible ? 'active' : ''}`}>
                <h3 className="text-xl font-bold mb-4 text-zai-accent">{category.title}</h3>
                {category.isGrid ? (
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className={`w-3 h-3 rounded-full ${
                          skillIndex % 2 === 0 ? 'bg-zai-accent' : 'bg-zai-success'
                        }`}></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2 text-gray-300">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
