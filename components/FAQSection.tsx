'use client';

import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-red-800">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold font-poppins">{question}</span>
        <span className="text-2xl font-freckle">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="font-inter">{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FAQSectionProps {
  id?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ id }) => {
  const faqs = [
    {
      question: "What is DAOG NFT collection?",
      answer: "DAOG is an exclusive NFT collection featuring unique digital art pieces of adorable dogs with attitude. Each NFT is a one-of-a-kind collectible on the SUI blockchain."
    },
    {
      question: "How can I purchase a DAOG NFT?",
      answer: "DAOG NFTs can be purchased on the secondary market on authorized NFT marketplaces. otherwise, you can get whitelisted for the mint."
    },
    {
      question: "What benefits do DAOG NFT holders receive?",
      answer: "DAOG NFT holders gain access to exclusive features of the DAOG DAO, early access to new releases, voting rights on future collections, and potential rewards as outlined in our roadmap."
    },
    {
      question: "Is there a limit to the number of DAOG NFTs?",
      answer: "Yes, the DAOG NFT collection is limited to ensure exclusivity and value for our community. The exact number of NFTs is 1,000."
    }
  ];

  return (
    <section id={id} className="relative bg-black text-white py-24">
      {/* Subtle red square grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(#dd4c31 1px, transparent 1px), linear-gradient(to right, #dd4c31 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12 font-freckle text-center">FAQ</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;