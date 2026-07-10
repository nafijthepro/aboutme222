
'use server';

import { type SendMessageInput } from '@/ai/flows/send-message';

// This function is no longer needed as the social links are now hardcoded in the footer for performance.
// export async function getCorrectedSocialLinks() { ... }

async function sendOneSignalNotification(headings: { en: string }, contents: { en: string }) {
    if (!process.env.ONESIGNAL_REST_API_KEY) {
      console.log('OneSignal REST API Key not found, skipping push notification.');
      return { success: false, error: 'API key not configured.' };
    }
  
    const notification = {
      app_id: 'f46bac2a-0c92-4101-a03d-cdf662813605',
      included_segments: ['Subscribed Users'],
      headings,
      contents,
      // Optional: Add a URL to open when the notification is clicked
      // web_url: 'https://your-portfolio-url.com', 
    };
  
    try {
      const response = await fetch('https://onesignal.com/api/v1/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8', // Corrected charset
          'Authorization': `Basic ${process.env.ONESIGNAL_REST_API_KEY}`,
        },
        body: JSON.stringify(notification),
      });
  
      const data = await response.json();
      if (data.errors) {
        console.error('OneSignal API error:', data.errors);
        return { success: false, error: data.errors.join(', ') };
      }
      
      console.log('Push notification sent successfully:', data);
      return { success: true };
    } catch (error) {
      console.error('Error sending push notification:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return { success: false, error: errorMessage };
    }
}


export async function sendTestNotification(input: { title: string; message: string }) {
    return sendOneSignalNotification({ en: input.title }, { en: input.message });
}


export async function submitContactForm(input: SendMessageInput) {
  try {
    const formData = new FormData();
    formData.append('access_key', 'fcbc4a8b-7045-49a2-a14e-b0a2eb8f01e2');
    formData.append('name', input.name);
    formData.append('email', input.email);
    formData.append('message', input.message);
    formData.append('subject', `New message from ${input.name} via your portfolio`);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      // After successfully submitting the form, send a push notification.
      const title = `New message from ${input.name}`;
      const message = input.message.substring(0, 100) + (input.message.length > 100 ? '...' : '');
      await sendOneSignalNotification({ en: title }, { en: message });
      return { success: true };
    } else {
      console.error('Web3Forms submission error:', data.message);
      return { success: false };
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false };
  }
}
