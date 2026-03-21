import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
  };

  return (
    <section id="work" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="mb-16">
          <span className="text-xs text-white/40 tracking-widest font-medium">02 — WORK</span>
        </div>

        {/* Projects List */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="w-full text-left py-8 px-6 border-b border-white/10 hover:bg-white/5 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs text-white/40 font-mono">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-xs text-white/40 tracking-widest">{project.brand}</span>
                    {project.videoUrl && (
                      <div className="flex items-center gap-1 text-white/60">
                        <Play size={12} />
                        <span className="text-xs">VIDEO</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-white/40 tracking-wider">{project.category}</span>
                  <span className="text-sm text-white/40 font-mono">{project.year}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-black border-2 border-white p-0">
          {selectedProject && (
            <div className="p-8 md:p-12">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Project Header */}
              <div className="mb-8">
                <div className="text-xs text-white/40 tracking-widest mb-4">{selectedProject.brand}</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <div className="flex gap-4 text-sm text-white/40">
                  <span>{selectedProject.category}</span>
                  <span>•</span>
                  <span>{selectedProject.year}</span>
                </div>
              </div>

              {/* Video */}
              {selectedProject.videoUrl && (
                <div className="mb-12">
                  <div className="video-container">
                    <iframe
                      src={getYouTubeEmbedUrl(selectedProject.videoUrl)}
                      title={selectedProject.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-8">
                <p className="text-lg text-white/80 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-xs text-white/40 tracking-widest mb-2">THE BRIEF</h4>
                  <p className="text-white/70">{selectedProject.brief}</p>
                </div>

                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-xs text-white/40 tracking-widest mb-2">THE IDEA</h4>
                  <p className="text-white/70">{selectedProject.idea}</p>
                </div>

                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-xs text-white/40 tracking-widest mb-2">AMPLIFICATION</h4>
                  <p className="text-white/70">{selectedProject.amplification}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs border border-white/20 text-white/60 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
