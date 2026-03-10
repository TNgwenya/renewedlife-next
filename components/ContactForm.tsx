'use client';

import { useState } from 'react';

type Props = {
  email: string;
  formEndpoint: string;
  whatsappBaseHref: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validateForm(formState: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!formState.name.trim()) {
    errors.name = 'Please share your name.';
  }

  if (!formState.email.trim()) {
    errors.email = 'Please share your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!formState.subject.trim()) {
    errors.subject = 'Please add a subject.';
  }

  if (!formState.message.trim()) {
    errors.message = 'Please include a short message.';
  }

  return errors;
}

export default function ContactForm({ email, formEndpoint, whatsappBaseHref }: Props) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  function buildWhatsappHref(message: string) {
    return `${whatsappBaseHref}?text=${encodeURIComponent(message)}`;
  }

  function updateField<Key extends keyof FormState>(field: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
    setSubmitError('');
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(formState);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const submittedForm = { ...formState };
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error('Unable to submit the form right now.');
      }

      setSubmitted(true);
      setSubmittedName(submittedForm.name || 'a guest');
      setFormState(initialState);
    } catch {
      setSubmitError('We could not send your message just now. Please try again or contact the church directly by email or WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const whatsappFollowupHref = buildWhatsappHref(
    `Hi Renewed Life, I have just submitted the website contact form. My name is ${submittedName || 'a guest'}.`
  );

  if (submitted) {
    return (
      <div className="submission-note" aria-live="polite">
        <p className="card-label">Message sent</p>
        <h3>Thank you for reaching out.</h3>
        <p>
          Your message has been sent to the church inbox. Someone from Renewed Life will follow up as soon as possible.
        </p>
        <div className="submission-actions">
          <a className="button button-secondary" href={whatsappFollowupHref} target="_blank" rel="noreferrer">
            Notify us on WhatsApp
          </a>
          <a className="button button-ghost" href={`mailto:${email}`}>
            Email us directly
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <form className="visit-form" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="formType" value="Website Contact Form" />
        <input type="hidden" name="_subject" value={`Website contact enquiry from Renewed Life`} />
        <div className="form-grid form-grid-two">
          <label className={errors.name ? 'field-invalid' : undefined}>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formState.name}
              onChange={(event) => updateField('name', event.target.value)}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              required
            />
            {errors.name ? <span id="contact-name-error" className="field-error">{errors.name}</span> : null}
          </label>
          <label className={errors.email ? 'field-invalid' : undefined}>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formState.email}
              onChange={(event) => updateField('email', event.target.value)}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              required
            />
            {errors.email ? <span id="contact-email-error" className="field-error">{errors.email}</span> : null}
          </label>
        </div>

        <div className="form-grid form-grid-two">
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formState.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              autoComplete="tel"
            />
          </label>
          <label className={errors.subject ? 'field-invalid' : undefined}>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              value={formState.subject}
              onChange={(event) => updateField('subject', event.target.value)}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
              required
            />
            {errors.subject ? <span id="contact-subject-error" className="field-error">{errors.subject}</span> : null}
          </label>
        </div>

        <label className={errors.message ? 'field-invalid' : undefined}>
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="Share your question, prayer request, or message."
            value={formState.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            required
          />
          {errors.message ? <span id="contact-message-error" className="field-error">{errors.message}</span> : null}
        </label>

        <div className="form-helper-block">
          <p className="form-helper">
            This form sends directly to the church inbox. If you prefer, you can still contact the church by email or WhatsApp.
          </p>
          <div className="form-inline-links">
            <a className="text-link" href={`mailto:${email}`}>
              Email the church directly
            </a>
            <a className="text-link" href={buildWhatsappHref('Hi Renewed Life, I would like to get in touch through the website contact page.')} target="_blank" rel="noreferrer">
              Reach us on WhatsApp
            </a>
          </div>
        </div>

        {submitError ? <p className="form-status form-status-error" role="alert">{submitError}</p> : null}

        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </>
  );
}
