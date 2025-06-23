import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const testimonials = [
    {
      text: 'Zaitech Development delivered exceptional technical leadership and project management, enabling our collaboration to exceed expectations and achieve significant milestones.',
      textAr: 'قدمت تطوير زايتك قيادة تقنية واستثنائية وإدارة مشاريع، مما مكن تعاوننا من تجاوز التوقعات وتحقيق إنجازات مهمة.',
      author: 'Carlos Adir Ely Murussi Leite',
      authorAr: 'كارلوس أدير إيلي موروسي ليتي',
      color: 'accent'
    },
    {
      text: "The team's innovative approach and commitment to excellence transformed our project, showcasing the strength of Zaitech Development's expertise.",
      textAr: 'النهج المبتكر للفريق والالتزام بالتميز حول مشروعنا، مما يظهر قوة خبرة تطوير زايتك.',
      author: 'Lucas Schiavini',
      authorAr: 'لوكاس شيافيني',
      color: 'success'
    },
    {
      text: 'Working with Zaitech Development has been a game-changer. Their ability to integrate advanced technologies and lead complex projects is truly impressive.',
      textAr: 'العمل مع تطوير زايتك كان تغييراً جوهرياً. قدرتهم على دمج التقنيات المتقدمة وقيادة المشاريع المعقدة مثيرة للإعجاب حقاً.',
      author: 'Rafael Torres',
      authorAr: 'رافائيل توريس',
      color: 'accent'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-zai-primary text-white">
      <div className="container mx-auto max-w-4xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('testimonialsTitle')}</h2>
          <div className="w-24 h-1 bg-zai-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => {
            const { elementRef, isVisible } = useScrollAnimation();
            return (
              <div key={index} ref={elementRef} className={`glass rounded-xl p-8 fade-in ${isVisible ? 'active' : ''}`}>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      testimonial.color === 'accent' ? 'bg-zai-accent' : 'bg-zai-success'
                    }`}>
                      <Quote className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-gray-300 mb-4">
                      {t('language') === 'ar' ? testimonial.textAr : testimonial.text}
                    </p>
                    <p className={`font-semibold ${
                      testimonial.color === 'accent' ? 'text-zai-accent' : 'text-zai-success'
                    }`}>
                      {t('language') === 'ar' ? testimonial.authorAr : testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
