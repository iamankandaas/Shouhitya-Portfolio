import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from '../mock/mockData';
import { ArrowLeft } from 'lucide-react';

const BrandView = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const [brand, setBrand] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const foundBrand = portfolioData.brands.find(b => b.id === parseInt(brandId));
    const brandProjects = portfolioData.projects.filter(p => p.brandId === parseInt(brandId));
    setBrand(foundBrand);
    setProjects(brandProjects);
  }, [brandId]);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  if (!brand) return null;

  return (
    <section className="min-h-screen bg-transparent py-20 px-6" data-testid="brand-view">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/15 rounded-full mb-8 bg-black/40 backdrop-blur-md">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 12px currentColor' }}></div>
            <span className="text-xs text-white/70 tracking-[0.2em] font-light uppercase">Connected to: {brand.name}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 metallic-text tracking-tight" data-testid="brand-title">
            {brand.name}
          </h1>
          <p className="text-lg text-white/50 font-light max-w-xl mx-auto mb-6">
            {brand.description}
          </p>
          <p className="text-white/30 text-xs tracking-[0.2em] uppercase font-light">
            {projects.length} recording{projects.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/', { state: { scrollToKeypad: true } })}
          className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors mb-16 text-xs font-light tracking-wide"
          data-testid="brand-back-button"
        >
          <ArrowLeft size={16} />
          Return to Main Menu
        </button>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group text-left"
              data-testid={`project-card-${project.id}`}
            >
              <div
                className="h-full flex flex-col rounded-2xl p-8 transition-all duration-300 group-hover:scale-[1.02]"
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
              >
                {/* Recording number */}
                <div className="text-white/25 text-[0.65rem] font-mono tracking-[0.15em] mb-5">
                  RECORDING {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white/90 mb-3 group-hover:text-white transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/45 font-light leading-relaxed mb-6 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Category & Year */}
                <div className="flex justify-between items-center text-[0.7rem] text-white/30 pt-5 border-t border-white/[0.06] tracking-wide">
                  <span className="uppercase">{project.category}</span>
                  <span className="font-mono">{project.year}</span>
                </div>

                {/* Video indicator */}
                {project.videoUrl && (
                  <div className="mt-4 pt-4 border-t border-white/[0.06]">
                    <span className="text-[0.65rem] text-white/35 flex items-center gap-2 tracking-[0.1em] uppercase">
                      <span className="text-green-400/60">&#9654;</span>
                      Video available
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandView;
