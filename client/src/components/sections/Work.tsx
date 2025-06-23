import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Work: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const workExperiences = [
    {
      company: 'Leading Dutch Retailer (Xebia)',
      companyAr: 'بائع تجزئة هولندي رائد (Xebia)',
      project: 'E-commerce Platform Expansion',
      projectAr: 'توسيع منصة التجارة الإلكترونية',
      status: 'ongoing',
      description: 'Designed and developed a robust e-commerce platform that processes hundreds of thousands of orders and generates tens of millions in revenue. Successfully expanded the platform from the Netherlands to Belgium, incorporating multilingual and multi-country capabilities.',
      descriptionAr: 'صممت وطورت منصة تجارة إلكترونية قوية تعالج مئات الآلاف من الطلبات وتحقق عشرات الملايين من الإيرادات. نجحت في توسيع المنصة من هولندا إلى بلجيكا، مع دمج قدرات متعددة اللغات ومتعددة البلدان.',
      technologies: ['GCP', 'Golang', 'Docker', 'CI/CD']
    },
    {
      company: 'ASML',
      companyAr: 'ASML',
      project: 'Manufacturing Efficiency Enhancement',
      projectAr: 'تحسين كفاءة التصنيع',
      status: 'completed',
      description: 'Implemented a system to reduce machine calibration and startup times by 8 hours, streamlining production workflows and enhancing overall efficiency.',
      descriptionAr: 'نفذت نظاماً لتقليل أوقات معايرة الآلات والبدء بـ 8 ساعات، مما يبسط سير عمل الإنتاج ويعزز الكفاءة الإجمالية.',
      technologies: ['Python', 'C', 'C++', 'Unit Testing']
    },
    {
      company: 'Stone',
      companyAr: 'Stone',
      project: 'POS System Modernization',
      projectAr: 'تحديث نظام نقاط البيع',
      status: 'completed',
      description: 'Scaled a POS system from fewer than 10 devices to over 230,000 active units. Played a key role in transitioning legacy Linux-based systems to modern Android platforms, ensuring improved reliability and scalability.',
      descriptionAr: 'وسعت نظام نقاط البيع من أقل من 10 أجهزة إلى أكثر من 230,000 وحدة نشطة. لعبت دوراً رئيسياً في الانتقال من الأنظمة القديمة المبنية على لينكس إلى منصات أندرويد الحديثة، مما يضمن تحسين الموثوقية وقابلية التوسع.',
      technologies: ['Kotlin', 'Android', 'Agile']
    }
  ];

  return (
    <section id="work" className="py-20 px-4 bg-zai-secondary/30 text-white">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('workTitle')}</h2>
          <div className="w-24 h-1 bg-zai-accent mx-auto mb-8"></div>
        </div>
        
        <div className="relative">
          <div className="timeline-line"></div>
          
          <div className="space-y-12">
            {workExperiences.map((exp, index) => {
              const { elementRef, isVisible } = useScrollAnimation();
              return (
                <div key={index} ref={elementRef} className={`timeline-item relative pl-12 rtl:pl-0 rtl:pr-12 fade-in ${isVisible ? 'active' : ''}`}>
                  <div className="glass rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-zai-accent">
                        {t('language') === 'ar' ? exp.companyAr : exp.company}
                      </h3>
                      <span className={`text-sm font-semibold ${
                        exp.status === 'ongoing' ? 'text-zai-success' : 'text-gray-400'
                      }`}>
                        {t(exp.status as any)}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold mb-3">
                      {t('language') === 'ar' ? exp.projectAr : exp.project}
                    </h4>
                    <p className="text-gray-300 mb-4">
                      {t('language') === 'ar' ? exp.descriptionAr : exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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

export default Work;
