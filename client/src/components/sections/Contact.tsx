import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/components/LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: t('messageError'),
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: t('messageError'),
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success",
        description: t('messageSent'),
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-zai-secondary/30 text-white">
      <div className="container mx-auto max-w-4xl">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('contactTitle')}</h2>
          <div className="w-24 h-1 bg-zai-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">{t('contactDescription')}</p>
        </div>
        
        <div ref={formRef} className={`glass rounded-2xl p-8 md:p-12 fade-in ${formVisible ? 'active' : ''}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-semibold mb-2">
                  {t('name')} *
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('namePlaceholder')}
                  className="w-full px-4 py-3 bg-zai-primary border border-gray-600 rounded-lg focus:border-zai-accent focus:outline-none transition-colors text-white"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-semibold mb-2">
                  {t('emailField')} *
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('emailPlaceholder')}
                  className="w-full px-4 py-3 bg-zai-primary border border-gray-600 rounded-lg focus:border-zai-accent focus:outline-none transition-colors text-white"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="subject" className="block text-sm font-semibold mb-2">
                {t('subject')}
              </Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={t('subjectPlaceholder')}
                className="w-full px-4 py-3 bg-zai-primary border border-gray-600 rounded-lg focus:border-zai-accent focus:outline-none transition-colors text-white"
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="block text-sm font-semibold mb-2">
                {t('message')} *
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t('messagePlaceholder')}
                className="w-full px-4 py-3 bg-zai-primary border border-gray-600 rounded-lg focus:border-zai-accent focus:outline-none transition-colors resize-none text-white"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-zai-accent hover:bg-zai-accent/80 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>{t('sendMessage')}</span>
              <Send size={20} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
