import CarouselContextProvider from '@pages/about-us/_contexts/CarouselContext';
import CarouselArrows from './CarouselArrows';
import CarouselWindow from './CarouselWindow';
import Archive from './Archive';

import circle2017 from '@public/Images/archives/2017-circle.svg';
import circle2018 from '@public/Images/archives/2018-circle.svg';
import circle2019 from '@public/Images/archives/2019-circle.svg';
import circle2020 from '@public/Images/archives/2020-circle.svg';
import circle2021 from '@public/Images/archives/2021-circle.svg';
import circle2022 from '@public/Images/archives/2022-circle.svg';
import circle2023 from '@public/Images/archives/2023-circle.svg';
import circle2024 from '@public/Images/archives/2024-circle.svg';
import circle2025 from '@public/Images/archives/2025-circle.svg';
import LeftCloud from '@public/Images/archives/LeftCloud.svg';
import RightCloud from '@public/Images/archives/RightCloud.svg';
import UnderCloud from '@public/Images/archives/UnderCloud.svg';
import Image from 'next/image';


const archives = [
  {
    year: 2017,
    imageSrc: circle2017,
    alt: 'Circle representing 2017 HackDavis hackathon',
    link: 'https://2017.hackdavis.io/',
  },
  {
    year: 2018,
    imageSrc: circle2018,
    alt: 'Circle representing 2018 HackDavis hackathon',
    link: 'https://2018.hackdavis.io/',
  },
  {
    year: 2019,
    imageSrc: circle2019,
    alt: 'Circle representing 2019 HackDavis hackathon',
    link: 'https://2019.hackdavis.io/',
  },
  {
    year: 2020,
    imageSrc: circle2020,
    alt: 'Circle representing 2020 HackDavis hackathon',
    link: 'https://2020.hackdavis.io/',
  },
  {
    year: 2021,
    imageSrc: circle2021,
    alt: 'Circle representing 2021 HackDavis hackathon',
    link: 'https://2021.hackdavis.io/',
  },
  {
    year: 2022,
    imageSrc: circle2022,
    alt: 'Circle representing 2022 HackDavis hackathon',
    link: 'https://2022.hackdavis.io/',
  },
  {
    year: 2023,
    imageSrc: circle2023,
    alt: 'Circle representing 2023 HackDavis hackathon',
    link: 'https://2023.hackdavis.io/',
  },
  {
    year: 2024,
    imageSrc: circle2024,
    alt: 'Circle representing 2024 HackDavis hackathon',
    link: 'https://2024.hackdavis.io/',
  },
  {
    year: 2025,
    imageSrc: circle2025,
    alt: 'Circle representing 2025 HackDavis hackathon',
    link: 'https://2025.hackdavis.io/',
  },
];

export default function Archives() {
  return (
    <CarouselContextProvider>
      <div className="relative z-0 flex w-full flex-col gap-[45px] pb-[50px] sm:gap-[50px] border-blue-600 border-8">

        {/*  cloud container  */}
        {/* <div className="border-pink-600 border-8 relative h-[150px] w-full sm:h-[200px] md:h-[250px] lg:h-[300px]">
          {/* left cloud 
          <Image
            src={LeftCloud}
            alt=""
            aria-hidden
            className="pointer-events-none cover absolute left-[-1%] w-[420px] sm:block md:w-full"
          />

          {/* right cloud 
          <Image
            src={RightCloud}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-[-1%] w-[420px] sm:block md:w-full"
          />

          {/* under cloud 
          <Image
            src={UnderCloud}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-[-1%] -z-10 w-[420px] sm:block md:w-full"
          />
        </div>  */}

        <div className="flex flex-row items-center justify-between px-[13%] md:px-8 ">
          <h2 className="font-metropolis px-5 text-xl font-bold text-[#123041] sm:text-[2.25rem]">
            From the archive
          </h2>
          <div className="hidden sm:flex">
            <CarouselArrows />
          </div>
        </div>
        <CarouselWindow>
          {archives.toReversed().map(({ year, imageSrc, alt, link }) => (
            <Archive key={year} imageSrc={imageSrc} alt={alt} link={link} />
          ))}
        </CarouselWindow>
        <div className="relative -top-[75px] px-[13%] sm:hidden">
          <CarouselArrows />
        </div>
      </div>
    </CarouselContextProvider>
  );
}
