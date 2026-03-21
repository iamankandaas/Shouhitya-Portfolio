import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const cards = [
  "A dedicated writer and content strategist with 4+ years of experience, working with a plethora of national and international brands.",
  "I believe in INSIGHTFUL CREATION. The simplest of insights can house a goldmine of ideas.",
  "Starting off as a treatment note writer for ad films, I pivoted to advertising because I wanted to start at the source, solving real problems for brands.",
  "Now, with over a year's experience of managing cross-functional teams, I've spent my time working with design, strategy and production to deliver end-to-end creative solutions.",
  "This website mirrors my (or anyone's) creative process. The calm waters of the mind, gently disturbed by ripples of creative chaos as you explore with curiosity.",
  "Feel like building something together? Press # to connect with me.",
];

const CARD_HEIGHT = 220;
const CARD_GAP = 40;

const About = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsComplete, setCardsComplete] = useState(false);
  const sectionRef = useRef(null);

  // Refs for mutable state — avoids stale closures in the wheel handler
  const activeIndexRef = useRef(0);
  const cardsCompleteRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const cooldownTimer = useRef(null);

  // Keep refs in sync with state
  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);
  useEffect(() => { cardsCompleteRef.current = cardsComplete; }, [cardsComplete]);

  // Attach native wheel listener (passive: false required for preventDefault)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      const direction = e.deltaY > 0 ? 1 : -1;

      // Cards are done — allow page scroll, but re-lock if scrolling back up at section top
      if (cardsCompleteRef.current) {
        const rect = section.getBoundingClientRect();
        if (direction < 0 && rect.top >= -5) {
          e.preventDefault();
          cardsCompleteRef.current = false;
          setCardsComplete(false);
          setActiveIndex(cards.length - 1);
          activeIndexRef.current = cards.length - 1;
          isAnimatingRef.current = true;
          clearTimeout(cooldownTimer.current);
          cooldownTimer.current = setTimeout(() => { isAnimatingRef.current = false; }, 400);
        }
        return;
      }

      // Cards are active — lock page scroll
      e.preventDefault();

      // Every wheel event resets the cooldown — so momentum/hard scrolls
      // keep the lock active until the gesture truly stops
      if (isAnimatingRef.current) {
        clearTimeout(cooldownTimer.current);
        cooldownTimer.current = setTimeout(() => { isAnimatingRef.current = false; }, 400);
        return;
      }

      const current = activeIndexRef.current;
      const next = current + direction;

      // At the first card scrolling up — do nothing
      if (next < 0) return;

      // Past the last card scrolling down — unlock page scroll
      if (next >= cards.length) {
        cardsCompleteRef.current = true;
        setCardsComplete(true);
        return;
      }

      // Advance exactly one card, then lock until gesture ends
      isAnimatingRef.current = true;
      activeIndexRef.current = next;
      setActiveIndex(next);
      cooldownTimer.current = setTimeout(() => { isAnimatingRef.current = false; }, 400);
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      section.removeEventListener('wheel', handleWheel);
      clearTimeout(cooldownTimer.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen overflow-hidden bg-transparent flex flex-col"
      data-testid="about-section"
    >
      {/* Header */}
      <div className="pt-12 px-6 pb-2 flex-shrink-0">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/15 rounded-full mb-6 bg-black/40 backdrop-blur-md">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 12px currentColor' }}></div>
              <span className="text-xs text-white/70 tracking-[0.2em] font-light uppercase">Information Line</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 metallic-text tracking-tight">
              Who I Am
            </h1>
            <p className="text-white/35 text-xs tracking-[0.25em] uppercase font-light">My Story</p>
          </div>
          <button
            onClick={() => navigate('/', { state: { scrollToKeypad: true } })}
            className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-xs font-light tracking-wide"
            data-testid="about-back-button"
          >
            <ArrowLeft size={16} />
            Return to Main Menu
          </button>
        </div>
      </div>

      {/* Card viewport */}
      <div className="flex-1 flex items-center justify-center px-6 overflow-hidden">
        <div className="relative w-full max-w-3xl" style={{ height: `${CARD_HEIGHT}px` }}>

          {cards.map((text, i) => {
            const distance = Math.abs(i - activeIndex);
            const direction = i - activeIndex;
            const isActive = distance === 0;

            const yOffset = direction * (CARD_HEIGHT + CARD_GAP);
            const opacity = isActive ? 1 : Math.max(0.08, 1 - distance * 0.5);
            const blur = isActive ? 0 : Math.min(8, distance * 4);
            const scale = isActive ? 1 : Math.max(0.9, 1 - distance * 0.05);

            return (
              <div
                key={i}
                className="absolute inset-x-0"
                data-testid={`about-card-${i}`}
                style={{
                  height: `${CARD_HEIGHT}px`,
                  transform: `translateY(${yOffset}px) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex: isActive ? 10 : 10 - distance,
                  transition: 'transform 0.55s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.55s ease, filter 0.55s ease',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <div
                  className="h-full rounded-2xl px-14 md:px-20 flex items-center justify-center"
                  style={{
                    background: isActive
                      ? 'rgba(255,255,255,0.04)'
                      : 'rgba(255,255,255,0.015)',
                    border: `1px solid rgba(255,255,255,${isActive ? 0.08 : 0.03})`,
                    backdropFilter: isActive ? 'blur(12px)' : 'blur(4px)',
                    transition: 'background 0.55s ease, border-color 0.55s ease',
                  }}
                >
                  <p
                    className="text-center"
                    style={{
                      fontSize: 'clamp(1rem, 2.2vw, 1.65rem)',
                      fontWeight: 300,
                      color: isActive ? 'rgba(245,252,254,0.95)' : 'rgba(232,240,242,0.4)',
                      letterSpacing: '0.01em',
                      lineHeight: 1.8,
                      transition: 'color 0.55s ease',
                    }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer tagline */}
      <div className="flex-shrink-0 pb-12 text-center px-6">
        <p className="text-sm text-white/30 font-light tracking-[0.08em]">
          I <span className="text-white/55">sho</span> up for the truth. I <span className="text-white/55">sho</span> up for good storytelling.
        </p>
      </div>
    </section>
  );
};

export default About;
