'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    OneSignalDeferred?: any[];
  }
}

const OneSignalProvider = () => {
  useEffect(() => {
    // Only init OneSignal on HTTPS production sites
    if (typeof window === 'undefined') return;
    if (window.location.protocol !== 'https:') {
      // OneSignal v16+ requires HTTPS — skip silently on localhost/HTTP
      return;
    }

    const script = document.createElement('script');
    script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
    script.defer = true;
    script.onload = () => {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      window.OneSignalDeferred.push(function(OneSignal: any) {
        try {
          OneSignal.init({
            appId: "f46bac2a-0c92-4101-a03d-cdf662813605",
            safari_web_id: "web.onesignal.auto.428d294a-5ce2-44bb-bee0-dec3149a5564",
            allowLocalhostAsSecureOrigin: true,
            autoPrompt: true,
          });
        } catch (error) {
          // Silenced — expected to fail on non-HTTPS
        }
      });
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default OneSignalProvider;
