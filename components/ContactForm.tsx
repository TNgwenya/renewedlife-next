'use client';

import { useState } from 'react';

type Props = {
  email: string;
  endpoint: string;
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

export default function ContactForm({ email, endpoint }: Props) {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          subject:
            formState.subject || `Website enquiry from ${formState.name || 'Guest'}`,
          message: formState.message,
          _subject:
            formState.subject || `Website enquiry from ${formState.name || 'Guest'}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitted(true);
      setFormState(initialState);
    } catch {
      setError(
        'Your message could not be sent right now. Please try again, email us directly, or use WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form className="form-grid" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={formState.name}
            onChange={(event) => updateField('name', event.target.value)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={formState.email}
            onChange={(event) => updateField('email', event.target.value)}
            required
          />
        </label>

        <label>
          Phone
          <input
            value={formState.phone}
            onChange={(event) => updateField('phone', event.target.value)}
          />
        </label>

        <label>
          Subject
          <input
            value={formState.subject}
            onChange={(event) => updateField('subject', event.target.value)}
            required
          />
        </label>

        <label className="form-span-full">
          Message
          <textarea
            rows={6}
            value={formState.message}
            onChange={(event) => updateField('message', event.target.value)}
            required
          />
        </label>

        <p className="form-helper form-span-full">
          Your message will be sent directly to {email}, and someone from the church will follow up with care.
        </p>

        {error ? (
          <div className="submission-note submission-note-error form-span-full" role="alert">
            <p>{error}</p>
          </div>
        ) : null}

        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Sending...' : 'Send message'}
        </button>
      </form>

      {submitted ? (
        <div className="submission-note" aria-live="polite">
          <p className="card-label">Message sent</p>
          <h3>Thank you for reaching out.</h3>
          <p>Thank you for getting in touch. The team at Renewed Life will respond as soon as possible.</p>
        </div>
      ) : null}
    </>
  );
}