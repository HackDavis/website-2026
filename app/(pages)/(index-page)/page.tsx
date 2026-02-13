import HeroInfo from './_components/heroInfo/heroInfo';
import Stats from './_components/Stats';

export default function Home() {
  return (
    <div className="pt-40 flex flex-end w-full">
      <div className="flex-end">
        <HeroInfo />
        <div className="h-20 p-[15%] bg-pink-100">placeholder for 10 years</div>
        <Stats />
      </div>
    </div>
  );
}
