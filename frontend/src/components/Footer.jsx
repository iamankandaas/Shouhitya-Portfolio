import React from 'react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Large Name */}
        <div className="mb-12">
          <h3 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-none mb-1" style={{ fontStyle: 'italic', letterSpacing: '-0.05em' }}>
            SOUHITYA SAR
          </h3>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            SHO
          </h3>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40">
            © {currentYear} Souhitya Sar. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href={`mailto:${data.email}`}
              className="text-sm text-white/60 hover:text-white transition-colors tracking-wider"
            >
              EMAIL
            </a>
            <a
              href={`tel:${data.phone}`}
              className="text-sm text-white/60 hover:text-white transition-colors tracking-wider"
            >
              PHONE
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-white/30 text-xs italic">
          <p>"Thank you for dialing into the SHO-verse!"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
