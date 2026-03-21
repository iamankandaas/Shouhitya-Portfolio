import React from 'react';
import { Badge } from './ui/badge';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse skill set honed through years of creating impactful content for leading brands
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-6 py-3 text-base font-medium border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
