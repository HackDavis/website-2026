import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeartButton from '../HeartButton/heartButton';
import WordCycle from '../wordCycle/wordCycle';

export default function HeroInfo() {
  return (
    <>
      <div className="flex flex-row items-stretch gap-6">
        <div className="absolute top-0 left-[30%] -z-10 overflow-hidden">
          <Image
            src="/Images/reghero/Green.svg"
            alt="Animals on couch"
            width={300}
            height={300}
            className="flex flex-row justify-center object-contain h-full w-full"
          />
        </div>
        <div>
          <Image
            src="/Images/reghero/Watertower.svg"
            alt="watertower"
            width={156.5}
            height={221.27}
            className="absolute top-29 left-27 -z-10"
          />
          <Image
            src="/Images/reghero/YellowDonut.svg"
            alt="Animals on couch"
            width={100}
            height={100}
            className="absolute -z-10 top-[50%] left-[2%] justify-center object-contain animate-slow-spin"
          />
          <Image
            src="/Images/reghero/BlueThing.svg"
            alt="Animals on couch"
            width={100}
            height={100}
            className="absolute top-[85%] left-[35%] justify-center -z-10 object-contain animate-slow-spin"
          />
        </div>
        {/* animals on couch */}
        <div className="flex flex-row items-stretch gap-6">
          <Image
            src="/Images/reghero/Couch.svg"
            alt="Animals on couch"
            width={110}
            height={144}
            className="flex flex-row justify-center object-contain h-full w-full"
          />
        </div>

        {/* right side */}
        <div className="flex flex-col justify-between">
          {/* here text + buttons */}
          <div className="flex flex-row justify-end items-end">
            <div className="flex flex-col items-end gap-[22px] break-625:gap-[31px] text-right">
              <div className="flex flex-col items-end text-right">
                <p className="flex gap-2 text-[30px] font-bold leading-[115%] tracking-[0.8px] break-625:text-[40px]">
                  <span className="text-black">
                    <WordCycle />
                  </span>
                  <span className="text-black/50">for</span>
                </p>
                <h1 className="text-[45px] font-bold leading-[115%] tracking-[0.9px] text-[var(--text-hero)] break-625:text-[66px] break-625:leading-[100%] break-625:tracking-[3.52px] md:text-[88px]">
                  social good
                </h1>
                <p className="mt-[31px] text-[16px] text-right tracking-[0.48px] text-black break-625:text-[20px]">
                  May 9-10, 2026 @ UCenter
                </p>
              </div>

              <div className="flex flex-row items-start gap-[12px] break-625:flex-col break-625:items-end break-625:gap-[28px] sm:flex-row sm:items-center">
                <Link
                  href="https://hackdavis.typeform.com/to/N6DEZIVH"
                  target="_blank"
                  className="
                    rounded-full
                    px-6 py-2
                    border border-[var(--teal-1,#005271)]
                    bg-white
                    shadow-[4px_4px_0_0_#005271]
                    text-center
                    font-bold
                    tracking-[0.32px]
                    text-[var(--teal-1,#005271)]
                  "
                >
                  Register Now
                </Link>

                <div className="flex h-[40px] w-[138px] flex-shrink-0 items-center rounded-[100px] bg-black/15 text-center text-[18px] font-bold tracking-[0.4px] text-black break-625:h-[50px] break-625:w-[170px] break-625:py-0 break-625:text-[20px]">
                  <HeartButton text="Sponsor" href="mailto:team@hackdavis.io" />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 text-right break-625:flex-row break-625:items-end break-625:text-right">
                <span className="hidden text-[18px] font-normal tracking-[0.48px] text-black break-625:inline md:text-[20px]">
                  Check out the{' '}
                </span>
                <div className="flex items-center gap-2 text-black">
                  <FormLink href="/?section=teams" includeComma={false}>
                    Apply to be a{' '}
                    <span style={{ color: '#FFC53D' }}>Judge</span>,{' '}
                    <span style={{ color: '#FFC5AB' }}>Mentor</span>, or{' '}
                    <span style={{ color: '#9EE7E5' }}>Volunteer</span>
                  </FormLink>
                </div>
              </div>
            </div>
          </div>

          {/* numbers */}
          <div className="relative flex flex-row items-stretch pl-[25%]">
            <Image
              src="/Images/reghero/One.svg"
              alt="Animals on couch"
              width={150}
              height={150}
              className="flex flex-row justify-center object-contain"
            />
            <Image
              src="/Images/reghero/Zero.svg"
              alt="Animals on couch"
              width={150}
              height={150}
              className="flex pt-[15%] flex-row justify-center object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

interface FormLinkProps {
  href: string;
  includeComma: boolean;
  children: React.ReactNode;
}

function FormLink({ href, includeComma, children }: FormLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center text-[18px] font-bold tracking-[0.48px] text-black md:text-[20px]"
    >
      <span className="font-bold">{children}</span>

      <Image
        src="/Images/reghero/icon_arrow.svg"
        alt="Arrow icon"
        width={10}
        height={10}
        className="m-1 object-contain transition-transform group-hover:translate-x-1"
      />

      {includeComma && <span>,</span>}
    </Link>
  );
}