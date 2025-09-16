
'use client';

import { useEffect } from 'react';

const OneSignalProvider = () => {
  useEffect(() => {
    // This effect runs only once on the client-side
    const script = document.createElement('script');
    script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
    script.defer = true;
    script.onload = () => {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      window.OneSignalDeferred.push(function(OneSignal) {
        OneSignal.init({
          appId: "f46bac2a-0c92-4101-a03d-cdf662813605",
          safari_web_id: "web.onesignal.auto.428d294a-5ce2-44bb-bee0-dec3149a5564",
          allowLocalhostAsSecureOrigin: true,
          autoPrompt: true, // Automatically prompt new users
        });
      });
    };
    document.head.appendChild(script);

    return () => {
      // Clean up the script tag if the component unmounts
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // This component does not render anything
};

export default OneSignalProvider;
