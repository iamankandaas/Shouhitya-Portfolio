import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../mock/mockData';
import PhoneKeypad from './PhoneKeypad';

const MainMenu = () => {
  const navigate = useNavigate();

  const handleKeyPress = (key) => {
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
        navigate('/');
        break;
      case '#':
        // Already on menu
        break;
      default:
        break;
    }
  };

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Main Menu
          </h1>
          <p className="text-white/60 text-lg mb-8">
            Choose a brand to explore
          </p>
        </div>

        {/* Brand List */}
        <div className="mb-12 space-y-1">
          {portfolioData.brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => navigate(`/brand/${brand.id}`)}
              className="w-full text-left py-6 px-6 border-b border-white/10 hover:bg-white/5 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-light text-white/40">{brand.key}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-white/50 mt-1">{brand.description}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Keypad */}
        <div className="mb-8">
          <p className="text-center text-white/40 text-sm mb-6">Or dial directly:</p>
          <PhoneKeypad onKeyPress={handleKeyPress} />
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
