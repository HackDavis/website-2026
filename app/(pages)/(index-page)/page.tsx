import HeroInfo from "./_components/heroInfo/heroInfo";

export default function Home() {
  return (
    <div className="border-4 border-blue-600 p-4 flex flex-end px-[4%] pl-[9%] w-full">
      <div className="border-4 border-red-600 flex-end py-[15%]">
        <HeroInfo />
      </div>
    </div>
  );
}
