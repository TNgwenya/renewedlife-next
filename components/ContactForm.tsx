'use client';

import { useState } from 'react';

type Props = {
  email: string;
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

export default function ContactForm({ email }: Props) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [copyNotice, setCopyNotice] = useState('');

  function updateField<Key extends keyof FormState>(field: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
    setCopyNotice('');
  }

  async function copyEmailAddress() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyNotice('Church email copied.');
    } catch {
      setCopyNotice(`Email us directly at ${email}.`);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(formState);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    const subject = formState.subject || `Website enquiry from ${formState.name || 'Guest'}`;
    const body = [
      'Renewed Life website contact enquiry',
      '',
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Phone: ${formState.phone}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      formState.message,
    ].join('\n');

    setErrors({});
    setCopyNotice('');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      <form className="visit-form" onSubmit={handleSubmit} noValidate>
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
            This currently opens your email app with the completed message while live form routing is being finalized.
          </p>
          <a className="text-link" href={`mailto:${email}`}>
            Prefer to email us directly?
          </a>
        </div>

        <button type="submit" className="button">Send message</button>
      </form>

      {submitted ? (
        <div className="submission-note">
          <p className="card-label">Message prepared</p>
          <h3>Thank you for reaching out.</h3>
          <p>
            If your email draft opened, send it and the team at Renewed Life will follow up as soon as possible.
          </p>
          <div className="submission-actions">
            <a className="button button-secondary" href={`mailto:${email}`}>
              Open email again
            </a>
            <button type="button" className="button button-ghost" onClick={copyEmailAddress}>
              Copy church email
            </button>
          </div>
          {copyNotice ? <p className="submission-feedback">{copyNotice}</p> : null}
        </div>
      ) : null}
    </>
  );
}
