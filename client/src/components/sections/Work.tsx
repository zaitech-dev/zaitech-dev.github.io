import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Work: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const workExperiences = [
    {
      company: 'Xebia',
      companyAr: 'Xebia',
      position: 'Senior Consultant',
      positionAr: 'مستشار أول',
      location: 'Utrecht, Netherlands',
      locationAr: 'أوتريخت، هولندا',
      period: '2022/11 – Present',
      periodAr: '2022/11 – الحاضر',
      status: 'ongoing',
      description: 'Leading a team of four software developers, responsible for the design, development, and maintenance of the ecommerce platform of a big Dutch retailer. Since starting as Senior Consultant, the platform has processed hundreds of thousands of orders, generating tens of millions in revenue. Expanded the platform beyond the Netherlands to include Belgium, transforming it into a multi-lingual, multi-country system.',
      descriptionAr: 'قيادة فريق من أربعة مطوري برمجيات، مسؤول عن تصميم وتطوير وصيانة منصة التجارة الإلكترونية لبائع تجزئة هولندي كبير. منذ البدء كمستشار أول، عالجت المنصة مئات الآلاف من الطلبات، محققة عشرات الملايين من الإيرادات. وسعت المنصة خارج هولندا لتشمل بلجيكا، محولة إياها إلى نظام متعدد اللغات ومتعدد البلدان.',
      technologies: ['E-Commerce', 'Golang', 'GCP', 'Leadership', 'International Expansion']
    },
    {
      company: 'ASML',
      companyAr: 'ASML',
      position: 'Lead Software Engineer',
      positionAr: 'مهندس برمجيات رئيسي',
      location: 'Eindhoven, Netherlands',
      locationAr: 'أيندهوفن، هولندا',
      period: '2021/10 – 2022/11',
      periodAr: '2021/10 – 2022/11',
      status: 'completed',
      description: 'Reduced eight hours of the time it takes the machine to be ready for production by adapting machine calibration & performance procedures to receive data from a ready file instead of running manual calibration from zero. Collaborated with multiple stakeholders to achieve significant alignments and agreements.',
      descriptionAr: 'قللت ثماني ساعات من الوقت اللازم لتجهيز الآلة للإنتاج من خلال تكييف إجراءات المعايرة والأداء لتلقي البيانات من ملف جاهز بدلاً من تشغيل المعايرة اليدوية من الصفر. تعاونت مع أصحاب المصلحة المتعددين لتحقيق توافقات واتفاقيات مهمة.',
      technologies: ['Python', 'C++', 'Unit Testing', 'Documentation']
    },
    {
      company: 'Stone',
      companyAr: 'Stone',
      position: 'Lead Software Engineer',
      positionAr: 'مهندس برمجيات رئيسي',
      location: 'Rio de Janeiro, Brazil',
      locationAr: 'ريو دي جانيرو، البرازيل',
      period: '2019/11 – 2021/10',
      periodAr: '2019/11 – 2021/10',
      status: 'completed',
      description: 'Scaled a product from less than ten devices to +230k devices actively used by clients. Implemented CI pipelines, integrated new manufacturers, and developed monitoring services. Led the team responsible for introducing Android-based POS to the market and scaling it effectively.',
      descriptionAr: 'وسعت منتجاً من أقل من عشرة أجهزة إلى أكثر من 230 ألف جهاز مستخدم بنشاط من قبل العملاء. نفذت خطوط CI، ودمجت مصنعين جدد، وطورت خدمات المراقبة. قدت الفريق المسؤول عن إدخال نقاط البيع المبنية على أندرويد إلى السوق وتوسيعها بفعالية.',
      technologies: ['Kotlin', 'Android', 'Architecture', 'Coroutines', 'Agile']
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
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-zai-accent mb-1">
                          {t('language') === 'ar' ? exp.companyAr : exp.company}
                        </h3>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {t('language') === 'ar' ? exp.positionAr : exp.position}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {t('language') === 'ar' ? exp.locationAr : exp.location}
                        </p>
                      </div>
                      <div className="text-right rtl:text-left mt-2 md:mt-0">
                        <span className="text-sm text-gray-400 block">
                          {t('language') === 'ar' ? exp.periodAr : exp.period}
                        </span>
                        <span className={`text-sm font-semibold ${
                          exp.status === 'ongoing' ? 'text-zai-success' : 'text-gray-400'
                        }`}>
                          {t(exp.status as any)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
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
