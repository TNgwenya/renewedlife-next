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

type FormErrors = Partial<Record<keyof FormState, string>>;

function validateForm(formState: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!formState.firstName.trim()) {
    errors.firstName = 'Please share your first name.';
  }

  if (!formState.lastName.trim()) {
    errors.lastName = 'Please share your last name.';
  }

  if (!formState.mobile.trim()) {
    errors.mobile = 'Please share a mobile number.';
  }

  if (!formState.email.trim()) {
    errors.email = 'Please share your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
    errors.email = 'Enter a valid email address.';
  }

  return errors;
}

export default function VisitorInterestForm({ email, whatsappHref }: Props) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function updateField<Key extends keyof FormState>(field: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(formState);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

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

    setErrors({});
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      <form className="visit-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid form-grid-two">
          <label className={errors.firstName ? 'field-invalid' : undefined}>
            First name
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formState.firstName}
              onChange={(event) => updateField('firstName', event.target.value)}
              autoComplete="given-name"
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? 'visit-first-name-error' : undefined}
              required
            />
            {errors.firstName ? <span id="visit-first-name-error" className="field-error">{errors.firstName}</span> : null}
          </label>
          <label className={errors.lastName ? 'field-invalid' : undefined}>
            Last name
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formState.lastName}
              onChange={(event) => updateField('lastName', event.target.value)}
              autoComplete="family-name"
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? 'visit-last-name-error' : undefined}
              required
            />
            {errors.lastName ? <span id="visit-last-name-error" className="field-error">{errors.lastName}</span> : null}
          </label>
        </div>

        <div className="form-grid form-grid-two">
          <label className={errors.mobile ? 'field-invalid' : undefined}>
            Mobile number
            <input
              type="tel"
              name="mobile"
              placeholder="+27"
              value={formState.mobile}
              onChange={(event) => updateField('mobile', event.target.value)}
              autoComplete="tel"
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? 'visit-mobile-error' : undefined}
              required
            />
            {errors.mobile ? <span id="visit-mobile-error" className="field-error">{errors.mobile}</span> : null}
          </label>
          <label className={errors.email ? 'field-invalid' : undefined}>
            Email address
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formState.email}
              onChange={(event) => updateField('email', event.target.value)}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'visit-email-error' : undefined}
              required
            />
            {errors.email ? <span id="visit-email-error" className="field-error">{errors.email}</span> : null}
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

        <div className="form-helper-block">
          <p className="form-helper">
            This currently opens your email app with a completed visitor message while live form automation is finalized.
          </p>
          <div className="form-inline-links">
            <a className="text-link" href={`mailto:${email}`}>
              Email the team directly
            </a>
            <a className="text-link" href={whatsappHref} target="_blank" rel="noreferrer">
              Or reach us on WhatsApp
            </a>
          </div>
        </div>

        <button type="submit" className="button">Send visitor enquiry</button>
      </form>

      {submitted ? (
        <div className="submission-note">
          <p className="card-label">Next step</p>
          <h3>Thank you for planning your visit. We’re excited to welcome you to Renewed Life.</h3>
          <p>
            If your email draft opened, send it and our team will follow up. Need help right away?
          </p>
          <div className="submission-actions">
            <a href={`mailto:${email}`} className="button button-secondary">
              Open email again
            </a>
            <a href={whatsappHref} className="button button-ghost" target="_blank" rel="noreferrer">
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
