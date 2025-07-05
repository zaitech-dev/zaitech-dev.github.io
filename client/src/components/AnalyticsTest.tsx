import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  trackEvent, 
  trackButtonClick, 
  trackExternalLink, 
  trackContactInteraction,
  trackFormSubmission,
  trackSectionView 
} from '@/lib/analytics';

// Temporary component for testing analytics
// Remove this component after testing is complete
const AnalyticsTest: React.FC = () => {
  const testEvents = [
    {
      label: 'Test Button Click',
      action: () => trackButtonClick('test_button', 'analytics_test'),
    },
    {
      label: 'Test External Link',
      action: () => trackExternalLink('https://example.com', 'Test Link'),
    },
    {
      label: 'Test Contact Interaction',
      action: () => trackContactInteraction('email', 'test'),
    },

    {
      label: 'Test Section View',
      action: () => trackSectionView('test_section'),
    },
    {
      label: 'Test Custom Event',
      action: () => trackEvent('test_action', 'test_category', 'test_label', 42),
    },
  ];

  const checkGtagStatus = () => {
    if (typeof window.gtag !== 'undefined') {
      console.log('✅ gtag is available');
      console.log('📊 dataLayer contents:', window.dataLayer);
    } else {
      console.error('❌ gtag is not available');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border z-50 max-w-xs">
      <h3 className="font-bold text-sm mb-2 text-gray-800">Analytics Testing</h3>
      <div className="space-y-2">
        <Button 
          size="sm" 
          variant="outline" 
          className="w-full text-xs"
          onClick={checkGtagStatus}
        >
          Check gtag Status
        </Button>
        {testEvents.map((test, index) => (
          <Button
            key={index}
            size="sm"
            variant="outline"
            className="w-full text-xs"
            onClick={test.action}
          >
            {test.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsTest;
