"use client";

import { useState } from 'react';
import { company } from '@/data/site';

const initialState = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`New enquiry from ${form.name || 'Website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="contact-form-card">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Full Name
            <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" required />
          </label>
          <label>
            Phone Number
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your phone number" required />
          </label>
          <label>
            Email Address
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email address" required />
          </label>
          <label className="full-width">
            Your Message
            <textarea name="message" rows="6" value={form.message} onChange={handleChange} placeholder="Tell us about your requirement" required />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit" className="button button-primary">Send Email Enquiry</button>
          <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="button button-secondary">
            Chat on WhatsApp
          </a>
        </div>
        {submitted ? <p className="success-text">Your mail app should open with a pre-filled enquiry. You can also continue on WhatsApp.</p> : null}
      </form>
    </div>
  );
}
