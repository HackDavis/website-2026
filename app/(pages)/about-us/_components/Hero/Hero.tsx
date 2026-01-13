export default function Hero() {
  return (
    <div className="relative w-full h-[200vh] bg-[linear-gradient(225deg,_#3E3A95_0%,_#24175F_20%,_#11043F_75%)] bg-[length:100%_100%] bg-[position:100%_0%] bg-no-repeat">
        <div>
          <img src="/Images/cloud_and_book.svg" alt="Cloud and Book" className="w-full relative z-10" />
        <img src="/Images/Cow.svg" alt="HD Cow" className="absolute top-[14vw] left-[8%] z-10 w-[40vw] h-auto bob-slow" />
        </div>
        <div className="hero-tight absolute top-[21vw] left-[52vw] text-white p-0 m-0 flex flex-col gap-0">
          <h3 className="font-[var(--font-metropolis)] uppercase tracking-wider m-0 p-0 text-[clamp(1rem,2.2vw,2rem)]">Hello, we're</h3>
          <h1 className="font-[var(--font-metropolis)] font-black m-0 p-0 text-[clamp(2.5rem,6vw,6rem)]">HackDavis</h1>
          <h3 className="text-right font-black text-[var(--text-purple)] m-0 p-0 text-[clamp(1rem,2.2vw,2rem)]">2026</h3>
        </div>
        <div className="absolute z-10 top-[150vh] left-[12%] text-white">About Us</div>
        <div>
          <div className="bob-slow glass-bubble absolute z-10 top-[115vh] left-[70vw] text-white !w-[8vw] !h-[8vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(0.8rem,2vw,1.7rem)] leading-tight text-center font-semi-bold"
          style={{
              ['--bubble-c1' as any]: '#50987C',
              ['--bubble-c2' as any]: '#49289D',
              ['--bubble-x' as any]: '90%',
              ['--bubble-y' as any]: '90%',
            }}>
            24<br />Hours
          </div>
          <div className="bob-slow glass-bubble absolute z-0 top-[140vh] left-[55vw] text-white !w-[15vw] !h-[15vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(1rem,2.5vw,2rem)] leading-tight text-center font-semi-bold"
          style={{
              ['--bubble-c1' as any]: 'rgba(72, 239, 169, 0.35)',
              ['--bubble-c2' as any]: 'rgba(88, 42, 228, 0.35)',
              ['--bubble-x' as any]: '80%',
              ['--bubble-y' as any]: '80%',
            }}>
            $20k+ <br /> Prizes
          </div>
          <div className="bob-slow glass-bubble absolute z-10 top-[135vh] left-[78vw] text-white !w-[11vw] !h-[11vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(1rem,2.5vw,2rem)] leading-tight text-center font-semi-bold"
          style={{
              ['--bubble-c1' as any]: 'rgba(82, 123, 186, 0.9)',
              ['--bubble-c2' as any]: 'rgba(83, 23, 118, 0.9)',
              ['--bubble-x' as any]: '5%',
              ['--bubble-y' as any]: '5%',
            }}
          >
            150+ <br /> Projects
          </div>
          <div
            className="bob-slow glass-bubble absolute z-10 top-[170vh] left-[35vw] text-white !w-[19vw] !h-[19vw] !p-0 !gap-0 rounded-full flex items-center justify-center text-[clamp(1rem,2.5vw,2rem)] leading-tight text-center font-semi-bold"
            style={{
              ['--bubble-c1' as any]: '#49289D',
              ['--bubble-c2' as any]: '#451E60',
              ['--bubble-x' as any]: '70%',
              ['--bubble-y' as any]: '20%',
            }}
          >
            900 <br /> Hackers
          </div>
        </div>
        
    </div>
  );
}
