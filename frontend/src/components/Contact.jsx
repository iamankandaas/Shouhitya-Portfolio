import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../mock/mockData';
import { ArrowLeft, Mail, Phone, Send, Check, Loader2 } from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const navigate = useNavigate();
  const data = portfolioData.personal;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-white/[0.04] border border-white/10 rounded-lg px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:outline-none focus:border-white/25 focus:bg-white/[0.06] transition-all text-sm font-light tracking-wide';

  return (
    <section className="min-h-screen bg-transparent py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/15 rounded-full mb-10 bg-black/40 backdrop-blur-md">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 12px currentColor' }}></div>
            <span className="text-xs text-white/70 tracking-[0.2em] font-light uppercase">Contact Services</span>
          </div>

          <p className="text-white/60 text-base mb-8 font-light italic">
            "Your call is being transferred. Please hold..."
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 metallic-text tracking-tight">
            Contact
          </h1>
          <p className="text-white/50 text-lg font-light">
            If you've made it this far, maybe we're thinking the same thing.
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/', { state: { scrollToKeypad: true } })}
          className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-10 md:mb-20 text-sm font-light tracking-wide"
          data-testid="contact-back-button"
        >
          <ArrowLeft size={18} />
          Return to Main Menu
        </button>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Main Message */}
          <div className="text-center">
            <p className="text-xl sm:text-2xl md:text-4xl text-white/90 leading-relaxed font-light mb-12">
              If you would like to discuss a project, creative collaboration, or have any questions about the work you've reviewed today, I'd love to hear from you.
            </p>
            <p className="text-lg text-white/60 leading-relaxed font-light">
              All inquiries are reviewed personally and responded to within one business day.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5" data-testid="contact-form">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
                data-testid="contact-name-input"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
                data-testid="contact-email-input"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClass} resize-none`}
                data-testid="contact-message-input"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg bg-white/[0.08] border border-white/15 text-white/80 hover:bg-white/[0.12] hover:text-white transition-all text-sm font-light tracking-wider uppercase disabled:opacity-40"
              data-testid="contact-submit-button"
            >
              {status === 'sending' ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : status === 'sent' ? (
                <><Check size={16} /> Message Sent</>
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </button>
            {status === 'error' && (
              <p className="text-red-400/80 text-sm text-center font-light" data-testid="contact-error">
                Something went wrong. Please try again.
              </p>
            )}
            {status === 'sent' && (
              <p className="text-green-400/80 text-sm text-center font-light" data-testid="contact-success">
                Thank you. I'll get back to you soon.
              </p>
            )}
          </form>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-8">
            {/* Email */}
            <div className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="p-5 bg-white/5 border border-white/10 rounded-full group-hover:bg-white/10 transition-all">
                  <Mail className="text-white/70" size={32} />
                </div>
              </div>
              <div className="text-xs text-white/40 tracking-[0.15em] uppercase mb-4 font-light">Email</div>
              <a
                href={`mailto:${data.email}`}
                className="text-xl text-white/90 hover:text-white transition-colors block mb-3 break-all"
                data-testid="contact-email-link"
              >
                {data.email}
              </a>
              <p className="text-sm text-white/40 font-light">Within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="p-5 bg-white/5 border border-white/10 rounded-full group-hover:bg-white/10 transition-all">
                  <Phone className="text-white/70" size={32} />
                </div>
              </div>
              <div className="text-xs text-white/40 tracking-[0.15em] uppercase mb-4 font-light">Phone</div>
              <a
                href={`tel:${data.phone}`}
                className="text-xl text-white/90 hover:text-white transition-colors block mb-3"
                data-testid="contact-phone-link"
              >
                {data.phone}
              </a>
              <p className="text-sm text-white/40 font-light">Mon - Fri, 9 AM - 6 PM</p>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center pt-12 border-t border-white/10">
            <p className="text-white/60 text-lg mb-2 font-light">
              Thank you for your interest.
            </p>
            <p className="text-white/40 text-base font-light">
              Looking forward to connecting soon.
            </p>
          </div>
        </div>

        {/* Footer pun */}
        <div className="mt-24 text-center">
          <p className="text-white/30 text-sm font-light italic">
            This line is never busy. Just call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
