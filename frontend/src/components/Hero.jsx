import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PhoneKeypad from './PhoneKeypad';
import { portfolioData } from '../mock/mockData';

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);
  const keypadRef = useRef(null);

  // Scroll to keypad if navigated back from another page
  useEffect(() => {
    if (location.state?.scrollToKeypad && keypadRef.current) {
      setTimeout(() => {
        keypadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [location]);

  const messages = [
    "Welcome to the SHO-verse, where we 'SHO' up for the good of storytelling",
    "We don't put ideas on hold",
    "You've reached the department for creative thinking",
    "All our lines are busy. Thinking.",
    "We apologize for the wait. Good ideas take longer."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  const handleKeyPress = (key) => {
    setIsConnecting(true);
    
    setTimeout(() => {
      setIsConnecting(false);
      
      switch (key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          navigate(`/brand/${key}`);
          break;
        case '0':
          navigate('/', { state: { scrollToKeypad: true } });
          break;
        case '*':
          navigate('/about');
          break;
        case '#':
          navigate('/contact');
          break;
        default:
          break;
      }
    }, 800);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent pt-20 px-6 relative">      
      <div className="w-full mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          {/* Name Section */}
          <div className="mb-16">
            <p className="text-white/35 text-[0.65rem] tracking-[0.4em] uppercase font-light mb-10">on the line</p>
            
            <div className="leading-none" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif' }}>
              <p 
                className="text-white/80 uppercase"
                style={{ 
                  fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                  fontWeight: '300',
                  letterSpacing: '0.55em',
                }}
              >
                Souhitya
              </p>
              <h1
                className="my-6"
                style={{
                  fontSize: 'clamp(5.5rem, 16vw, 14rem)',
                  fontWeight: '800',
                  letterSpacing: '0.12em',
                  color: 'transparent',
                  WebkitTextStroke: '2.5px rgba(255,255,255,0.75)',
                  lineHeight: '0.85',
                  filter: 'drop-shadow(0 0 80px rgba(160,220,210,0.12)) drop-shadow(0 0 30px rgba(180,230,220,0.08))',
                }}
              >
                SHO
              </h1>
              <p 
                className="text-white/80 uppercase"
                style={{ 
                  fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                  fontWeight: '300',
                  letterSpacing: '0.55em',
                }}
              >
                Sar
              </p>
            </div>

            <p className="text-white/35 text-[0.6rem] tracking-[0.3em] uppercase font-light mt-8 mb-6">
              Creative Lead / Content Strategist
            </p>

            <div className="inline-flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 8px rgba(74,222,128,0.5)' }}></div>
              <span className="text-white/40 text-[0.65rem] font-mono tracking-[0.15em]">
                {isConnecting ? 'connecting...' : 'connected'}
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-20">
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              I write copy. The rest the copy does for itself.
            </p>
          </div>

          {/* Continuous Scrolling Ticker */}
          <div className="ticker-wrap mb-20">
            <div className="ticker">
              <span className="ticker-item">Welcome to the 'SHO'verse, where we 'SHO' up for good storytelling // You've reached the department of better thinking // We don't put ideas on hold // All our lines are busy. Thinking // We apologise for the wait. Good ideas take longer //</span>
            </div>
          </div>

          {/* Phone Keypad */}
          <div className="mb-16" ref={keypadRef}>
            <p className="text-sm tracking-[0.15em] text-white/50 font-light mb-2">
              Thank you for calling. Let's connect you to some interesting work.
            </p>
            <p className="text-sm tracking-[0.25em] text-white/60 uppercase font-light mb-8">
              Dial away
            </p>
            <PhoneKeypad onKeyPress={handleKeyPress} disabled={isConnecting} />
            <div className="mt-10 max-w-lg mx-auto text-[0.7rem] font-light tracking-[0.08em] text-white/30">
              <div className="grid grid-cols-2 gap-x-10 gap-y-1">
                <p>Press <span className="font-mono text-white/50">1</span> for <span className="text-white/45">CAMPUS SHOES</span></p>
                <p>Press <span className="font-mono text-white/50">2</span> for <span className="text-white/45">TRIUMPH MOTORCYCLES</span></p>
                <p>Press <span className="font-mono text-white/50">3</span> for <span className="text-white/45">AUDI</span></p>
                <p>Press <span className="font-mono text-white/50">4</span> for <span className="text-white/45">HAVMOR ICE CREAMS</span></p>
                <p>Press <span className="font-mono text-white/50">5</span> for <span className="text-white/45">CASTROL</span></p>
                <p>Press <span className="font-mono text-white/50">6</span> for <span className="text-white/45">BIRLA ESTATES</span></p>
              </div>
              <p className="text-center text-white/50 text-[0.7rem] tracking-[0.2em] italic mt-3 pt-3 border-t border-white/6 mb-2">Like what you see?</p>
              <div className="flex justify-center gap-10">
                <p>Press <span className="font-mono text-white/50">*</span> for <span className="text-white/45">ABOUT</span></p>
                <p>Press <span className="font-mono text-white/50">#</span> for <span className="text-white/45">CONTACT INFORMATION</span></p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-white/30 text-sm font-light italic">
            <p>Providing creative support since 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
