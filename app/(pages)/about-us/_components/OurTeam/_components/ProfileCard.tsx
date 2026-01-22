'use client';

import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { useMemo } from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl?: string;
  linkedinURL: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  imageUrl,
  linkedinURL,
}) => {
  const src =
    imageUrl && imageUrl.trim().length > 0
      ? imageUrl
      : '/Images/placeholder.jpg';

  // stable random tilt (does not reroll on re-render)
  const tilt = useMemo(() => Math.random() * 10 - 5, []);

  return (
    <a
      href={linkedinURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${name}'s LinkedIn`}
      className="group block w-full max-w-[240px] sm:max-w-[260px]"
    >
      <div
        style={{ ['--tilt' as any]: `${tilt}deg` }}
        className="
          rounded-2xl
          border-[3px] border-[#A6BFC7]
          bg-[#E5EEF1]
          p-2 sm:p-3
          shadow-[6px_6px_0px_#A6BFC7]
          transition-transform transition-shadow
          duration-200
          lg:[transform:rotate(var(--tilt))]
        "
      >
        {/* photo */}
        <div className="relative overflow-hidden rounded-xl bg-white aspect-[4/5] w-full">
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 35vw, 260px"
          />

          {/* LinkedIn hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <FaLinkedin className="text-white text-4xl" />
          </div>
        </div>

        {/* text */}
        <div className="mt-2 sm:mt-3">
          <h3 className="text-sm sm:text-base font-extrabold leading-tight text-black">
            {name}
          </h3>
          <p className="mt-0.5 text-xs sm:text-sm text-black/80">{title}</p>
        </div>
      </div>
    </a>
  );
};

export default ProfileCard;
