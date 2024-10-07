import React from 'react';
import Image from 'next/image';

interface RoadmapSectionProps {
  id?: string;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative bg-white text-black overflow-hidden py-24">
      {/* Background image with 20% opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hbg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-10"
        />
      </div>

      {/* Subtle black square grid overlay */}
      <div className="absolute inset-0 opacity-5 z-10" style={{
        backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(to right, #000000 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-20 container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#dd4c31] mb-16">Roadmap</h2>
        <div className="relative">
          {/* Vertical line (hidden on mobile) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#dd4c31] hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-0">
            {['Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'].map((quarter, index) => (
              <div key={index} className={`md:flex md:items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#dd4c31] mb-4">{quarter}</h3>
                    <ul className="space-y-2">
                      {index === 0 ? (
                        <>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>Launch DAOG NFT collection</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>Community building and engagement</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>Discord launch + KOL tracking via twitter API</span>
                          </li>
                        </>
                      ) : index === 1 ? (
                        <>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>R2E mining game</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>Launch governance token</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>Implement staking mechanism</span>
                          </li>
                        </>
                      ) : index === 2 ? (
                        <>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>Free merch for holders</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>Wallet tracking model</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>NFT breeding</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>TBA </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>TBA</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#dd4c31] mr-2">•</span>
                            <span>TBA</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                {/* Timeline dot (hidden on mobile) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#dd4c31] rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;