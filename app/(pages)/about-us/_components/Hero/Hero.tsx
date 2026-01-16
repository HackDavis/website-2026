import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative isolate w-full h-[225vh] bg-white">
      {/* Gradient layer only: adjust polygon points for angle */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-[linear-gradient(225deg,_#3E3A95_0%,_#24175F_20%,_#11043F_75%)] bg-[length:100%_100%] bg-[position:100%_0%] bg-no-repeat [clip-path:polygon(0_0,100%_0,100%_80%,0_95%)]" />
      </div>
      <div>
        <Image
          src="/Images/cloud_and_book.svg"
          alt="Cloud and Book"
          width={2000}
          height={1200}
          className="w-full relative z-30"
        />
        <Image
          src="/Images/Cow.svg"
          alt="HD Cow"
          width={1000}
          height={1000}
          className="absolute top-[14vw] left-[8%] z-10 w-[40vw] h-auto bob-slow z-30"
        />
      </div>
      <div className="hero-tight absolute top-[21vw] left-[52vw] text-white p-0 m-0 flex flex-col gap-0">
        <h3 className="font-[var(--font-metropolis)] uppercase tracking-wider m-0 p-0 text-[clamp(1rem,2.2vw,2rem)]">
          Hello, we're
        </h3>
        <h1 className="font-[var(--font-metropolis)] font-black m-0 p-0 text-[clamp(2.5rem,6vw,6rem)]">
          HackDavis
        </h1>
        <h3 className="text-right font-black text-[var(--text-purple)] m-0 p-0 text-[clamp(1rem,2.2vw,2rem)]">
          2026
        </h3>
      </div>
      <div className="absolute z-0 top-[140vh] left-[12%] text-white">
        <div className="relative border border-white py-[2vw] px-[1vw] pr-[2vw]">
          <span className="absolute -top-2 -left-2 h-5 w-5 rounded-full border border-white bg-[#11043F]" />
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full border border-white bg-[#11043F]" />
          <span className="absolute -bottom-2 -left-2 h-5 w-5 rounded-full border border-white bg-[#11043F]" />
          <span className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full border border-white bg-[#11043F]" />
          <h1 className="font-[var(--font-metropolis)] font-black mx-[2vw] mb-[1vw] tracking-[0.02em]">
            About Us
          </h1>
          <p className="font-[var(--font-metropolis)] my-[2vw] mx-[2vw] max-w-[25vw]">
            HackDavis is one of the largest collegiate hackathons in California
            where over 950 students, creators, and leaders come together to
            create for social good.
          </p>
        </div>
      </div>
      <div>
        <div
          className="bob-slow glass-bubble absolute z-30 top-[115vh] left-[70vw] text-white !w-[8vw] !h-[8vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(0.8rem,2vw,1.6rem)] leading-[1.02] text-center font-semibold"
          style={{
            ['--bubble-c1' as any]: '#50987C',
            ['--bubble-c2' as any]: '#49289D',
            ['--bubble-x' as any]: '90%',
            ['--bubble-y' as any]: '90%',
          }}
        >
          <span className="block max-w-[80%]">
            24
            <br />
            Hours
          </span>
        </div>
        <div
          className="bob-slow glass-bubble absolute z-10 top-[140vh] left-[55vw] text-white !w-[15vw] !h-[15vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(1rem,2.5vw,2rem)] leading-[1.02] text-center font-semibold"
          style={{
            ['--bubble-c1' as any]: 'rgba(72, 239, 169, 0.35)',
            ['--bubble-c2' as any]: 'rgba(88, 42, 228, 0.35)',
            ['--bubble-x' as any]: '80%',
            ['--bubble-y' as any]: '80%',
          }}
        >
          <span className="block max-w-[80%] font-semibold text-[clamp(1.2rem,3vw,2.4rem)] leading-[1.02]">
            $20k+ <br /> Prizes
          </span>
        </div>
        <div
          className="bob-slow glass-bubble absolute z-30 top-[135vh] left-[78vw] text-white !w-[11vw] !h-[11vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(0.9rem,2.2vw,1.8rem)] leading-[1.02] text-center font-semibold"
          style={{
            ['--bubble-c1' as any]: 'rgba(82, 123, 186, 0.9)',
            ['--bubble-c2' as any]: 'rgba(83, 23, 118, 0.9)',
            ['--bubble-x' as any]: '5%',
            ['--bubble-y' as any]: '5%',
          }}
        >
          <span className="block max-w-[80%]">
            150+ <br /> Projects
          </span>
        </div>
        <div
          className="bob-slow glass-bubble absolute z-30 top-[170vh] left-[35vw] text-white !w-[19vw] !h-[19vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(1.4rem,3.4vw,3rem)] leading-[1.02] text-center font-semibold"
          style={{
            ['--bubble-c1' as any]: '#49289D',
            ['--bubble-c2' as any]: '#451E60',
            ['--bubble-x' as any]: '70%',
            ['--bubble-y' as any]: '20%',
          }}
        >
          <span className="block max-w-[80%]">
            900+
            <br /> Hackers
          </span>
        </div>
      </div>
    </div>
  );
}
