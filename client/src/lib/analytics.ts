// Google Analytics Configuration
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date | object,
      config?: object
    ) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-J92HLCLMDD';

// Initialize Google Analytics
export const initGA = () => {
  // Load gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });

  // Debug logging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
    script1.onload = () => {
      console.log('✅ Google Analytics script loaded successfully');
    };
    script1.onerror = () => {
      console.error('❌ Failed to load Google Analytics script');
    };
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });

    // Debug logging (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 GA Event:', { action, category, label, value });
    }
  } else if (process.env.NODE_ENV === 'development') {
    console.warn('⚠️ gtag not available, event not tracked:', { action, category, label, value });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, section?: string) => {
  trackEvent('click', 'button', `${section ? section + '_' : ''}${buttonName}`);
};

// Track section views (for scroll tracking)
export const trackSectionView = (sectionName: string) => {
  trackEvent('view', 'section', sectionName);
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('click', 'external_link', linkText || url);
};

// Track contact interactions
export const trackContactInteraction = (method: 'email' | 'form' | 'social', platform?: string) => {
  trackEvent('contact', 'interaction', platform ? `${method}_${platform}` : method);
};
