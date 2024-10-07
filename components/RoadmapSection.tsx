'use client';

import React from 'react';

interface RoadmapSectionProps {
  id?: string;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ id }) => {
  return (
    <section id={id} className="font-sans">
      <h2 className="text-2xl font-bold mb-4">Roadmap</h2>
      <p className="mb-4">Your roadmap content here.</p>
      {/* More content */}
    </section>
  );
};

export default RoadmapSection;