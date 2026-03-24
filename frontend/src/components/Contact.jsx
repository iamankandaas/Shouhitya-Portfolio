import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../mock/mockData';
import { ArrowLeft, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  const data = portfolioData.personal;

  return (
    <section className="min-h-screen bg-transparent py-20 px-6" data-testid="contact-page">
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
            <p
              className="text-white/90 font-medium"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', letterSpacing: '0.01em' }}
            >
              If anything here sparks a conversation (or a collaboration),
            </p>
            <p
              className="text-white mt-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 600, letterSpacing: '-0.02em' }}
            >
              Let's talk?
            </p>
          </div>

          {/* Contact Methods — large clickable cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <a
              href={`mailto:${data.email}`}
              className="group block rounded-2xl p-10 text-center transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              }}
              data-testid="contact-email-link"
            >
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-white/[0.04] border border-white/[0.08] rounded-full group-hover:bg-white/[0.08] group-hover:border-white/15 transition-all">
                  <Mail className="text-white/60 group-hover:text-white/90 transition-colors" size={36} strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-[0.65rem] text-white/30 tracking-[0.2em] uppercase mb-4">Email</div>
              <span className="text-lg md:text-xl text-white/85 group-hover:text-white transition-colors block mb-3 break-all">
                {data.email}
              </span>
              <p className="text-sm text-white/30 font-light">Within 24 hours</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${data.phone}`}
              className="group block rounded-2xl p-10 text-center transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              }}
              data-testid="contact-phone-link"
            >
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-white/[0.04] border border-white/[0.08] rounded-full group-hover:bg-white/[0.08] group-hover:border-white/15 transition-all">
                  <Phone className="text-white/60 group-hover:text-white/90 transition-colors" size={36} strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-[0.65rem] text-white/30 tracking-[0.2em] uppercase mb-4">Phone</div>
              <span className="text-lg md:text-xl text-white/85 group-hover:text-white transition-colors block mb-3">
                {data.phone}
              </span>
              <p className="text-sm text-white/30 font-light">Mon - Fri, 9 AM - 6 PM</p>
            </a>
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
