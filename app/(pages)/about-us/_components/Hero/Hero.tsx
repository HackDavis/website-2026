import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative isolate w-full min-h-[180vh] bg-white max-[375px]:min-h-[220vh] md:h-[210vh] lg:h-[225vh]">
      <div className="relative w-full">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-[linear-gradient(225deg,_#3E3A95_0%,_#24175F_8%,_#11043F_20%)] bg-[length:100%_100%] bg-[position:100%_0%] bg-no-repeat [clip-path:polygon(0_0,100%_0,100%_70%,0_95%)]" />
        </div>
        <Image
          src="/Images/hero/cloud_and_book.svg"
          alt="Cloud and Book"
          width={2000}
          height={1200}
          className="hidden w-full relative z-20 md:block"
        />
        <Image
          src="/Images/hero/mobile_cloud_book_bubbles.svg"
          alt="Cloud and Book"
          width={1200}
          height={900}
          className="pt-[3vh] block w-full relative z-20 md:hidden"
        />
        <Image
          src="/Images/hero/Cow.svg"
          alt="HD Cow"
          width={1000}
          height={1000}
          className="absolute top-[53vw] left-[1%] z-30 w-[55vw] h-auto animate-float-bob will-change-transform md:top-[18vw] md:left-[6%] md:w-[42vw] lg:top-[14vw] lg:left-[8%] lg:w-[40vw]"
        />
      </div>
      <div className=" z-40 hero-tight absolute top-[75vw] left-[50vw] text-white p-0 m-0 flex flex-col gap-0 md:top-[28vw] md:left-[50vw] lg:top-[21vw] lg:left-[52vw]">
        <h3 className="font-[var(--font-metropolis)] uppercase tracking-wider m-0 p-0 text-[clamp(0.9rem,3.5vw,1.2rem)] md:text-[clamp(1rem,2.6vw,1.8rem)] lg:text-[clamp(1rem,2.2vw,2rem)]">
          Hello, we're
        </h3>
        <h1 className="font-[var(--font-metropolis)] font-black m-0 p-0 text-[clamp(1.8rem,8vw,3rem)] md:text-[clamp(2.2rem,6.2vw,5rem)] lg:text-[clamp(2.5rem,6vw,6rem)]">
          HackDavis
        </h1>
        <h3 className="text-right font-black text-[var(--text-purple)] m-0 p-0 text-[clamp(0.9rem,3.5vw,1.2rem)] md:text-[clamp(1rem,2.6vw,1.8rem)] lg:text-[clamp(1rem,2.2vw,2rem)]">
          2026
        </h3>
      </div>
      <div className="absolute z-10 top-[125vw] left-[6%] w-[50vw] text-white sm:top-[60%] md:top-[65vw] md:left-[10%] md:w-[40vw] lg:top-[65vw] lg:left-[12%] lg:w-auto xl:top-[56%] 2xl:top-[60%]">
        <div className="relative border border-white py-3 px-3 pr-4 md:py-[1.4vw] md:px-[1.2vw] md:pr-[2vw] lg:py-[2vw] lg:px-[1vw] lg:pr-[2vw]">
          <span className="absolute -top-2 -left-2 h-5 w-5 rounded-full border border-white bg-[#11043F]" />
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full border border-white bg-[#11043F]" />
          <span className="absolute -bottom-2 -left-2 h-5 w-5 rounded-full border border-white bg-[#11043F]" />
          <span className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full border border-white bg-[#11043F]" />
          <h1 className="font-[var(--font-metropolis)] font-black mx-3 mb-2 tracking-[0.02em] text-[clamp(1.2rem,4vw,1.6rem)] md:mx-[1.6vw] md:mb-[1vw] md:text-[clamp(1.6rem,2.6vw,2.4rem)] lg:mx-[2vw] lg:mb-[1vw] lg:text-[clamp(2rem,3vw,3rem)]">
            About Us
          </h1>
          <p className="font-[var(--font-metropolis)] mt-2 mb-4 mx-3 max-w-[44vw] text-[clamp(0.75rem,3vw,0.95rem)] md:my-[1.6vw] md:mx-[1.6vw] md:max-w-[36vw] md:text-[1rem] lg:my-[2vw] lg:mx-[2vw] lg:max-w-[25vw] lg:text-[1.125rem]">
            HackDavis is one of the largest collegiate hackathons in California
            where over 950 students, creators, and leaders come together to
            create for social good.
          </p>
        </div>
      </div>
      {/* <div>
        <div
          className="animate-float-bob will-change-transform glass-bubble absolute z-30 top-[78vh] left-[70vw] text-white !w-[14vw] !h-[14vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(0.8rem,2vw,1.6rem)] leading-[1.02] text-center font-semibold md:top-[110vh] md:left-[66vw] md:!w-[9vw] md:!h-[9vw] lg:top-[118vh] lg:left-[68vw] lg:!w-[10vw] lg:!h-[10vw]"
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
        <div className="block md:hidden">
          <div
            className="animate-float-bob will-change-transform glass-bubble absolute z-30 top-[95vh] left-[45vw] text-white !w-[25vw] !h-[25vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(1rem,2.5vw,2rem)] leading-[1.02] text-center font-semibold"
            style={{
              ['--bubble-c1' as any]: 'rgba(82, 123, 186, 1)',
              ['--bubble-c2' as any]: 'rgba(83, 23, 118, 1)',
              ['--bubble-x' as any]: '5%',
              ['--bubble-y' as any]: '5%',
            }}
          >
            <span className="block max-w-[80%] font-semibold text-[clamp(1.2rem,3vw,2.4rem)] leading-[1.02]">
              $20k+ <br /> Prizes
            </span>
          </div>
        </div>
        <div className="hidden md:block">
          <div
            className="animate-float-bob will-change-transform glass-bubble absolute z-10 top-[125vh] left-[46vw] text-white !w-[13vw] !h-[13vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(1rem,2.5vw,2rem)] leading-[1.02] text-center font-semibold lg:top-[143vh] lg:left-[50vw] lg:!w-[14vw] lg:!h-[14vw]"
            style={{
              ['--bubble-c1' as any]: 'rgba(72, 239, 169, 0.35)',
              ['--bubble-c2' as any]: 'rgba(88, 42, 228, 0.35)',
              ['--bubble-x' as any]: '100%',
              ['--bubble-y' as any]: '80%',
            }}
          >
            <span className="block max-w-[80%] font-semibold text-[clamp(1.2rem,3vw,2.4rem)] leading-[1.02]">
              $20k+ <br /> Prizes
            </span>
          </div>
        </div>
        <div
          className="animate-float-bob will-change-transform glass-bubble absolute z-30 top-[90vh] left-[78vw] text-white !w-[17vw] !h-[17vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(0.9rem,2.2vw,1.8rem)] leading-[1.02] text-center font-semibold md:top-[118vh] md:left-[72vw] md:!w-[12vw] md:!h-[12vw] lg:top-[140vh] lg:!w-[14vw] lg:!h-[14vw]"
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
          className="animate-float-bob will-change-transform glass-bubble absolute z-30 top-[105vh] left-[7vw] text-white !w-[35vw] !h-[35vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(1.4rem,3.4vw,3rem)] leading-[1.02] text-center font-semibold md:top-[145vh] md:left-[28vw] md:!w-[18vw] md:!h-[18vw] lg:top-[170vh] lg:left-[35vw] lg:!w-[19vw] lg:!h-[19vw]"
          style={{
            ['--bubble-c1' as any]: '#49289D',
            ['--bubble-c2' as any]: '#451E60',
            ['--bubble-x' as any]: '70%',
            ['--bubble-y' as any]: '20%',
          }}
        >
          <span className="block max-w-[80%] text-[clamp(1.8rem,5vw,3.6rem)] md:text-[clamp(1.3rem,3.2vw,2.6rem)] lg:text-[clamp(1.4rem,3.4vw,3rem)]">
            900+
            <br /> Hackers
          </span>
        </div>
      </div> */}
    </div>
  );
}
