"use client";

import { useState } from 'react';
import { company } from '@/data/site';
import { TRANSLATIONS } from '@/data/i18n';

const initialState = {
  name: '',
  phone: '',
  email: '',
  message: '',
  service: '',
};

const serviceOptions = [
  'Personal Counselling',
  'Career Assessment',
  'Workshops & Seminars',
  'Stream Selection Guidance',
  'Degree Selection Guidance',
  'Working Professionals Guidance',
  'Career Certification',
  'General Enquiry',
];

export default function ContactForm({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const fieldLabels = {
    en: { name: 'Full Name *', phone: 'Phone Number *', email: 'Email Address *', service: 'Interested Service', message: 'Your Message *', namePh: 'Your full name', phonePh: '10-digit mobile number', emailPh: 'Your email address', messagePh: 'Tell us about your requirement, e.g., student in class 10 confused about stream, budget, timeline...', serviceDefault: 'Select a service (optional)', hintPhone: 'Indian format: 10 digits starting with 6-9', hintMessage: 'Minimum 10 characters, be as specific as possible', note: 'By submitting, you agree to be contacted by GCDA via phone, email, or WhatsApp. We respond within 1 business day.', submit: 'Send Email Enquiry', whatsapp: 'Chat on WhatsApp', sending: 'Sending...', thankTitle: 'Thank you! Enquiry ready.', thankDesc: 'Your email app should open with a pre-filled enquiry. If it didn’t, use the buttons below.', openEmail: 'Open Email Again', continueWa: 'Continue on WhatsApp', another: 'Send another enquiry' },
    hi: { name: 'पूरा नाम *', phone: 'फोन नंबर *', email: 'ईमेल पता *', service: 'इच्छुक सेवा', message: 'आपका संदेश *', namePh: 'आपका पूरा नाम', phonePh: '10 अंकों का मोबाइल नंबर', emailPh: 'आपका ईमेल पता', messagePh: 'अपनी आवश्यकता बताएं, जैसे 10वीं कक्षा का छात्र स्ट्रीम को लेकर भ्रमित है...', serviceDefault: 'सेवा चुनें (वैकल्पिक)', hintPhone: 'भारतीय प्रारूप: 6-9 से शुरू होने वाले 10 अंक', hintMessage: 'न्यूनतम 10 अक्षर, जितना संभव हो उतना विशिष्ट रहें', note: 'सबमिट करके, आप फोन, ईमेल या WhatsApp के माध्यम से GCDA द्वारा संपर्क किए जाने के लिए सहमत होते हैं।', submit: 'ईमेल पूछताछ भेजें', whatsapp: 'WhatsApp पर चैट करें', sending: 'भेजा जा रहा है...', thankTitle: 'धन्यवाद! पूछताछ तैयार है।', thankDesc: 'आपका ईमेल ऐप प्री-फिल्ड पूछताछ के साथ खुलना चाहिए। यदि नहीं खुला, तो नीचे दिए बटन का उपयोग करें।', openEmail: 'ईमेल फिर से खोलें', continueWa: 'WhatsApp पर जारी रखें', another: 'एक और पूछताछ भेजें' },
  };

  const labels = fieldLabels[lang] || fieldLabels.en;
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name': {
        const v = value.trim();
        if (!v) return 'Name is required';
        if (v.length < 2) return 'Name must be at least 2 characters';
        if (v.length > 80) return 'Name must be under 80 characters';
        if (!/^[A-Za-z\s.'-]+$/.test(v) && lang === 'en') {
          // Allow unicode for other langs
          if (!/^[\p{L}\s.'-]+$/u.test(v)) return 'Name contains invalid characters';
        }
        return '';
      }
      case 'phone': {
        const v = value.trim();
        if (!v) return 'Phone is required';
        const digits = v.replace(/\D/g, '');
        // Indian numbers: 10 digits, or 12 with 91 prefix
        if (digits.length < 10) return 'Enter a valid 10-digit phone number';
        if (digits.length > 15) return 'Phone number too long';
        // Get last 10 digits
        const last10 = digits.slice(-10);
        if (!/^[6-9]\d{9}$/.test(last10)) {
          // For non-IN, allow but warn? Accept if 10-15 digits
          if (digits.length < 10 || digits.length > 15) return 'Enter a valid phone number';
        }
        return '';
      }
      case 'email': {
        const v = value.trim();
        if (!v) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address';
        return '';
      }
      case 'message': {
        const v = value.trim();
        if (!v) return 'Message is required';
        if (v.length < 10) return 'Message must be at least 10 characters';
        if (v.length > 1000) return 'Message must be under 1000 characters';
        return '';
      }
      default:
        return '';
    }
  };

  const validateAll = (data = form) => {
    const newErrors = {};
    ['name', 'phone', 'email', 'message'].forEach((field) => {
      const err = validateField(field, data[field] || '');
      if (err) newErrors[field] = err;
    });
    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
    if (submitted) setSubmitted(false);
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const allTouched = { name: true, phone: true, email: true, message: true };
    setTouched(allTouched);
    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).some((k) => validationErrors[k])) {
      const firstErrorField = Object.keys(validationErrors).find((k) => validationErrors[k]);
      if (firstErrorField) {
        document.querySelector(`[name="${firstErrorField}"]`)?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise((r) => setTimeout(r, 800));
      // Try to POST to /api/contact if exists (mock)
      // Build mailto and whatsapp links
      const subject = encodeURIComponent(`New enquiry from ${form.name || 'Website visitor'}${form.service ? ` – ${form.service}` : ''}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service || 'General'}\n\nMessage:\n${form.message}\n\nLang: ${lang}`
      );
      const mailto = `mailto:${company.email}?subject=${subject}&body=${body}`;
      const whatsappMsg = encodeURIComponent(
        `Hello GCDA! I'm ${form.name}. Phone: ${form.phone}. Email: ${form.email}. Service: ${form.service || 'General'}. Message: ${form.message}`
      );
      const whatsappLink = `https://api.whatsapp.com/send?phone=${company.phoneRaw}&text=${whatsappMsg}`;

      // Store for success actions
      window._lastEnquiry = { mailto, whatsappLink };

      // Open mail client attempt
      window.location.href = mailto;
      setSubmitted(true);
      setForm(initialState);
      setTouched({});
      setErrors({});
    } catch (e) {
      setErrors((prev) => ({ ...prev, submit: 'Something went wrong. Please try again or contact via WhatsApp.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappPrefill = (() => {
    if (!form.name && !form.message) return company.whatsappLink;
    const msg = encodeURIComponent(
      `Hello GCDA! ${form.name ? `I'm ${form.name}.` : ''} ${form.service ? `Interested in ${form.service}.` : ''} ${form.message ? `Message: ${form.message}` : ''}`.trim()
    );
    return `https://api.whatsapp.com/send?phone=${company.phoneRaw}&text=${msg}`;
  })();

  const charCount = form.message.length;

  return (
    <div className="contact-form-card">
      {submitted ? (
        <div className="success-panel">
          <div className="success-icon" aria-hidden="true">✅</div>
          <h3>{labels.thankTitle}</h3>
          <p>{labels.thankDesc}</p>
          <div className="form-actions" style={{ marginTop: '1rem' }}>
            <a
              href={typeof window !== 'undefined' && window._lastEnquiry ? window._lastEnquiry.mailto : `mailto:${company.email}`}
              className="button button-primary"
              onClick={(e) => {
                e.preventDefault();
                const link = window._lastEnquiry?.mailto;
                if (link) window.location.href = link;
              }}
            >
              {labels.openEmail}
            </a>
            <a href={typeof window !== 'undefined' && window._lastEnquiry ? window._lastEnquiry.whatsappLink : whatsappPrefill} target="_blank" rel="noreferrer" className="button button-secondary">
              {labels.continueWa}
            </a>
          </div>
          <button className="text-link" style={{ marginTop: '1rem', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setSubmitted(false)}>{labels.another}</button>
        </div>
      ) : (
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <label className="form-field">
            <span className="field-label">{labels.name}</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={labels.namePh}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'err-name' : undefined}
              className={errors.name ? 'input-error' : ''}
              autoComplete="name"
            />
            {errors.name ? <span className="field-error" id="err-name">{errors.name}</span> : null}
          </label>
          <label className="form-field">
            <span className="field-label">{labels.phone}</span>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={labels.phonePh}
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'err-phone' : undefined}
              className={errors.phone ? 'input-error' : ''}
              autoComplete="tel"
              inputMode="numeric"
            />
            {errors.phone ? <span className="field-error" id="err-phone">{errors.phone}</span> : <span className="field-hint">{labels.hintPhone}</span>}
          </label>
          <label className="form-field">
            <span className="field-label">{labels.email}</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={labels.emailPh}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'err-email' : undefined}
              className={errors.email ? 'input-error' : ''}
              autoComplete="email"
            />
            {errors.email ? <span className="field-error" id="err-email">{errors.email}</span> : null}
          </label>
          <label className="form-field">
            <span className="field-label">{labels.service}</span>
            <select name="service" value={form.service} onChange={handleChange} className="select-input">
              <option value="">{labels.serviceDefault}</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="form-field full-width">
            <span className="field-label">{labels.message}</span>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={labels.messagePh}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'err-message' : 'char-count'}
              className={errors.message ? 'input-error' : ''}
            />
            <div className="field-meta">
              {errors.message ? <span className="field-error" id="err-message">{errors.message}</span> : <span className="field-hint">{labels.hintMessage}</span>}
              <span className="char-count" id="char-count">{charCount}/1000</span>
            </div>
          </label>
        </div>
        {errors.submit ? <p className="field-error" style={{ marginTop: '0.8rem' }}>{errors.submit}</p> : null}
        <div className="form-actions">
          <button type="submit" className="button button-primary" disabled={isSubmitting}>
            {isSubmitting ? labels.sending : labels.submit}
          </button>
          <a href={whatsappPrefill} target="_blank" rel="noreferrer" className="button button-secondary">
            {labels.whatsapp}
          </a>
        </div>
        <p className="form-note">{labels.note}</p>
      </form>
      )}
    </div>
  );
}
