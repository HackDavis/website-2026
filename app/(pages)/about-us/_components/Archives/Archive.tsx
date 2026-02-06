import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

interface ArchiveProps {
  imageSrc: StaticImport;
  alt: string;
  link: string;
}

export default function Archive({ imageSrc, alt, link }: ArchiveProps) {
  return (
    <Link href={link} target="_blank" className="flex flex-row items-center">
      <div className="relative flex flex-row items-center">
        <Image
          src={imageSrc}
          alt={alt}
          className="h-[150px] w-auto object-contain md:h-[12vw]"
        />
      </div>
    </Link>
  );
}
