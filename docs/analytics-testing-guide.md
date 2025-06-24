# Google Analytics Testing Guide

## 🧪 How to Verify Google Analytics is Working

### 1. **Browser Console Testing (Immediate)**

1. **Open your website** in development mode: `http://localhost:5174`
2. **Open browser DevTools** (F12 or right-click → Inspect)
3. **Check the Console tab** for these messages:
   ```
   🔍 Google Analytics initialized with ID: G-J92HLCLMDD
   ✅ Google Analytics script loaded successfully
   ```

4. **Use the Analytics Test Panel** (bottom-right corner in development mode):
   - Click "Check gtag Status" - should show ✅ gtag is available
   - Test each button to see events logged in console
   - Look for messages like: `📊 GA Event: {action, category, label, value}`

### 2. **Browser Network Tab Verification**

1. **Open DevTools → Network tab**
2. **Refresh the page**
3. **Look for these requests**:
   - `gtag/js?id=G-J92HLCLMDD` - GA script loading
   - `collect` or `g/collect` - Event tracking requests to Google
   - Multiple `collect` requests as you interact with the site

### 3. **Google Analytics Real-Time Reports**

1. **Go to Google Analytics**: https://analytics.google.com
2. **Select your property** (G-J92HLCLMDD)
3. **Navigate to Reports → Real-time**
4. **Open your website** in another tab
5. **You should see**:
   - Active users count increase
   - Page views appear
   - Events showing up as you interact

### 4. **Test All Tracking Features**

#### Navigation Tracking
- Click navigation menu items (Home, About, Services, Work, Skills)
- Should see events: `nav_home`, `nav_about`, etc.

#### Button Tracking
- Click "Learn More" button in hero section
- Click "Get In Touch" button
- Should see events with `hero` section context

#### Social Media Tracking
- Click social media icons (GitHub, LinkedIn, Instagram, Blog)
- Should see external link events

#### Contact Form
- Fill out and submit the contact form
- Should see form submission events

#### Scroll Tracking
- Scroll through the page slowly
- Should see scroll depth events at 25%, 50%, 75%, 100%

#### Section Views
- Scroll to different sections
- Should see section view events for Services, Work, etc.

### 5. **Manual Testing Commands**

Open browser console and run these commands:

```javascript
// Check if GA is loaded
console.log('gtag available:', typeof window.gtag !== 'undefined');

// Check dataLayer
console.log('dataLayer:', window.dataLayer);

// Manually trigger a test event
if (window.gtag) {
  window.gtag('event', 'manual_test', {
    event_category: 'test',
    event_label: 'manual_trigger'
  });
  console.log('Manual test event sent');
}
```

### 6. **Google Analytics Debug Mode**

Install the **Google Analytics Debugger** Chrome extension:
1. Go to Chrome Web Store
2. Search for "Google Analytics Debugger"
3. Install and enable it
4. Refresh your site
5. Check console for detailed GA debug information

### 7. **Expected Timeline for Data**

- **Real-time data**: Immediate (within seconds)
- **Standard reports**: 24-48 hours
- **Custom events**: Real-time in debug view, 24-48 hours in reports

### 8. **Common Issues & Solutions**

#### ❌ No console logs appearing
- Check if dev server is running
- Verify browser console is showing all log levels
- Clear browser cache and refresh

#### ❌ "gtag not available" warnings
- Check browser network tab for blocked requests
- Disable ad blockers temporarily
- Check if corporate firewall is blocking GA

#### ❌ Events not showing in GA
- Wait 10-15 minutes for real-time data
- Check GA property ID is correct
- Verify events are firing in browser console first

### 9. **Cleanup After Testing**

Once you've verified everything works:

1. **Remove the test component**:
   ```bash
   rm /client/src/components/AnalyticsTest.tsx
   ```

2. **Remove test component import** from home.tsx

3. **Remove debug logging** from analytics.ts (the console.log statements)

### 10. **Production Verification**

After deploying to production:
1. Test the live site the same way
2. Check GA real-time reports
3. Monitor for 24-48 hours to see data in standard reports
4. Set up custom dashboards and goals in GA

## 🎯 Key Metrics to Monitor

- **Page Views**: How many people visit each page
- **Session Duration**: How long users stay on site
- **Bounce Rate**: Percentage leaving after one page
- **Event Engagement**: Which buttons/links are clicked most
- **Contact Form Conversions**: How many forms are submitted
- **Social Media Traffic**: Which platforms drive traffic
- **Scroll Depth**: How far users read your content

## 📊 Setting Up GA Goals

1. In GA, go to Admin → Goals
2. Create goals for:
   - Contact form submissions
   - Email link clicks
   - Social media clicks
   - Scroll depth milestones
