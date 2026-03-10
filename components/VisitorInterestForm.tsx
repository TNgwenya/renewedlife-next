'use client';

import { useState } from 'react';

type Props = {
  email: string;
  whatsappHref: string;
  endpoint: string;
};

type FormState = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  attendanceSize: string;
  firstTime: string;
  heardAbout: string;
  contactBack: string;
  prayerRequest: string;
};

const initialState: FormState = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  attendanceSize: '',
  firstTime: 'Yes',
  heardAbout: '',
  contactBack: 'Yes',
  prayerRequest: '',
};

export default function VisitorInterestForm({
  email,
  whatsappHref,
  endpoint,
}: Props) {
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
          firstName: formState.firstName,
          lastName: formState.lastName,
          mobile: formState.mobile,
          email: formState.email,
          attendanceSize: formState.attendanceSize,
          firstTime: formState.firstTime,
          heardAbout: formState.heardAbout,
          contactBack: formState.contactBack,
          prayerRequest: formState.prayerRequest || 'None provided',
          _subject: `Plan Your Visit enquiry - ${formState.firstName || 'Guest'} ${formState.lastName || ''}`.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Visitor form submission failed');
      }

      setSubmitted(true);
      setFormState(initialState);
    } catch {
      setError(
        'Your visitor enquiry could not be sent right now. Please try again or use WhatsApp for a quicker response.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form className="form-grid" onSubmit={handleSubmit}>
        <label>
          First name
          <input
            value={formState.firstName}
            onChange={(event) => updateField('firstName', event.target.value)}
            required
          />
        </label>

        <label>
          Last name
          <input
            value={formState.lastName}
            onChange={(event) => updateField('lastName', event.target.value)}
            required
          />
        </label>

        <label>
          Mobile number
          <input
            value={formState.mobile}
            onChange={(event) => updateField('mobile', event.target.value)}
            required
          />
        </label>

        <label>
          Email address
          <input
            type="email"
            value={formState.email}
            onChange={(event) => updateField('email', event.target.value)}
            required
          />
        </label>

        <label>
          Number of people attending
          <input
            value={formState.attendanceSize}
            onChange={(event) => updateField('attendanceSize', event.target.value)}
          />
        </label>

        <label>
          First time visiting?
          <select
            value={formState.firstTime}
            onChange={(event) => updateField('firstTime', event.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>

        <label>
          How did you hear about us?
          <input
            value={formState.heardAbout}
            onChange={(event) => updateField('heardAbout', event.target.value)}
          />
        </label>

        <label>
          Would you like someone to contact you?
          <select
            value={formState.contactBack}
            onChange={(event) => updateField('contactBack', event.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>

        <label className="form-span-full">
          Prayer request (optional)
          <textarea
            rows={5}
            value={formState.prayerRequest}
            onChange={(event) => updateField('prayerRequest', event.target.value)}
          />
        </label>

        <p className="form-helper form-span-full">
          Your visitor enquiry will be sent directly to {email}.
        </p>

        {error ? (
          <div className="submission-note submission-note-error form-span-full" role="alert">
            <p>{error}</p>
          </div>
        ) : null}

        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Sending...' : 'Send visitor enquiry'}
        </button>
      </form>

      {submitted ? (
        <div className="submission-note" aria-live="polite">
          <p className="card-label">Next step</p>
          <h3>Thank you for planning your visit.</h3>
          <p>We’re excited to welcome you to Renewed Life.</p>
          <a
            href={whatsappHref}
            className="button button-ghost"
            target="_blank"
            rel="noreferrer"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      ) : null}
    </>
  );
}