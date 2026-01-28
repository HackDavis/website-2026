import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeartButton from '../HeartButton/heartButton';
import WordCycle from '../wordCycle/wordCycle';

export default function HeroInfo() {
  return (
    <div className="flex flex-col items-start gap-[22px] break-625:items-end break-625:gap-[31px]">
      <div className="flex flex-col items-start text-left break-625:items-end break-625:text-right">
        <p className="flex gap-2 font-metropolis text-[30px] font-bold leading-[115%] tracking-[0.8px] break-625:text-[40px]">
          <span className="text-black">
            <WordCycle />
          </span>
          <span className="text-black/50">for</span>
        </p>
        <h1 className="font-metropolis text-[45px] font-bold leading-[115%] tracking-[0.9px] text-black break-625:text-[66px] break-625:leading-[100%] break-625:tracking-[3.52px] md:text-[88px]">
          social good
        </h1>
        <p className="mt-[31px] font-metropolis text-[16px] font-normal tracking-[0.48px] text-black break-625:text-[20px]">
          Apply to direct <strong>HackDavis 2026</strong>
        </p>
      </div>

      <div className="flex flex-row items-start gap-[12px] break-625:flex-col break-625:items-end break-625:gap-[28px] sm:flex-row sm:items-center">
        <Link
          href="https://hackdavis.typeform.com/to/N6DEZIVH"
          target="_blank"
          className="inline-flex h-[40px] items-center justify-center gap-[10px] whitespace-nowrap rounded-[100px] bg-highlight-yellow px-[10px] py-[11px] text-center font-metropolis text-[18px] font-bold tracking-[0.4px] text-text-dark shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)] break-625:h-[50px] break-625:px-[40px] break-625:py-0 break-625:text-[20px]"
        >
          Director Application
        </Link>
        <div className="flex h-[40px] w-[138px] flex-shrink-0 items-center rounded-[100px] bg-black/15 text-center font-metropolis text-[18px] font-bold tracking-[0.4px] text-black break-625:h-[50px] break-625:w-[170px] break-625:py-0 break-625:text-[20px]">
          {/* <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[50px] bg-highlight-yellow shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)] break-625:h-[50px] break-625:w-[50px]">
            <Image
              src="/Hero/heart.svg"
              alt="Heart icon"
              width={24}
              height={24}
              className="h-[15px] w-[17px] object-contain break-625:h-[24px] break-625:w-[24px]"
            />
          </div>
          <span className="flex-1 pl-[9px] pr-[15px] text-center">Sponsor</span> */}
          <HeartButton text="Sponsor" href="mailto:team@hackdavis.io" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 text-left break-625:flex-row break-625:items-end break-625:text-right">
        <span className="hidden font-metropolis text-[18px] font-normal tracking-[0.48px] text-black break-625:inline md:text-[20px]">
          Check out the{' '}
        </span>
        <div className="flex items-center gap-2 text-black">
          <FormLink
            text="roles and teams"
            href="/?section=teams"
            // includeComma={true}
            includeComma={false}
          />
          {/* <FormLink
            text="Mentor"
            href="https://form.typeform.com/to/uNuWRicb"
            // includeComma={true}
            includeComma={false}
          /> */}
          <span className="font-metropolis text-[18px] font-normal tracking-[0.48px] md:text-[20px]">
            we have!
          </span>
          {/* <FormLink
            text="Volunteer"
            href="https://form.typeform.com/to/sTYMFPMW"
            includeComma={false}
          /> */}
        </div>
      </div>
    </div>
  );
}

interface FormLinkProps {
  text: string;
  href: string;
  includeComma: boolean;
}

function FormLink({ text, href, includeComma }: FormLinkProps) {
  return (
    <Link
      href={href}
      // target="_blank"
      className="flex font-metropolis text-[18px] font-bold tracking-[0.48px] text-white md:text-[20px]"
    >
      <p className="border-b-2 border-b-white font-bold">{text}</p>
      <Image
        src="/Hero/icon_arrow.svg"
        alt="Arrow icon"
        width={10}
        height={10}
        className="m-1 object-contain transition-transform group-hover:translate-x-1"
      />
      {includeComma && <p>,</p>}
    </Link>
  );
}
