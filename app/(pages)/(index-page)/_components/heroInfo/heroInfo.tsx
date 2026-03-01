'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeartButton from '../HeartButton/heartButton';
import WordCycle from '../wordCycle/wordCycle';
import {
  useParallax,
  PARALLAX_SPEEDS,
  getParallaxStyle,
} from '@app/(pages)/_hooks/useParallax';

export default function HeroInfo() {
  const { mousePosition, containerRef } = useParallax();
  const { bigShape, mediumShape, littleShape, extraTiniTiny } = PARALLAX_SPEEDS;

  return (
    <>
      <div
        id="home"
        ref={containerRef}
        className="flex flex-col pl-[9%] items-center -pl-5 p-5 w-full gap-6 md:flex-row md:items-stretch md:pr-[13%]"
      >
        <div
          className="absolute -top-24 left-[27%] md:left-[30%] z-0"
          // can't import getParallaxStyle here because it needs to spin at the same time
          style={{
            transform: `translateX(${
              mousePosition.x / extraTiniTiny
            }px) translateY(${mousePosition.y / extraTiniTiny}px)`,
          }}
        >
          <Image
            src="/Images/reghero/Green.svg"
            alt="green flower"
            width={300}
            height={300}
            className="flex flex-row justify-center object-contain w-[40%] md:h-full md:w-full"
            style={{ animation: 'spin 30s linear infinite' }}
          />
        </div>
        <div>
          <Image
            src="/Images/reghero/WaterTower.svg"
            alt="watertower"
            width={156.5}
            height={221.27}
            className="absolute top-29 left-27 z-0 hidden md:block"
            style={getParallaxStyle(mousePosition, bigShape)}
          />
          <div
            className="absolute z-0 top-[56%] md:top-[50%] left-[2%]"
            // can't import getParallaxStyle here because it needs to spin at the same time
            style={{
              transform: `translateX(${
                mousePosition.x / mediumShape
              }px) translateY(${mousePosition.y / mediumShape}px)`,
            }}
          >
            <Image
              src="/Images/reghero/YellowDonut.svg"
              alt="yellow donut"
              width={100}
              height={100}
              className="justify-center object-contain"
              style={{ animation: 'spin 25s linear infinite reverse' }}
            />
          </div>
          <Image
            src="/Images/reghero/BlueThing.svg"
            alt="blue shape"
            width={100}
            height={100}
            className="absolute order-2 md:order-none top-[85%] -left-[5%] md:left-[35%] justify-center z-0 object-contain"
            style={getParallaxStyle(mousePosition, littleShape)}
          />
        </div>
        {/* animals on couch */}
        <div className="order-2 md:order-none flex flex-row md:min-w-[360px] items-stretch gap-6">
          <Image
            src="/Images/reghero/Couch.svg"
            alt="Animals on couch"
            width={110}
            height={144}
            className="flex flex-row justify-center object-contain pr-[13%] md:p-0 md:h-full w-screen md:w-screen"
          />
        </div>

        {/* right side */}
        <div className="order-1 md:order-none flex w-full min-w-0 flex-col justify-between md:w-full md:pr-0 pr-[5%]">
          {/* here text + buttons */}
          <div className="flex flex-row justify-start items-start md:justify-end md:items-end">
            <div className="flex flex-col items-start gap-[22px] text-left md:items-end md:gap-[31px] md:text-right">
              <div className="flex flex-col items-start text-left md:items-end md:text-right w-full">
                <div className="flex flex-col items-start text-left md:items-end md:text-right w-full">
                  <p className="flex gap-2 text-[30px] font-bold leading-[115%] tracking-[0.8px] break-625:text-[40px]">
                    <span className="text-black">
                      <WordCycle />
                    </span>
                    <span className="text-[#005271]">for</span>
                  </p>

                  <h1 className="whitespace-nowrap text-[45px] font-bold leading-[115%] tracking-[0.9px] text-[var(--text-hero)] break-900:text-[50px] break-625:text-[66px] break-625:leading-[100%] break-625:tracking-[3.52px] md:text-[88px]">
                    social good
                  </h1>

                  <p className="mt-[10px] text-[16px] w-full tracking-[0.48px] text-black break-625:text-[20px]">
                    May 9-10, 2026 @ UCenter
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-start gap-[12px] break-625:flex-col break-625:items-end break-625:gap-[28px] sm:flex-row sm:items-center">
                <Link
                  href="https://apply.hackdavis.io/"
                  target="_blank"
                  className="
                    rounded-full
                    px-4 py-2
                    md:px-6 md:py-2
                    text-[14px]
                    text-nowrap
                    md:text-[16px]
                    border border-[var(--teal-1,#005271)]
                    hover:border-white
                    bg-white
                    hover:bg-[var(--teal-1,#005271)]
                    shadow-[4px_4px_0_0_#005271]
                    text-center
                    font-bold
                    tracking-[0.32px]
                    text-[var(--teal-1,#005271)]
                    hover:text-white
                  "
                >
                  Register Now
                </Link>

                <div className="flex h-[40px] w-[138px] flex-shrink-0 items-center rounded-[100px] bg-black/15 text-center text-[18px] font-bold tracking-[0.4px] text-black break-625:h-[50px] break-625:w-[170px] break-625:py-0 break-625:text-[20px]">
                  <HeartButton
                    text="Sponsor"
                    backgroundColor="#EDF2F3"
                    href="mailto:team@hackdavis.io"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 text-left break-625:flex-row break-625:items-end break-625:text-right">
                <span className="hidden text-[18px] font-normal tracking-[0.48px] text-black break-625:inline md:text-[20px]">
                  Check out the{' '}
                </span>
                <div className="flex items-center gap-2 text-black text-[19px]">
                  Apply to be a{' '}
                  <FormLink
                    href="https://forms.gle/rvMKjxw6GjiaKPjc7"
                    includeComma={false}
                  >
                    <span style={{ color: '#FFC53D' }}>Judge</span>
                  </FormLink>
                  {/* <span style={{ color: '#FFC5AB' }}>Mentor</span>, or{' '}
                    <span style={{ color: '#9EE7E5' }}>Volunteer</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* desktop numbers */}
          <div className="hidden md:flex items-end gap-0 pt-[15%] md:pl-[5%] lg:pl-[30%]">
            <Image
              src="/Images/reghero/One.svg"
              alt="1"
              width={130}
              height={130}
              className="object-contain w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] shrink-0"
            />
            <Image
              src="/Images/reghero/Zero.svg"
              alt="0"
              width={130}
              height={130}
              className="object-contain sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px] shrink-0 translate-y-[24px] -translate-x-[20px]"
            />
          </div>
        </div>

        {/* mobile numbers: 10 */}
        <div className="block md:hidden order-3 md:order-none relative ml-[25%] md:ml-0  pt-[9%] flex flex-row items-stretch sm:pl-0 md:pl-[25%]">
          <Image
            src="/Images/reghero/One.svg"
            alt="Animals on couch"
            width={150}
            height={150}
            className="
            object-contain
            w-[180px] h-[180px]
          "
          />
          <Image
            src="/Images/reghero/Zero.svg"
            alt="Animals on couch"
            width={150}
            height={150}
            className="
            object-contain
            w-[180px] h-[180px]
            translate-y-[30px]
            -translate-x-[20px]
            md:translate-y-[24px]
          "
          />
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
      className="group flex items-center text-[16px] md:text-[18px] font-bold tracking-[0.48px] text-black md:text-[20px]"
      target="_blank"
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
