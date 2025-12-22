import emailjs from '@emailjs/browser';

// EmailJS Configuration - require values from Vite env variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const EMAILJS_CONFIG = {
  SERVICE_ID,
  TEMPLATE_ID,
  PUBLIC_KEY,
};

/**
 * Initialize EmailJS (call once at app startup)
 */
export const initEmailJS = () => {
  if (!PUBLIC_KEY) {
    // Don't log sensitive values; provide actionable instruction instead
    console.warn(
      '⚠️ EmailJS public key not configured. Set VITE_EMAILJS_PUBLIC_KEY in your environment.'
    );
    return;
  }

  try {
    emailjs.init(PUBLIC_KEY);
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
  // Validate configuration - fail fast with clear message
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      'EmailJS not configured. Ensure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY are set.'
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
    return response;
  } catch (error) {
    console.error('❌ Email send error:', error);
    throw error;
  }
};
