// import styles from './ProfileCard.module.scss';
import Image from 'next/image';
// import { FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
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
        >
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            placeholder="blur"
            blurDataURL={imageUrl}
            style={{ objectFit: 'cover', borderRadius: 11 }}
          />
          <div>
            {/* <FaLinkedin
              size={60}
              color="white"
            /> */}
          </div>
        </div>
      </a>
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default ProfileCard;
