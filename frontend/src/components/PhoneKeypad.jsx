import React from 'react';

const PhoneKeypad = ({ onKeyPress, disabled = false }) => {
  const keys = [
    { number: '1', text: 'Campus' },
    { number: '2', text: 'Triumph' },
    { number: '3', text: 'Audi' },
    { number: '4', text: 'Havmor' },
    { number: '5', text: 'Castrol' },
    { number: '6', text: 'Birla' },
    { number: '7', text: '' },
    { number: '8', text: '' },
    { number: '9', text: '' },
    { number: '*', text: 'About' },
    { number: '0', text: 'Menu' },
    { number: '#', text: 'Contact' }
  ];

  return (
    <div className="phone-keypad">
      <div className="keypad-grid">
        {keys.map((key) => (
          <button
            key={key.number}
            onClick={() => onKeyPress(key.number)}
            className="keypad-button"
            disabled={disabled || key.number === '7' || key.number === '8' || key.number === '9'}
          >
            <span className="key-number">{key.number}</span>
            {key.text && <span className="key-text">{key.text}</span>}
          </button>
        ))}
      </div>

      <style jsx>{`
        .phone-keypad {
          max-width: 420px;
          margin: 0 auto;
        }

        .keypad-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding: 24px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .keypad-button {
          aspect-ratio: 1;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          font-size: 2rem;
          font-weight: 300;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 20px;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .keypad-button::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .keypad-button:hover:not(:disabled)::before {
          opacity: 1;
        }

        .keypad-button:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px);
          box-shadow: 
            0 8px 30px rgba(255, 255, 255, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .keypad-button:active:not(:disabled) {
          transform: scale(0.95) translateY(0);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
        }

        .keypad-button:disabled {
          opacity: 0.15;
          cursor: not-allowed;
          border-color: rgba(255, 255, 255, 0.05);
        }

        .key-number {
          font-size: 2rem;
          font-weight: 300;
          line-height: 1;
          margin-bottom: 4px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .key-text {
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.7;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 640px) {
          .keypad-grid {
            gap: 14px;
            padding: 20px;
          }

          .keypad-button {
            padding: 16px;
          }

          .key-number {
            font-size: 1.75rem;
          }

          .key-text {
            font-size: 0.55rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PhoneKeypad;
