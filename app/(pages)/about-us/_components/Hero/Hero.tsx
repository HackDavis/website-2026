export default function Hero() {
  return (
    <div className="relative w-full h-[200vh] bg-[linear-gradient(225deg,_#3E3A95_0%,_#24175F_20%,_#11043F_75%)] bg-[length:100%_100%] bg-[position:100%_0%] bg-no-repeat">
        <div>
          <img src="/Images/cloud_and_book.svg" alt="Cloud and Book" className="w-full" />
        <img src="/Images/Cow.svg" alt="HD Cow" className="absolute top-[14vw] left-[8%] z-10 w-[40vw] h-auto bob-slow" />
        </div>
        <div className="hero-tight absolute top-[21vw] left-[52vw] text-white p-0 m-0 flex flex-col gap-0">
          <h3 className="font-[var(--font-metropolis)] uppercase tracking-wider m-0 p-0 text-[clamp(1rem,2.2vw,2rem)]">Hello, we're</h3>
          <h1 className="font-[var(--font-metropolis)] font-black m-0 p-0 text-[clamp(2.5rem,6vw,6rem)]">HackDavis</h1>
          <h3 className="text-right font-black text-[var(--text-purple)] m-0 p-0 text-[clamp(1rem,2.2vw,2rem)]">2026</h3>
        </div>
    </div>
  );
}
