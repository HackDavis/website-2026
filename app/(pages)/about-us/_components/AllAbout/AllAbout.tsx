import Image from 'next/image';

export default function AllAbout() {
  return (
    <div className="flex flex-col gap-6 md:pb-40 border-8 border-blue-300">
      <div className="flex ml-[15%] text-left">
        <h1 className="text-3xl md:text-5xl font-bold leading-none">
          What we're all about
        </h1>
      </div>

      <div className="grid gap-8 px-[15%] md:grid-cols-3 md:items-stretch">
        <div className="relative flex flex-col h-full w-60 md:w-auto border-2 border-shadow rounded-xl shadow-card p-5 md:p-8 bg-secondary gap-3 group">
          <h2 className="relative text-lg md:text-2xl text-left md:text-left font-bold z-10">
            Hands-on Learning
          </h2>

          <p className="relative flex text-sm md:text-lg md:text-left z-10">
            No matter which prompt you choose, each project provides hands-on
            experience and an opportunity to explore a new discipline.
          </p>

          <Image
            src="/Images/allabout/frog.svg"
            alt="Frog mascot"
            width={110}
            height={144}
            className="absolute top-0 right-14 md:transition-all duration-1000 ease-out group-hover:scale-125 group-hover:translate-y-48 -z-10"
          />
        </div>

        <div className="relative flex flex-col h-full w-60 md:w-auto border-2 border-shadow rounded-xl shadow-card p-5 md:p-8 bg-secondary gap-3 group">
          <h2 className="relative text-lg md:text-2xl text-left md:text-left font-bold z-10">
            Inclusivity
          </h2>

          <p className="relative flex text-sm md:text-lg md:text-left z-10">
            We invite individuals of all backgrounds to learn new skills and
            grow in an inclusive environment.
          </p>

          <Image
            src="/Images/allabout/chicken.svg"
            alt="Frog mascot"
            width={110}
            height={144}
            className="absolute top-2 right-14 md:transition-all duration-1000 ease-out group-hover:scale-125 group-hover:translate-y-48 -z-10"
          />
        </div>

        <div className="relative flex flex-col h-full w-60 md:w-auto border-2 border-shadow rounded-xl shadow-card p-5 md:p-8 bg-secondary gap-3 group">
          <h2 className="relative text-lg md:text-2xl text-left md:text-left font-bold z-10">
            Impactful projects
          </h2>

          <p className="relative flex text-sm md:text-lg md:text-left z-10">
            Create meaningful, impactful, and innovative solutions that benefit
            local and global communities.
          </p>

          <Image
            src="/Images/allabout/rabbit.svg"
            alt="Frog mascot"
            width={110}
            height={144}
            className="absolute top-4 right-14 md:transition-all duration-100 ease-out group-hover:scale-125 group-hover:translate-y-48 -z-10"
          />
        </div>
      </div>
    </div>
  );
}
