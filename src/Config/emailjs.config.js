const getEnv = (key) => {
    const value = import.meta.env[key];
    if (!value) {
      throw new Error(`Missing ENV: ${key}`);
    }
    return value;
  };
  
  export const EMAILJS_CONFIG = {
    SERVICE_ID: getEnv("VITE_MAILJS_SERVICE_ID"),
    TEMPLATE_ID: getEnv("VITE_MAILJS_TEMPLATE_ID"),
    PUBLIC_KEY: getEnv("VITE_MAILJS_PUBLIC_KEY"),
  };
  