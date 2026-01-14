'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  linkedinURL: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  imageUrl,
  linkedinURL,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',
            width: 240,
            height: 240,
            borderRadius: 11,
            overflow: 'hidden',
          }}
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 150ms ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.35)',
            }}
          >
            {/* put linkedin thing */}
          </div>
        </div>
      </a>

      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default ProfileCard;
