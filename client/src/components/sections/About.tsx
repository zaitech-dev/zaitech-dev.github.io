import React from 'react';
import { User, TrendingUp, Users, Target } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { elementRef: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation();

  const achievements = [
    {
      icon: TrendingUp,
      title: t('revenueImpact'),
      description: t('revenueImpactDesc'),
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: t('systemScaling'),
      description: t('systemScalingDesc'),
      color: 'text-blue-400'
    },
    {
      icon: Users,
      title: t('globalReach'),
      description: t('globalReachDesc'),
      color: 'text-purple-400'
    },
    {
      icon: User,
      title: t('teamExpertise'),
      description: t('teamExpertiseDesc'),
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-zai-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutTitle')}</h2>
          <p className="text-xl md:text-2xl text-zai-accent font-semibold mb-4">{t('companyMission')}</p>
          <p className="text-lg text-gray-300 mb-8">{t('missionDescription')}</p>
          <div className="w-24 h-1 bg-zai-accent mx-auto"></div>
        </div>
        
        <div ref={contentRef} className={`glass rounded-2xl p-8 md:p-12 mb-16 fade-in ${contentVisible ? 'active' : ''}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-zai-accent">{t('ourApproach')}</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                {t('aboutDescription')}
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                {t('approachDescription')}
              </p>
              <div className="border-l-4 border-zai-accent pl-4">
                <p className="text-sm text-gray-400">{t('founderNote')}</p>
                <a href="https://zaitera.com" target="_blank" rel="noopener noreferrer" className="text-zai-accent hover:text-blue-400 text-sm">
                  {t('founderLink')} →
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-zai-accent/20 to-zai-success/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-zai-accent/20 rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-zai-accent">Z</div>
                  </div>
                  <h4 className="text-xl font-bold text-white">Zaitech Development</h4>
                  <p className="text-gray-400">Enterprise Solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-zai-primary/50 rounded-xl">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">{t('contactDetails')}</h3>
              <p className="text-gray-300">{t('location')}</p>
              <p className="text-zai-accent font-semibold">{t('contactEmail')}</p>
            </div>
          </div>
        </div>

        <div ref={achievementsRef} className={`fade-in ${achievementsVisible ? 'active' : ''}`}>
          <h3 className="text-3xl font-bold text-center mb-12">{t('keyAchievements')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="glass rounded-xl p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-zai-primary/50 mb-4`}>
                    <Icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-zai-accent">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
