/**
 * Pure validation helper for the Contact section placeholder form.
 */
export function validateContactForm(formData) {
  const errors = {};
  const name = (formData.name || '').trim();
  const email = (formData.email || '').trim();
  const message = (formData.message || '').trim();

  if (!name) {
    errors.name = 'Please enter your name.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please enter a short message.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
