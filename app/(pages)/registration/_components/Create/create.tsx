import Image from 'next/image';

export default function create() {
  return (
    <div className="flex flex-col gap-7">
      <div className="relative flex mr-auto gap-8 w-[60%]">
        <Image
          src="/Images/frog-background.svg"
          alt="Frog Background"
          width={420}
          height={130}
          className="mt-auto w-auto h-[330px]"
        />

        <div className="flex flex-col gap-6 w-[37%] py-14 px-12 rounded-[40px] bg-gradient-to-t from-[#9EE7E5] to-[#D5F6E9]">
          <h2 className="text-4xl font-bold text-[#005271]">
            create for social good
          </h2>

          <p className="text-base">
            HackDavis challenges its participants to utilize tech for{' '}
            <span className="font-bold text-[#005271]">social good</span>,
            generating an opportunity for us to explore the{' '}
            <span className="font-bold text-[#005271]">
              intersection between technology and society.
            </span>
          </p>

          <p className="text-base">
            Creators from all backgrounds are welcome at HackDavis —{' '}
            <span className="font-bold text-[#005271]">
              no coding or previous experience required.
            </span>
          </p>
        </div>
      </div>

      <div className="flex gap-8 mr-auto w-[60%]">
        <Image
          src="/Images/yellow.svg"
          alt="Yellow Background"
          width={125}
          height={525}
          className="h-[525px] w-auto"
        />

        <div className="flex flex-col gap-6 w-[37%] h-[401px] py-14 px-12 rounded-[40px] bg-gradient-to-t from-[#9EE7E5] to-[#D5F6E9]">
          <h2 className="text-4xl text-center font-bold text-[#005271]">
            support us!
          </h2>

          <Image
            src="/Images/frog.svg"
            alt="Filler Image"
            width={500}
            height={288}
            className="mb-auto w-[500px] h-[136px]"
          />

          <p className="text-base w-[195px] h-[56px]">Button Here</p>
        </div>

        <Image
          src="/Images/rabbit-background.svg"
          alt="Surprised Bunny"
          width={500}
          height={288}
          className="mb-auto w-[500px] h-[288px]"
        />
      </div>
    </div>
  );
}
