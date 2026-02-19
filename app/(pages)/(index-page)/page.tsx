import HeroInfo from './_components/heroInfo/heroInfo';
import Stats from './_components/Stats';
import TenYears from './_components/TenYears';
import AccordionFAQ from './_components/FAQ/faq';
import Create from './_components/Create/create';

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
    </div>
  );
}
