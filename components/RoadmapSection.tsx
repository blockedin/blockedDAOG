'use client';

import React from 'react';

interface RoadmapSectionProps {
  id?: string;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ id }) => {
  const quarters = [
    {
      id: 'Q1',
      title: 'Q4 2024',
      content: [
        'Launch of DAOG NFT collection',
        'Community expansion and partnerships',
        'Wallet tracking bots for alpha access'
      ]
    },
    {
      id: 'Q2',
      title: 'Q1 2025',
      content: [
        'AI trend prediction bot based on X data (kol accounts)',
        'Development of advanced governance mechanisms',
        'Implementation of decentralized voting system'
      ]
    },
    {
      id: 'Q3',
      title: 'Q2 2025',
      content: [
        'Merch for OG',
        'Surpise protocol',
        'Launch of DAOG incubator program'
      ]
    },
    {
      id: 'Q4',
      title: 'Q3 2025',
      content: [
        'TBA',
        'TBA',
        'TBA'
      ]
    },
  ];

  return (
    <section id={id} className="relative bg-[#dd4c31] text-white py-24">
      {/* Subtle white square grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-16 font-freckle text-center">Roadmap</h2>

        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {quarters.map((quarter, index) => (
              <div key={quarter.id} className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-5 w-6 h-6 rounded-full bg-white shadow">
                
                </div>

                <div className="bg-white text-[#dd4c31] p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-2 font-freckle">{quarter.title}</h3>
                  <ul className="list-disc pl-6">
                    {quarter.content.map((item, index) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;