/**
 * Shared by the contact form (client) and /submit-contact (server).
 * Constants only: this file is bundled into the browser.
 */

/** Stable reCAPTCHA v3 action name for the contact form. */
export const CONTACT_RECAPTCHA_ACTION = 'contact_form';

export const CONTACT_LIMITS = {
  /** Whole request body, in bytes. */
  bodyBytes: 16_384,
  /** Number of form fields. */
  fields: 30,
  /** Characters per field name. */
  keyChars: 100,
  /** Characters per field value. */
  valueChars: 5_000,
} as const;
