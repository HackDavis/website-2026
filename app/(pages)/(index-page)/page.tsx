import HeroInfo from './_components/heroInfo/heroInfo';
import Stats from './_components/Stats';
import TenYears from './_components/TenYears';

export default function Home() {
  return (
    <div className="pt-40 flex flex-end w-full">
      <div className="flex-end">
        <HeroInfo />
        <TenYears />
        <Stats />
      </div>
    </div>
  );
}
