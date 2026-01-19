import Image from 'next/image';

export default function AllAbout() {
  return (
    <div className="flex flex-col gap-6 md:gap-52 pb-40">
      <div className="text-left">
        <h1 className="px-[7%] text-3xl md:text-5xl font-bold leading-none">What we're all about</h1>
      </div>

      <div className="flex flex-col gap-8 md:flex-row justify-between px-[8%]">
        <div className="relative flex flex-col justify-center align-middle w-56 h-48 md:w-96 md:h-60 border-2 border-shadow rounded-xl shadow-card py-5 px-6 md:p-8 bg-secondary gap-2 md:gap-3 group">
          <h2 className="relative text-lg md:text-2xl text-center md:text-left font-bold z-10">
            Hands-on Learning
          </h2>

          <p className="relative flex text-sm md:text-lg md:text-left z-10 border-black border-2">
            No matter which prompt you choose, each project provides hands-on
            experience and an opportunity to explore a new discipline.
          </p>

          <Image
            src="/Images/frog.svg"
            alt="Frog mascot"
            width={110}
            height={144}
            className="absolute top-0 right-14 transition-all duration-1000 ease-out group-hover:scale-125 group-hover:translate-y-48 -z-10"
          />
        </div>

        <div className="relative flex flex-col w-60 h-48 md:w-96 md:h-60 border-2 border-shadow rounded-xl shadow-card p-5 md:p-8 bg-secondary gap-3 group">
          <h2 className="text-2xl text-left font-bold">Inclusivity</h2>

          <p className="text-lg text-left">
            We invite individuals of all backgrounds to learn new skills and
            grow in an inclusive environment.
          </p>

          <Image
            src="/Images/chicken.svg"
            alt="Frog mascot"
            width={110}
            height={144}
            className="absolute top-2 right-14 transition-all duration-1000 ease-out group-hover:scale-125 group-hover:translate-y-48 -z-10"
          />
        </div>

        <div className="relative flex flex-col w-60 h-48 md:w-96 md:h-60 border-2 border-shadow rounded-xl shadow-card p-5 md:p-8 bg-secondary gap-3 group">
          <h2 className="text-2xl text-left font-bold">Impactful projects</h2>

          <p className="text-lg text-left">
            Create meaningful, impactful, and innovative solutions that benefit
            local and global communities.
          </p>

          <Image
            src="/Images/rabbit.svg"
            alt="Frog mascot"
            width={110}
            height={144}
            className="absolute top-4 right-14 transition-all duration-100 ease-out group-hover:scale-125 group-hover:translate-y-48 -z-10"
          />
        </div>
      </div>
    </div>
  );
}
