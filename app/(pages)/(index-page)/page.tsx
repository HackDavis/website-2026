import HeroInfo from './_components/heroInfo/heroInfo';
import Stats from './_components/Stats';
import TenYears from './_components/TenYears';
import AccordionFAQ from './_components/FAQ/faq';
import Create from './_components/Create/create';

import DonorScroll from './_components/DonorScroll/DonorScroll';

export default function Home() {
  return (
    <div className="pt-40 flex flex-end w-full">
      <div className="flex-end">
        <HeroInfo />
        <TenYears />
        <Stats />
        <Create />
        <AccordionFAQ />
      </div>
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center">
      <p>Halo! Welcome to the HackDavis template repo :D</p>
      <DonorScroll />
    </div>
  );
}
