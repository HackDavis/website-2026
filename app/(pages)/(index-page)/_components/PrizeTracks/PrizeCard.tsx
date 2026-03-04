'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface PrizeCardProps {
  name: string;
  prizeImages: StaticImport[];
  prizeNames: string[];
  criteria: string;
}

export default function PrizeCard({
  name,
  prizeImages,
  prizeNames,
  criteria,
}: PrizeCardProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
      sx={{
        padding: '0px',
        boxShadow: 'none',
        border: 'none',
        backgroundColor: 'white',
        '&::before': {
          content: 'none',
        },
        borderRadius: '20px !important',
      }}
      disableGutters={true}
    >
      <AccordionSummary sx={{ padding: '0px' }}>
        <div className="px-[5%] md:px-[2.5%] py-[1.5%] grow max-w-full rounded-xl">
          {/* Prize info and images group */}
          <div className="flex flex-col sm:flex-row h-fit gap-4 w-full">
            <div className="flex flex-col items-start w-full">
              <h3 className="text-base md:text-xl xl:text-2xl font-semibold leading-[125%] mb-3 xl:mb-4 justify-center sm:justify-start">
                {name}
              </h3>
              <div className="flex flex-col gap-2  text-[#5E5E65]">
                {prizeNames.map((prizeName, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-2 md:gap-3 justify-start"
                  >
                    {prizeNames.length > 1 && index == 0 && (
                      <div className="flex items-center gap-2">
                        <FirstPlaceIcon />
                        <p className="text-sm md:text-base xl:text-xl font-normal leading-[125%] justify-center sm:justify-start">
                          {`1st Place: ${prizeName}`}
                        </p>
                      </div>
                    )}
                    {prizeNames.length > 1 && index == 1 && (
                      <div className="flex items-center gap-2">
                        <SecondPlaceIcon />
                        <p className="text-sm md:text-base xl:text-xl font-normal leading-[125%] justify-center sm:justify-start">
                          {`2nd Place: ${prizeName}`}
                        </p>
                      </div>
                    )}
                    {prizeNames.length == 1 && (
                      <div className="flex items-center gap-2">
                        <FirstPlaceIcon />
                        <p className="text-sm md:text-base xl:text-xl font-normal leading-[125%] items-center sm:items-start">
                          {prizeName}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-2 mb-2 w-full sm:w-auto flex-row items-center justify-center">
              {prizeImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-1 sm:flex-none sm:h-[120px] md:h-[150px] xl:h-[200px] 2xl:h-[250px] rounded-xl flex justify-center items-center p-2.5 md:p-4 ${
                    prizeImages.length === 1
                      ? 'aspect-[3/2] sm:aspect-square'
                      : 'aspect-square'
                  }`}
                  style={{
                    background:
                      'linear-gradient(284.39deg, rgba(213,252,209,0.4) 9.72%, rgba(178,231,221,0.4) 44.61%, rgba(118,214,230,0.4) 79.5%)',
                  }}
                >
                  <Image
                    src={image}
                    alt={prizeNames[index]}
                    className="object-contain w-full block max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Border */}
          <div className="w-full border-t border-[#E9E9E7] my-3 xl:my-4"></div>
          {/* Eligibility criteria */}
          <div className="flex flex-row items-center gap-2 justify-start">
            <ChevronDown
              className={`h-4 md:h-5 xl:h-6 w-auto transition-transform duration-300 ease-in-out text-[#878796] ${
                expanded ? '' : '-rotate-90'
              }`}
            />
            <p className="text-sm md:text-base xl:text-xl font-normal text-[#878796] leading-[125%] tracking-wider whitespace-nowrap">
              ELIGIBILITY CRITERIA
            </p>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '0px' }}>
        <div className="flex items-center px-[5%] md:px-[2.5%] pb-[5%] md:pb-[3%]">
          <p className="text-sm md:text-base xl:text-xl font-normal leading-[125%]">
            {criteria || 'Check back in May!'}
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

function FirstPlaceIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M9 3H15L18 10L12 12M9 3L6 10L12 12M9 3L12 12M12 12L10.5 15L7.5 15.5L9.5 17.5L9 21L12 19.5L15 21L14.5 17.5L16.5 15.5L13.5 15L12 12ZM15 11L12 3"
        stroke="#5E5E65"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SecondPlaceIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M12 4V7M8 4V10M16 4V10M12 18.5L9 20L9.5 16.5L7.5 14.5L10.5 14L12 11L13.5 14L16.5 14.5L14.5 16.5L15 20L12 18.5Z"
        stroke="#5E5E65"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
