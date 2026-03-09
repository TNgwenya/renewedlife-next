'use client';

import { useState } from 'react';

type Props = {
  email: string;
  whatsappHref: string;
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

export default function VisitorInterestForm({ email, whatsappHref }: Props) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField<Key extends keyof FormState>(field: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Plan Your Visit enquiry - ${formState.firstName || 'Guest'} ${formState.lastName || ''}`.trim();
    const body = [
      'Renewed Life Plan Your Visit enquiry',
      '',
      `First name: ${formState.firstName}`,
      `Last name: ${formState.lastName}`,
      `Mobile number: ${formState.mobile}`,
      `Email: ${formState.email}`,
      `Number of people attending: ${formState.attendanceSize}`,
      `First time visiting: ${formState.firstTime}`,
      `How they heard about us: ${formState.heardAbout}`,
      `Would like someone to contact them: ${formState.contactBack}`,
      `Prayer request: ${formState.prayerRequest || 'None provided'}`,
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      <form className="visit-form" onSubmit={handleSubmit}>
        <div className="form-grid form-grid-two">
          <label>
            First name
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formState.firstName}
              onChange={(event) => updateField('firstName', event.target.value)}
              required
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formState.lastName}
              onChange={(event) => updateField('lastName', event.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-grid form-grid-two">
          <label>
            Mobile number
            <input
              type="tel"
              name="mobile"
              placeholder="+27"
              value={formState.mobile}
              onChange={(event) => updateField('mobile', event.target.value)}
              required
            />
          </label>
          <label>
            Email address
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
            Number of people attending
            <input
              type="text"
              name="attendanceSize"
              placeholder="For example: 1, 2, family of 4"
              value={formState.attendanceSize}
              onChange={(event) => updateField('attendanceSize', event.target.value)}
            />
          </label>
          <label>
            First time visiting?
            <select
              name="firstTime"
              value={formState.firstTime}
              onChange={(event) => updateField('firstTime', event.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
        </div>

        <div className="form-grid form-grid-two">
          <label>
            How did you hear about us?
            <input
              type="text"
              name="heardAbout"
              placeholder="Friend, social media, Google, flyer..."
              value={formState.heardAbout}
              onChange={(event) => updateField('heardAbout', event.target.value)}
            />
          </label>
          <label>
            Would you like someone to contact you?
            <select
              name="contactBack"
              value={formState.contactBack}
              onChange={(event) => updateField('contactBack', event.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
        </div>

        <label>
          Prayer request (optional)
          <textarea
            name="prayerRequest"
            rows={4}
            placeholder="Share anything you would like us to pray about."
            value={formState.prayerRequest}
            onChange={(event) => updateField('prayerRequest', event.target.value)}
          />
        </label>

        <p className="form-helper">
          This currently opens your email app with a completed visitor message while live form automation is finalized.
        </p>

        <button type="submit" className="button">Send visitor enquiry</button>
      </form>

      {submitted ? (
        <div className="submission-note">
          <p className="card-label">Next step</p>
          <h3>Thank you for planning your visit. We’re excited to welcome you to Renewed Life.</h3>
          <p>
            If your email draft opened, send it and our team will follow up. Need help right away?
          </p>
          <a href={whatsappHref} className="button button-ghost" target="_blank" rel="noreferrer">
            Chat with us on WhatsApp
          </a>
        </div>
      ) : null}
    </>
  );
}
