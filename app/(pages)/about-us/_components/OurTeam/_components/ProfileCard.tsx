'use client';

import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl?: string;
  linkedinURL: string;
}

function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

const TILTS = [-6, -4, -2, 2, 4, 6]; // degrees

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  imageUrl,
  linkedinURL,
}) => {
  const src =
    imageUrl && imageUrl.trim().length > 0 ? imageUrl : '/Images/placeholder.jpg';

  const tilt = TILTS[hashString(name) % TILTS.length];

  return (
    <div className="w-fit">
      <a
        href={linkedinURL}
        target="_blank"
      >
        <div
          // the slight random tilt per card
          style={{ transform: `rotate(${tilt}deg)` }}
          className="
            relative
            rounded-md
            border-[3px] border-[#A6BFC7]
            bg-white
            p-3 pb-6
            transition-transform transition-shadow
            duration-200
            group-hover:-translate-y-1
            group-hover:shadow-xl
            shadow-[6px_6px_0px_var(--polaroid-shadow)]
          "
        >
          {/* photo */}
          <div className="relative h-60 w-60 overflow-hidden rounded-sm bg-gray-100">
            <Image src={src} alt={name} fill className="object-cover" />

            {/* hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <div className="rounded-full bg-black/45 p-3">
                <FaLinkedin className="text-white text-5xl" />
              </div>
            </div>
          </div>

          {/* caption */}
          <div className="mt-4">
            <h3 className="text-xl font-bold leading-tight text-black">
              {name}
            </h3>
            <p className="mt-1 text-sm text-black">{title}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProfileCard;
