import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Sign up at https://www.emailjs.com/ and get your credentials
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS Public Key
};

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data containing name, email, message
 * @returns {Promise} EmailJS response
 */
export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Your Name', // Your name
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
};

/**
 * Initialize EmailJS (call this once in your app)
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};
