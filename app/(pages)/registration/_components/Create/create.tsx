import Image from 'next/image';
import HeartButton from '@app/(pages)/(index-page)/_components/HeartButton/heartButton';

export default function create() {
  return (
    <div className="relative flex flex-col gap-7 border-2 w-auto">
      <Image
        src="/Images/Create/glue.svg"
        alt="Glue Bottle"
        width={280}
        height={450}
        className="absolute top-0 right-0 mt-auto w-auto h-[450px]"
      />

      <Image
        src="/Images/Create/wave3.svg"
        alt="Wave Background"
        width={280}
        height={450}
        className="absolute top-0 right-[2%] mt-[220px] w-auto h-[1142px]"
      />

      <div className="relative flex mt-[215px] mr-auto gap-8 min-w-0 w-[85%]">
        <Image
          src="/Images/Create/bigyellowstar.svg"
          alt="Big Yellow Star"
          width={111}
          height={111}
          className="absolute w-auto h-[130px] ml-[20%] -mt-[7%] transition-transform duration-300 hover:animate-spin-10"
        />

        <Image
          src="/Images/Create/frog-background.svg"
          alt="Frog Background"
          width={420}
          height={130}
          className="h-auto mt-auto min-w-[100px] w-[420px] flex-shrink-[0.25]"
        />

        <div
          className="flex flex-col gap-6 max-w-[460px] min-w-[350px] h-auto py-12 px-12 rounded-[40px] bg-gradient-to-t from-[#9EE7E5] to-[#D5F6E9]"
        >
          <h2 className="w-[80%] text-4xl font-bold text-[#005271] tracking-[0.771px]">
            create for social good
          </h2>

          <p className="text-base leading-[1.25] tracking-[0.335px]">
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

        <Image
          src="/Images/Create/greenflower.svg"
          alt="Green Flower"
          width={131}
          height={131}
          className="ml-[2%] mt-auto mb-[4%] h-[131px] transition-transform duration-300 hover:animate-spin-10"
        />
      </div>

      <div className="flex gap-8 mr-auto mb-[50px]">
        <Image
          src="/Images/Create/yellow.svg"
          alt="Yellow Background"
          width={125}
          height={525}
          className="h-[525px] w-auto"
        />

        <div className="flex flex-col gap-6 w-[50%] h-[401px] py-14 px-12 rounded-[40px] bg-gradient-to-t from-[#4BD8EA] to-[#9EE7E5]">
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

          <HeartButton text="Donate" href="	" />
        </div>

        <Image
          src="/Images/Create/rabbit-background.svg"
          alt="Surprised Bunny"
          width={500}
          height={288}
          className="mb-auto w-[500px] h-[288px]"
        />
      </div>

      <Image
        src="/Images/Create/pinkflower.svg"
        alt="Pink Flower"
        width={111}
        height={111}
        className="absolute w-auto h-[78px] bottom-0 ml-[13%] transition-transform duration-300 hover:animate-spin-10"
      />

      <Image
        src="/Images/Create/bluedonut.svg"
        alt="Blue Flower"
        width={111}
        height={111}
        className="absolute w-auto h-[200px] bottom-0 mb-[2%] ml-[45%] transition-transform duration-300 hover:animate-spin-10"
      />
    </div>
  );
}
