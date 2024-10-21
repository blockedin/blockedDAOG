'use client';

import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

interface AboutSectionProps {
  id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* GIF Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dope2.gif"
          alt="Background GIF"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-8 font-freckle">About DAOG</h2>
        <p>BlockedIn&apos;s mission is to revolutionize the way we connect and collaborate in the digital age.</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-12">
          <a href="https://x.com/Daog_sui" target="_blank" rel="noopener noreferrer" className="text-[#dd4c31] hover:text-[#ff6b4a] transition-colors duration-300">
            <FaTwitter size={60} className="filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))' }} />
          </a>
          <a href="https://discord.gg/vWdtYkTU" target="_blank" rel="noopener noreferrer" className="text-[#dd4c31] hover:text-[#ff6b4a] transition-colors duration-300">
            <FaDiscord size={60} className="filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;