'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface NFTSectionProps {
  id?: string;
}

const NFTSection: React.FC<NFTSectionProps> = ({ id }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '10%',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '5%',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '15%',
        }
      }
    ]
  };

  return (
    <section id={id} className="relative bg-black text-white py-24">
      {/* Subtle white square grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-8 font-freckle text-center">DAOG NFT Collection</h2>
        <p className="text-xl mb-16 font-inter text-center max-w-3xl mx-auto">
          They&apos;re free, but you&apos;ll have to hustle to snag one—nothing&apos;s that easy!
        </p>

        <div className="relative">
          {/* Left fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-1/6 z-10 bg-gradient-to-r from-black to-transparent"></div>
          
          {/* Right fade effect */}
          <div className="absolute right-0 top-0 bottom-0 w-1/6 z-10 bg-gradient-to-l from-black to-transparent"></div>
          
          <Slider {...settings} className="nft-slider">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="px-4 py-8">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <Image
                    src={`/images/nft${index}.png`}
                    alt={`NFT ${index}`}
                    width={400}
                    height={400}
                    className="relative rounded-lg shadow-md transform transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NFTSection;