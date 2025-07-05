import React from 'react';
import { TrendingUp, Users, Settings, BookOpen } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimationWithTracking } from '@/hooks/useScrollAnimationWithTracking';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimationWithTracking('services');

  const services = [
    {
      icon: Settings,
      title: t('platformDevelopmentTitle'),
      description: t('platformDevelopmentDesc'),
      features: ['E-commerce Platforms', 'Payment Systems', 'Mobile Applications', 'API Development'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: t('systemScalingTitle'),
      description: t('systemScalingDesc'),
      features: ['Infrastructure Scaling', 'Performance Optimization', 'Multi-Country Deployment', 'DevOps Solutions'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Users,
      title: t('consultancyTitle'),
      description: t('consultancyDesc'),
      features: ['Technology Strategy', 'Architecture Design', 'Digital Transformation', 'Team Leadership'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: BookOpen,
      title: t('trainingTitle'),
      description: t('trainingDesc'),
      features: ['Enterprise Architecture', 'Advanced Programming', 'Team Leadership', 'Cloud-Native Development'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-zai-secondary/30 text-white">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('servicesTitle')}</h2>
          <div className="w-24 h-1 bg-zai-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">{t('servicesDescription')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { elementRef, isVisible } = useScrollAnimation();
            const Icon = service.icon;
            return (
              <div key={index} ref={elementRef} className={`glass rounded-xl p-8 hover:scale-105 transition-transform fade-in ${isVisible ? 'active' : ''}`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-zai-accent">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-zai-success rounded-full"></div>
                      <span className="text-sm text-gray-400">
                        {feature}
                      </span>
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

export default Services;