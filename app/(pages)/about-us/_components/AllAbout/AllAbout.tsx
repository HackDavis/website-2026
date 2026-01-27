import Image from 'next/image';

export default function AllAbout() {
  return (
    <div className="flex flex-col gap-6 lg:pb-40">
      <div className="px-[15%] text-left">
        <h1 className="text-3xl lg:text-5xl font-bold leading-none">
          What we're all about
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-10 px-[15%] justify-items-center lg:grid-cols-3 lg:gap-8 lg:items-stretch">
        <div className="relative flex flex-col h-full w-full max-w-[22rem] lg:max-w-none border-2 border-shadow rounded-xl shadow-card p-5 lg:p-8 bg-secondary gap-3 group justify-self-start lg:justify-self-auto">
          <h2 className="relative text-lg lg:text-2xl font-bold z-10">
            Hands-on Learning
          </h2>

          <p className="relative text-sm lg:text-lg z-10">
            No matter which prompt you choose, each project provides hands-on
            experience and an opportunity to explore a new discipline.
          </p>

          <Image
            src="/Images/allabout/frog.svg"
            alt="Frog mascot"
            width={110}
            height={144}
            className="hidden lg:block absolute top-0 right-14 transition-all duration-1000 ease-out group-hover:scale-125 group-hover:translate-y-48 -z-10"
          />
        </div>

        <div className="relative flex flex-col h-full w-full max-w-[22rem] lg:max-w-none border-2 border-shadow rounded-xl shadow-card p-5 lg:p-8 bg-secondary gap-3 group justify-self-end lg:justify-self-auto">
          <h2 className="relative text-lg lg:text-2xl font-bold z-10">
            Inclusivity
          </h2>

          <p className="relative text-sm lg:text-lg z-10">
            We invite individuals of all backgrounds to learn new skills and
            grow in an inclusive environment.
          </p>

          <Image
            src="/Images/allabout/chicken.svg"
            alt="Chicken mascot"
            width={110}
            height={144}
            className="hidden lg:block absolute top-2 right-14 transition-all duration-1000 ease-out group-hover:scale-125 group-hover:translate-y-48 -z-10"
          />
        </div>

        <div className="relative flex flex-col h-full w-full max-w-[22rem] lg:max-w-none border-2 border-shadow rounded-xl shadow-card p-5 lg:p-8 bg-secondary gap-3 group justify-self-start lg:justify-self-auto">
          <h2 className="relative text-lg lg:text-2xl font-bold z-10">
            Impactful projects
          </h2>

          <p className="relative text-sm lg:text-lg z-10">
            Create meaningful, impactful, and innovative solutions that benefit
            local and global communities.
          </p>

          <Image
            src="/Images/allabout/rabbit.svg"
            alt="Rabbit mascot"
            width={110}
            height={144}
            className="hidden lg:block absolute top-4 right-14 transition-all duration-100 ease-out group-hover:scale-125 group-hover:translate-y-48 -z-10"
          />
        </div>
      </div>
    </div>
  );
}
