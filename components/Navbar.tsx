'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-black text-white">
      {/* Subtle white square grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="DAOG Logo"
                width={90}
                height={90}
                className="mr-2"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="navbar-item hover:bg-gray-900 px-3 py-2 rounded-md">Home</Link>
              <Link href="#nft" className="navbar-item hover:bg-gray-900 px-3 py-2 rounded-md">NFT</Link>
              <Link href="#roadmap" className="navbar-item hover:bg-gray-900 px-3 py-2 rounded-md">Roadmap</Link>
              <Link href="#faq" className="navbar-item hover:bg-gray-900 px-3 py-2 rounded-md">FAQ</Link>
              <Link href="#about" className="navbar-item hover:bg-gray-900 px-3 py-2 rounded-md">About</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden relative">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="font-freckle block hover:bg-gray-900 px-3 py-2 rounded-md">Home</Link>
            <Link href="#nft" className="font-freckle block hover:bg-gray-900 px-3 py-2 rounded-md">NFT</Link>
            <Link href="#roadmap" className="font-freckle block hover:bg-gray-900 px-3 py-2 rounded-md">Roadmap</Link>
            <Link href="#faq" className="font-freckle block hover:bg-gray-900 px-3 py-2 rounded-md">FAQ</Link>
            <Link href="#about" className="font-freckle block hover:bg-gray-900 px-3 py-2 rounded-md">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;