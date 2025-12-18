import emailjs from '@emailjs/browser';

// EmailJS Configuration - using Vite environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'portfolio_gmail';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_jynaeni';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '9y2QENhk6CGkydPLO';

export const EMAILJS_CONFIG = {
  SERVICE_ID,
  TEMPLATE_ID,
  PUBLIC_KEY,
};

/**
 * Initialize EmailJS (call once at app startup)
 */
export const initEmailJS = () => {
  if (!PUBLIC_KEY || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn(
      '⚠️ EmailJS public key not configured. Add VITE_EMAILJS_PUBLIC_KEY to .env file.'
    );
    return;
  }
  
  try {
    emailjs.init(PUBLIC_KEY);
    console.log('✅ EmailJS initialized successfully');
  } catch (error) {
    console.error('❌ EmailJS initialization failed:', error);
  }
};

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data containing name, email, message
 * @returns {Promise} EmailJS response
 */
export const sendEmail = async formData => {
  // Validate configuration
  if (
    !SERVICE_ID ||
    SERVICE_ID === 'YOUR_SERVICE_ID' ||
    !TEMPLATE_ID ||
    TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
    !PUBLIC_KEY ||
    PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
  ) {
    throw new Error(
      'EmailJS not configured. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.'
    );
  }

  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    
    console.log('✅ Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('❌ Email send error:', error);
    throw error;
  }
};
