'use client';

import React from 'react';
import styles from './RoadmapSection.module.css';

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
        'Initial governance framework implementation'
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
    <section id={id}>
      {quarters.map((quarter) => (
        <div key={quarter.id} className={styles.quarterContainer}>
          <h3 className={styles.quarterId}>{quarter.id}</h3>
          <h4>{quarter.title}</h4>
          <ul>
            {quarter.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default RoadmapSection;