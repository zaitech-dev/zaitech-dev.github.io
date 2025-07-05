import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'Multi-Country E-commerce Platform',
      titleAr: 'منصة التجارة الإلكترونية متعددة البلدان',
      description: 'Led the expansion of a Dutch retailer\'s platform to Belgium, implementing multi-lingual support and different tax systems. Platform processes hundreds of thousands of orders monthly.',
      descriptionAr: 'قاد توسيع منصة بائع تجزئة هولندي إلى بلجيكا، مع تنفيذ دعم متعدد اللغات وأنظمة ضرائب مختلفة. تعالج المنصة مئات الآلاف من الطلبات شهرياً.',
      metrics: ['500K+ Orders', '€50M+ Revenue'],
      metricsAr: ['أكثر من 500 ألف طلب', 'أكثر من 50 مليون يورو إيرادات'],
      technologies: ['Golang', 'GCP', 'Microservices'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      link: '#'
    },
    {
      title: 'Mobile POS Platform Scaling',
      titleAr: 'توسيع منصة نقاط البيع المحمولة',
      description: 'Scaled Android-based point-of-sale system from 10 to 230,000+ active devices, implementing CI/CD pipelines and monitoring systems for optimal performance.',
      descriptionAr: 'وسع نظام نقاط البيع المبني على أندرويد من 10 إلى أكثر من 230,000 جهاز نشط، مع تنفيذ خطوط CI/CD وأنظمة المراقبة للأداء الأمثل.',
      metrics: ['230K+ Devices', '2300% Growth'],
      metricsAr: ['أكثر من 230 ألف جهاز', 'نمو 2300%'],
      technologies: ['Kotlin', 'Android', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      link: '#'
    },
    {
      title: 'ML Position Detection System',
      titleAr: 'نظام كشف المواقع بالتعلم الآلي',
      description: 'Developed production-grade machine learning backend service that reduced position-detection system response time by 75%, replacing legacy .NET infrastructure.',
      descriptionAr: 'طور خدمة خلفية للتعلم الآلي بمستوى الإنتاج قللت وقت استجابة نظام كشف المواقع بنسبة 75%، مع استبدال البنية التحتية القديمة لـ .NET.',
      metrics: ['75% Faster', 'Production ML'],
      metricsAr: ['أسرع بنسبة 75%', 'تعلم آلي إنتاجي'],
      technologies: ['Python', 'ML', 'Flask'],
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
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
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { elementRef, isVisible } = useScrollAnimation();
            return (
              <div key={index} ref={elementRef} className={`glass rounded-xl overflow-hidden hover:scale-105 transition-transform fade-in ${isVisible ? 'active' : ''}`}>
                <img 
                  src={project.image} 
                  alt={language === 'ar' ? project.titleAr : project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {language === 'ar' ? project.titleAr : project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {language === 'ar' ? project.descriptionAr : project.description}
                  </p>
                  
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <span key={metricIndex} className="px-2 py-1 bg-zai-success text-white text-xs rounded-full font-semibold">
                          {language === 'ar' ? project.metricsAr[metricIndex] : metric}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-zai-primary text-gray-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
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
