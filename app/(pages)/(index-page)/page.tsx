import DonorScroll from './_components/DonorScroll/DonorScroll';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center">
      <p>Halo! Welcome to the HackDavis template repo :D</p>
      <DonorScroll />
    </div>
  );
}
