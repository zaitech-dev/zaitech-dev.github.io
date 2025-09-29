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

export const GA_MEASUREMENT_ID = 'G-LBTNWJN6TG';

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
