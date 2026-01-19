import Image from 'next/image';

export default function AllAbout() {
  return (
    <div className="flex flex-col gap-8 text-center bg-background border-black pb-40">
      <div className="text-left">
        <h1 className="px-[7%] font-bold leading-none">What we're all about</h1>
      </div>

      <div className="box flex flex-row justify-between px-[8%]">
        <div className="box relative flex flex-col w-96 h-60 border-2 border-shadow rounded-xl shadow-card p-8 bg-secondary gap-3 group">
          <h2 className="relative text-2xl text-left font-bold z-10">
            Hands-on learning
          </h2>

          <p className="relative text-lg text-left z-10">
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

        <div className="box relative flex flex-col w-96 h-60 border-2 border-shadow rounded-xl shadow-card p-8 bg-secondary gap-3 group">
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

        <div className="box relative flex flex-col w-96 h-60 border-2 border-shadow rounded-xl shadow-card p-8 bg-secondary gap-3 group">
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
