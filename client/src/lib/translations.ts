export const translations = {
  en: {
    dir: 'ltr',
    lang: 'en',
    // Navigation
    home: 'Home',
    about: 'About',
    work: 'Work',
    skills: 'Skills',
    testimonials: 'Testimonials',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Zaitech Development',
    heroSubtitle: 'Leaders in Software Engineering Projects',
    heroDescription: 'Backend, Mobile, and Embedded Systems Development',
    learnMore: 'Learn More',
    getInTouch: 'Get In Touch',
    
    // About Section
    aboutTitle: 'About Us',
    aboutDescription: 'At Zaitech Development, we design, develop, and scale innovative technology solutions. Our expertise in building robust e-commerce and payment processing platforms has enabled us to process hundreds of thousands of orders and generate significant revenue growth for our partners. We have successfully expanded market reach across borders, transforming platforms into versatile, multilingual systems. Additionally, our track record in scaling hardware deployments—from a handful of devices to hundreds of thousands—demonstrates our capability to handle complex, large-scale projects with precision and efficiency.',
    contactDetails: 'Contact Details',
    location: 'Guaira, São Paulo, 14790000, Brazil',
    
    // Work Section
    workTitle: 'Work Experience',
    ongoing: 'Ongoing',
    completed: 'Completed',
    
    // Skills Section
    skillsTitle: 'Skills & Technologies',
    skillsDescription: 'We leverage a broad spectrum of cutting-edge technologies to deliver innovative solutions.',
    leadership: 'Leadership & Development',
    techLeadership: '• Tech Leadership',
    backendDev: '• Backend Development',
    paymentProcessing: '• Payment Processing',
    ecommerceSolutions: '• E-Commerce Solutions',
    mobileCloud: '• Mobile & Cloud Integration',
    programmingLanguages: 'Programming Languages',
    frameworksLibraries: 'Frameworks & Libraries',
    
    // Portfolio Section
    portfolioTitle: 'Featured Projects',
    viewProject: 'View Project →',
    
    // Testimonials Section
    testimonialsTitle: 'What Our Partners Say',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactDescription: 'Get in touch to explore how we can drive technological innovation for your business.',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    subjectPlaceholder: 'Project inquiry',
    messagePlaceholder: 'Tell us about your project...',
    messageSent: 'Your message was sent, thank you!',
    messageError: 'Something went wrong. Please try again.',
    
    // Footer
    footerCopyright: '© 2024 Zaitech Development. All rights reserved.',
  },
  ar: {
    dir: 'rtl',
    lang: 'ar',
    // Navigation
    home: 'الرئيسية',
    about: 'حولنا',
    work: 'الأعمال',
    skills: 'المهارات',
    testimonials: 'الشهادات',
    contact: 'التواصل',
    
    // Hero Section
    heroTitle: 'تطوير زايتك',
    heroSubtitle: 'رواد في مشاريع هندسة البرمجيات',
    heroDescription: 'تطوير الخادم والجوال والأنظمة المدمجة',
    learnMore: 'اعرف المزيد',
    getInTouch: 'تواصل معنا',
    
    // About Section
    aboutTitle: 'حولنا',
    aboutDescription: 'في تطوير زايتك، نقوم بتصميم وتطوير وتوسيع حلول تقنية مبتكرة. خبرتنا في بناء منصات التجارة الإلكترونية ومعالجة المدفوعات القوية مكنتنا من معالجة مئات الآلاف من الطلبات وتحقيق نمو كبير في الإيرادات لشركائنا. لقد نجحنا في توسيع نطاق الوصول للسوق عبر الحدود، وتحويل المنصات إلى أنظمة متعددة اللغات ومتعددة الاستخدامات. بالإضافة إلى ذلك، سجلنا الحافل في توسيع نشر الأجهزة - من حفنة من الأجهزة إلى مئات الآلاف - يوضح قدرتنا على التعامل مع المشاريع المعقدة واسعة النطاق بدقة وكفاءة.',
    contactDetails: 'تفاصيل التواصل',
    location: 'غوايرا، ساو باولو، 14790000، البرازيل',
    
    // Work Section
    workTitle: 'الخبرة العملية',
    ongoing: 'مستمر',
    completed: 'مكتمل',
    
    // Skills Section
    skillsTitle: 'المهارات والتقنيات',
    skillsDescription: 'نستفيد من مجموعة واسعة من التقنيات المتطورة لتقديم حلول مبتكرة.',
    leadership: 'القيادة والتطوير',
    techLeadership: '• القيادة التقنية',
    backendDev: '• تطوير الخادم',
    paymentProcessing: '• معالجة المدفوعات',
    ecommerceSolutions: '• حلول التجارة الإلكترونية',
    mobileCloud: '• تكامل الجوال والسحابة',
    programmingLanguages: 'لغات البرمجة',
    frameworksLibraries: 'الأطر والمكتبات',
    
    // Portfolio Section
    portfolioTitle: 'المشاريع المميزة',
    viewProject: '← عرض المشروع',
    
    // Testimonials Section
    testimonialsTitle: 'ما يقوله شركاؤنا',
    
    // Contact Section
    contactTitle: 'تواصل معنا',
    contactDescription: 'تواصل معنا لاستكشاف كيف يمكننا دفع الابتكار التكنولوجي لعملك.',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    subject: 'الموضوع',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    namePlaceholder: 'اسمك',
    emailPlaceholder: 'your@email.com',
    subjectPlaceholder: 'استفسار عن مشروع',
    messagePlaceholder: 'أخبرنا عن مشروعك...',
    messageSent: 'تم إرسال رسالتك، شكراً لك!',
    messageError: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    
    // Footer
    footerCopyright: '© 2024 تطوير زايتك. جميع الحقوق محفوظة.',
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
