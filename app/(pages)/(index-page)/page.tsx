import HeroInfo from "./_components/heroInfo/heroInfo";

export default function Home() {
  return (
    <div className="border-8 border-blue-600 p-4 flex flex-end">
      <div className="border-8 border-blue-600 flex-end">
        <HeroInfo />
      </div>
    </div>
  );
}
