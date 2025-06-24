import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimationWithTracking } from '@/hooks/useScrollAnimationWithTracking';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Work: React.FC = () => {
  const { language, t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimationWithTracking('work');

  const projects = [
    {
      client: 'Leading AdTech Platform',
      clientAr: 'منصة تكنولوجيا إعلانية رائدة',
      project: 'Advanced Campaign Management Platform',
      projectAr: 'منصة إدارة الحملات المتقدمة',
      location: 'United States',
      locationAr: 'الولايات المتحدة',
      period: '2024 – Present',
      periodAr: '2024 – الحاضر',
      status: 'ongoing',
      description: 'Developing a comprehensive campaign management platform that unifies linear and digital advertising operations. Building automated workflows, real-time reporting dashboards, and integrated billing systems that process millions in ad revenue. The platform serves cable networks, broadcasters, agencies, and networks with custom proposal building and predictive campaign analytics.',
      descriptionAr: 'تطوير منصة شاملة لإدارة الحملات توحد عمليات الإعلان الخطي والرقمي. بناء سير عمل آلي ولوحات تقارير في الوقت الفعلي وأنظمة فوترة متكاملة تعالج مئات الملايين من إيرادات الإعلانات. تخدم المنصة مزودي خدمات الفيديو والمذيعين والوكالات والشبكات مع بناء عروض مخصصة وتحليلات حملات تنبؤية.',
      technologies: ['Linear & Digital Integration', 'Automated Workflows', 'Real-time Analytics', 'Campaign Optimization', 'Revenue Management']
    },
    {
      client: 'Electronics Retail Chain',
      clientAr: 'سلسلة بيع إلكترونيات بالتجزئة',
      project: 'Smart Pricing System',
      projectAr: 'نظام ذكاء التسعير الآلي',
      location: 'United States',
      locationAr: 'الولايات المتحدة',
      period: '2024 – Present',
      periodAr: '2023 – 2024',
      status: 'ongoing',
      description: 'Developing an automated pricing system for a major electronics retailer that aggregates real-time wholesale prices from multiple bulk buyers and sellers. The system uses machine learning algorithms to analyze market trends, competitor pricing, and demand patterns to recommend optimal pricing strategies, resulting in improved profit margins and market competitiveness.',
      descriptionAr: 'بنينا نظام ذكاء تسعير آلي لبائع تجزئة إلكترونيات كبير يجمع أسعار الجملة في الوقت الفعلي من مشترين وبائعين بالجملة متعددين. يستخدم النظام خوارزميات التعلم الآلي لتحليل اتجاهات السوق وأسعار المنافسين وأنماط الطلب لاقتراح استراتيجيات تسعير مثلى، مما أدى إلى تحسين هوامش الربح وتعزيز القدرة التنافسية في السوق.',
      technologies: ['Machine Learning', 'Pricing Automation', 'Market Analysis', 'API Integration', 'Real-time Data Processing']
    },
    {
      client: 'PenguinIN',
      clientAr: 'PenguinIN',
      project: 'Machine Learning Service Optimization',
      projectAr: 'تحسين خدمة التعلم الآلي',
      location: 'United States',
      locationAr: 'الولايات المتحدة',
      period: '2023 – Present',
      periodAr: '2023 – الحاضر',
      status: 'ongoing',
      description: 'Developed a production-grade machine learning backend for real-time position detection, optimizing response times and modernizing legacy systems. Built scalable infrastructure that is able to processes thousands of positioning requests per second, enhancing user experience in indoor navigation applications.',
      descriptionAr: 'طورنا خلفية تعلم آلي بمستوى الإنتاج لاكتشاف المواقع في الوقت الفعلي، مع تحسين أوقات الاستجابة وتحديث الأنظمة القديمة. بنينا بنية تحتية قابلة للتوسع تعالج آلاف طلبات تحديد المواقع في الثانية بدقة تحت الميلي ثانية، مما يعزز تجربة المستخدم في تطبيقات الملاحة الداخلية.',
      technologies: ['Python', 'Flask', 'Machine Learning', 'CI/CD', 'DevOps', 'Real-time Processing']
    },
    {
      client: 'Dutch E-Commerce Retailer',
      clientAr: 'بائع تجزئة إلكتروني هولندي',
      project: 'Multi-Country E-Commerce Platform',
      projectAr: 'منصة تجارة إلكترونية متعددة البلدان',
      location: 'Netherlands & Belgium',
      locationAr: 'هولندا وبلجيكا',
      period: '2022 – 2025',
      periodAr: '2022 – 2025',
      status: 'completed',
      description: 'Leading the development and expansion of a major e-commerce platform that processes hundreds of thousands of orders, generating tens of millions in revenue. Successfully expanded operations from Netherlands to Belgium, implementing multi-lingual and multi-currency capabilities.',
      descriptionAr: 'قيادة تطوير وتوسيع منصة تجارة إلكترونية كبرى تعالج مئات الآلاف من الطلبات وتحقق عشرات الملايين من الإيرادات. نجحنا في توسيع العمليات من هولندا إلى بلجيكا، مع تنفيذ قدرات متعددة اللغات والعملات.',
      technologies: ['E-Commerce', 'Golang', 'GCP', 'International Expansion', 'Microservices']
    },
    {
      client: 'Semiconductor Industry',
      clientAr: 'صناعة أشباه الموصلات',
      project: 'Manufacturing Optimization System',
      projectAr: 'نظام تحسين التصنيع',
      location: 'Netherlands',
      locationAr: 'هولندا',
      period: '2021 – 2022',
      periodAr: '2021 – 2022',
      status: 'completed',
      description: 'Optimized critical manufacturing processes, reducing machine preparation time by 8 hours through advanced calibration automation. Implemented data-driven approaches that significantly improved production efficiency and reduced operational costs.',
      descriptionAr: 'حسّنا عمليات التصنيع الحرجة، مما قلل وقت تحضير الآلات بـ 8 ساعات من خلال أتمتة المعايرة المتقدمة. نفذنا نهجاً مدفوعاً بالبيانات حسّن بشكل كبير كفاءة الإنتاج وقلل التكاليف التشغيلية.',
      technologies: ['Python', 'C++', 'Process Optimization', 'Manufacturing Systems', 'Data Analysis']
    },
    {
      client: 'FinTech Payment Provider',
      clientAr: 'مزود مدفوعات تقنية مالية',
      project: 'Payment Infrastructure Scaling',
      projectAr: 'توسيع البنية التحتية للمدفوعات',
      location: 'Brazil',
      locationAr: 'البرازيل',
      period: '2019 – 2021',
      periodAr: '2019 – 2021',
      status: 'completed',
      description: 'Scaled payment infrastructure from supporting fewer than 10 devices to over 230,000 active devices. Architected and implemented robust Android-based point-of-sale systems, CI/CD pipelines, and comprehensive monitoring solutions.',
      descriptionAr: 'وسّعنا البنية التحتية للمدفوعات من دعم أقل من 10 أجهزة إلى أكثر من 230,000 جهاز نشط. صممنا ونفذنا أنظمة نقاط بيع قوية مبنية على أندرويد وخطوط CI/CD وحلول مراقبة شاملة.',
      technologies: ['Kotlin', 'Android', 'Payment Systems', 'Infrastructure Scaling', 'DevOps']
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
            {projects.map((project, index) => {
              const { elementRef, isVisible } = useScrollAnimation();
              return (
                <div key={index} ref={elementRef} className={`timeline-item relative pl-12 rtl:pl-0 rtl:pr-12 fade-in ${isVisible ? 'active' : ''}`}>
                  <div className="glass rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-zai-accent mb-1">
                          {language === 'ar' ? project.projectAr : project.project}
                        </h3>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {language === 'ar' ? project.clientAr : project.client}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {language === 'ar' ? project.locationAr : project.location}
                        </p>
                      </div>
                      <div className="text-right rtl:text-left mt-2 md:mt-0">
                        <span className="text-sm text-gray-400 block">
                          {language === 'ar' ? project.periodAr : project.period}
                        </span>
                        <span className={`text-sm font-semibold ${
                          project.status === 'ongoing' ? 'text-zai-success' : 'text-gray-400'
                        }`}>
                          {t(project.status as any)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {language === 'ar' ? project.descriptionAr : project.description}
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

export default Work;
