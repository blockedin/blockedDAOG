'use client';

import React from 'react';
import Image from 'next/image';

const HomeSection: React.FC = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden">
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

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="font-freckle text-6xl md:text-8xl font-extrabold mb-6 leading-tight text-[#dd4c31]">
              Chew with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dd4c31] to-[#ff6b4a]">
                the Crew
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-700">
            DAOG NFTs on $Sui are 1,000 dobermans with attitude. Grab one, get into the DAO, and unlock wallet tracking bots for alpha. 
            </p>
            <button className="bg-[#dd4c31] text-white font-bold py-3 px-12 rounded-full text-3xl hover:bg-[#c43e26] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              S O O N
            </button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#dd4c31] to-[#ff6b4a] rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/p3.png"
                alt="DAOG NFT Preview"
                width={500}
                height={500}
                className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;