import HeroInfo from './_components/heroInfo/heroInfo';
import Stats from './_components/Stats';
import TenYears from './_components/TenYears';
import AccordionFAQ from './_components/FAQ/faq';
import Create from './_components/Create/create';
import DonorScroll from './_components/DonorScroll/DonorScroll';
import Sponsers from './_components/Sponsers/Sponsers';
import UpcomingTimeline from './_components/UpcomingTimeline/UpcomingTimeline';
import ScheduleSneakPeek from './_components/ScheduleSneakPeak/ScheduleSneakPeek';

export default function Home() {
  return (
    <div className="pt-40 flex flex-col w-full min-h-screen bg-[#FAFAFA]">
      <HeroInfo />
      <ScheduleSneakPeek />
      <UpcomingTimeline />
      <TenYears />
      <Stats />
      <Create />
      <AccordionFAQ />
      <Sponsers />
      <DonorScroll />
    </div>
  );
}
