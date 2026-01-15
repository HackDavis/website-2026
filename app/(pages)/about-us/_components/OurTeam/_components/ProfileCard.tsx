'use client';

import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

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
    imageUrl && imageUrl.trim().length > 0 ? imageUrl : '/Images/placeholder.jpg';

  // ✅ truly random tilt
  const tilt = Math.random() * 12 - 6;

  return (
    <div className="w-fit bg-white">
      <a href={linkedinURL} target="_blank">
        <div
          style={{ transform: `rotate(${tilt}deg)` }}
          className="
            relative
            rounded-md
            border-[3px] border-[#A6BFC7]
            bg-[var(--polaroid-fill)]
            p-3 pb-6
            transition-transform transition-shadow
            duration-200
            group-hover:-translate-y-1
            group-hover:shadow-xl
            shadow-[6px_6px_0px_var(--polaroid-shadow)]
          "
        >
          {/* photo */}
          <div className="relative w-[170px] h-[200px] object-cover overflow-hidden rounded-sm bg-white">
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
