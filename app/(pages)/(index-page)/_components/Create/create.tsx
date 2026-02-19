import Image from 'next/image';
import HeartButton from '@app/(pages)/(index-page)/_components/HeartButton/heartButton';

export default function Create() {
  return (
    <div className="relative flex flex-col gap-5 w-full md md:w-auto md:mb-32">
      {/* Background decorative images - hidden on mobile */}
      <Image
        src="/Images/Create/glue.svg"
        alt="Glue Bottle"
        width={280}
        height={450}
        className="hidden xl:block absolute top-0 right-0 mt-auto w-auto h-[450px]"
      />

      <Image
        src="/Images/Create/wave3.svg"
        alt="Wave Background"
        width={280}
        height={450}
        className="hidden xl:block absolute top-0 right-0 mt-[250px] w-auto h-[1142px]"
      />

      {/* First Section - Create for Social Good */}
      <div className="relative flex flex-col items-center md:items-start md:flex-row mt-8 md:mt-[215px] gap-4 md:gap-8 w-full md:w-[100%] md:mr-auto md:min-w-0 ">
        <Image
          src="/Images/Create/bigyellowstar.svg"
          alt="Big Yellow Star"
          width={111}
          height={111}
          className="hidden md:block absolute w-auto h-[130px] ml-[20%] -mt-[8%] transition-transform duration-300 animate-spin-10"
        />

        {/* Frog + Yellow bar wrapper - side by side on mobile */}
        <div className="flex  border-red justify-between flex-row-reverse w-full gap-7 md:contents">
          <Image
            src="/Images/Create/yellow.svg"
            alt="Yellow Background"
            width={125}
            height={525}
            className="hidden md:hidden w-auto h-[322px]"
          />

          <Image
            src="/Images/Create/sm-yellow.svg"
            alt="Yellow Background"
            width={125}
            height={525}
            className="md:hidden  w-auto h-[322px]"
          />

          <Image
            src="/Images/Create/frog-background.svg"
            alt="Frog Background"
            width={420}
            height={130}
            className=" hidden sm:block sm:max-h-[348px] w-full sm:-mb-[15px] md:mb-0 md:mt-auto sm:min-w-[100px] md:max-w-[420px] md:flex-shrink"
          />

          <Image
            src="/Images/Create/sm-frog-background.svg"
            alt="Frog Background"
            width={280}
            height={296}
            className="flex-shrink-0 sm:hidden w-[315px] h-[348px] mt-auto -mb-[15px] md:hidden"
          />
        </div>

        <div className="flex flex-col flex-shrink-0 gap-4 md:gap-6 w-[360px] px-8 py-12 md:px-12 rounded-[40px] bg-gradient-to-t from-[#9EE7E5] to-[#D5F6E9]">
          <h2 className="flex flex-shrink text-4xl min-w-0 max-w-[80%] font-bold text-[#005271] tracking-[0.771px]">
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
          className="hidden xl:block ml-[2%] mt-auto mb-[4%] h-[131px] transition-transform duration-300 animate-spin-10"
        />
      </div>

      {/* Second Section - Support Us & Rabbit */}
      <div className="flex flex-col items-center md:items-stretch md:flex-row gap-5 md:gap-8 w-full md:w-[100%] md:mr-auto mb-8 md:mb-[50px]">
        {/* Yellow background - desktop only */}
        <Image
          src="/Images/Create/yellow.svg"
          alt="Yellow Background"
          width={125}
          height={525}
          className="hidden md:block w-auto h-[100px]flex-shrink"
        />

        <Image
          src="/Images/Create/sm-rabbit-background.svg"
          alt="Small Surprised Bunny"
          width={500}
          height={288}
          className="pl-4 h-[288px] ml-auto md:hidden"
        />

        {/* Support Us card */}
        <div className="flex flex-shrink w-[360px] h-[360px] md:min-w-[300px] md:max-w-[400px] aspect-[1/1]">
          <div className="flex flex-col items-center gap-4 md:gap-6 w-full md:max-w-[460px] md:h-[400px] px-16 py-9 md:py-14 md:px-12 rounded-[40px] bg-gradient-to-t from-[#4BD8EA] to-[#9EE7E5]">
            <h2 className="text-2xl md:text-4xl text-center font-bold text-[#005271]">
              support us!
            </h2>
            <a
              href="https://www.guidestar.org/profile/shared/4cf39094-2e34-44e6-890e-7a547408155b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Images/Create/support.svg"
                alt="Platinum Transparency 2025 Candid"
                width={500}
                height={288}
                className="mb-auto w-[170px] md:w-[136px] h-auto md:h-[136px] object-contain"
              />
            </a>
            <HeartButton
              text="Donate"
              href="https://giveto.ucdavis.edu/schools/UniversityofCaliforniaDavis/crowdfund-uc-davis-february-2026/pages/hackdavis/?a=12060603"
            />
          </div>

          <Image
            src="/Images/Create/pinkflower.svg"
            alt="Pink Flower"
            width={111}
            height={111}
            className="hidden md:block absolute w-auto h-[78px] -bottom-[5%] ml-[10%] transition-transform duration-300 animate-spin-10"
          />
        </div>

        {/* Rabbit section - desktop only */}
        <div className="hidden md:flex flex-shrink relative">
          <Image
            src="/Images/Create/rabbit-background.svg"
            alt="Surprised Bunny"
            width={500}
            height={288}
            className="mb-auto w-full max-h-[288px] h-auto origin-bottom-right"
          />

          <Image
            src="/Images/Create/bluedonut.svg"
            alt="Blue Flower"
            width={111}
            height={111}
            className="absolute w-auto h-[200px] bottom-0 mb-[2%] transition-transform duration-300 animate-spin-10"
          />
        </div>
      </div>
    </div>
  );
}
