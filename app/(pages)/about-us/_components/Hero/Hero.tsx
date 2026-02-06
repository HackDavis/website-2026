import Image from 'next/image';

export default function Hero() {
  return (
    <div className="font-[var(--font-metropolis)] relative isolate w-full pb-20 md:pb-5 bg-white">
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

      <div className="z-40 hero-tight absolute top-[75vw] left-[50vw] text-white p-0 m-0 flex flex-col gap-0 md:top-[28vw] md:left-[50vw] lg:top-[21vw] lg:left-[52vw]">
        <h3 className="font-[var(--font-metropolis)] uppercase tracking-wider m-0 p-0 text-[clamp(0.9rem,3.5vw,1.2rem)] md:text-[clamp(1rem,2.6vw,1.8rem)] lg:text-[clamp(1rem,2.2vw,2rem)]">
          Hello, we're
        </h3>
        <h1 className="font-[var(--font-metropolis)] font-black m-0 p-0 text-[clamp(2.1rem,9vw,3.6rem)] md:text-[clamp(2.6rem,7vw,5.6rem)] lg:text-[clamp(4.1rem,7.8vw,9.5rem)]">
          HackDavis
        </h1>
        <h3 className="text-right font-black text-[var(--text-purple)] m-0 p-0 text-[clamp(0.9rem,3.5vw,1.2rem)] md:text-[clamp(1rem,2.6vw,1.8rem)] lg:text-[clamp(1rem,2.2vw,2rem)]">
          2026
        </h3>
      </div>

      <div className="absolute z-10 top-[125vw] left-[6%] w-[50vw] h-[200vw] text-white sm:w-[42vw] sm:min-h-[120vw] sm:top-[60%] md:top-[70vw] md:left-[10%] md:w-[40vw] lg:top-[75vw] lg:left-[12%] lg:w-auto">
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
    </div>
  );
}
