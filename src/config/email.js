// Configuración de EmailJS
// En desarrollo local, usa .env.local
// En producción (GitHub Actions), usa variables de entorno

const getEmailConfig = () => {
  // Prioridad: variables de entorno (GitHub Actions / servidor)
  if (typeof process !== 'undefined' && process.env) {
    return {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    };
  }

  // Fallback (no debería usarse en producción)
  return {
    serviceId: '',
    templateId: '',
    publicKey: '',
  };
};

export const emailConfig = getEmailConfig();
