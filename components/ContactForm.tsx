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

export default function ContactForm({ email }: Props) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField<Key extends keyof FormState>(field: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

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

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      <form className="visit-form" onSubmit={handleSubmit}>
        <div className="form-grid form-grid-two">
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formState.name}
              onChange={(event) => updateField('name', event.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formState.email}
              onChange={(event) => updateField('email', event.target.value)}
              required
            />
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
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              value={formState.subject}
              onChange={(event) => updateField('subject', event.target.value)}
              required
            />
          </label>
        </div>

        <label>
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="Share your question, prayer request, or message."
            value={formState.message}
            onChange={(event) => updateField('message', event.target.value)}
            required
          />
        </label>

        <p className="form-helper">
          This currently opens your email app with the completed message while live form routing is being finalized.
        </p>

        <button type="submit" className="button">Send message</button>
      </form>

      {submitted ? (
        <div className="submission-note">
          <p className="card-label">Message prepared</p>
          <h3>Thank you for reaching out.</h3>
          <p>
            If your email draft opened, send it and the team at Renewed Life will follow up as soon as possible.
          </p>
        </div>
      ) : null}
    </>
  );
}
