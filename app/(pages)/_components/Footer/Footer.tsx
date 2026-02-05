'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faMedium,
  faFacebookF,
  faTwitter,
  faInstagram,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';
config.autoAddCss = false;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

interface FooterProps {
  variant?: 'index' | 'about-us';
}

export default function Footer({ variant = 'about-us' }: FooterProps) {
  const logoStyles =
    'h-6 text-white transition hover:text-gray-300 break-400:h-7 md:h-8 lg:h-8 xl:h-10 2xl:h-15';

  const bgColor = variant === 'index' ? 'bg-[#000008] z-[-1]' : 'bg-[#11043F]';

  return (
    <footer className={`relative z-10 flex w-full h-70 flex-col ${bgColor}`}>
      {/* Content Container */}
      <div className="mx-auto mt-[20%] flex w-3/4 flex-col items-center justify-around gap-8 break-400:mt-[7%] break-625:gap-12 md:mt-[7%] lg:relative lg:my-[5%] lg:flex-row lg:justify-between lg:gap-0 lg:px-0">
        {/* HackDavis Logo */}
        <div
          className={`flex w-full flex-row items-center justify-center gap-4 lg:w-1/3 ${bgColor}`}
        >
          <Image
            src="/Footer/hdLogoWhite.svg"
            alt="HackDavis Logo"
            className="w-1/3"
            width={92.5}
            height={92.7}
          />
          <Image
            src="/Footer/hdLogoMottoUpdated.svg"
            alt="HackDavis name and motto"
            className="w-2/3"
            width={226}
            height={71.55}
          />
        </div>

        {/* Social Icons */}
        <div className="flex w-full flex-col items-center gap-2 px-5 break-400:w-11/12 break-625:gap-4 lg:w-1/3 lg:px-0">
          <div className="flex w-full flex-row items-center justify-between pt-2 pb-4">
            <a
              className={`aspect-square ${logoStyles}`}
              href="mailto:team@hackdavis.io"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              className={`aspect-square ${logoStyles}`}
              href="https://medium.com/@HackDavis"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
            <a
              className={`aspect-[calc(320/512)] ${logoStyles}`}
              href="https://www.facebook.com/HackDavis"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className={`aspect-square ${logoStyles}`}
              href="https://twitter.com/hack_davis"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className={`aspect-[calc(448/512)] ${logoStyles}`}
              href="https://www.instagram.com/hackdavis"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className={`aspect-[calc(640/512)] ${logoStyles}`}
              href="https://discord.gg/wc6QQEc"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
          <p className="pb-4 text-center font-metropolis text-xs text-white break-625:text-sm md:pb-6 md:text-base lg:pb-0 lg:text-sm xl:text-base 2xl:text-2xl">
            &copy; 2026 HackDavis • Made with ☕️ & 💛 in Davis
          </p>
        </div>

        {/* Back to Top Arrow */}
        <div
          className="md-4 lg-8 absolute right-6 top-6 sm:top-8 md:top-10 flex cursor-pointer flex-row items-center gap-2 text-white transition-transform hover:scale-110 lg:relative lg:right-0 lg:top-0 lg:w-fit lg:justify-end lg:gap-3 2xl:gap-4"
          onClick={scrollToTop}
        >
          <p className="text-xs break-400:text-sm sm:text-base lg:text-lg 2xl:text-3xl">
            BACK TO TOP
          </p>
          <Image
            src="/Footer/arrowUp.svg"
            alt="Arrow Up"
            className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}
