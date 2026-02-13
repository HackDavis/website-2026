import Image from 'next/image';

export default function TenYears() {
  return (
    <div className="relative flex flex-col">
	      <Image
        src="/Images/cheers/wave.svg"
        alt="Light green wave"
        width={80}
        height={80}
        className="absolute top-[15%] sm:top-[10%] left-[55%] sm:left-[50%] h-[240px] sm:h-[500px] xl:h-[895px] w-auto"
      />

      <Image
        src="/Images/cheers/flying-rabbit.svg"
        alt="Bunny mascot"
        width={80}
        height={80}
        className="hidden md:block absolute top-[3%] left-[47%] animate-bounce"
      />

      <Image
        src="/Images/cheers/flying-chicken.svg"
        alt="Duck mascot"
        width={80}
        height={80}
        className="hidden md:block absolute top-[8%] left-[53%] animate-bounce"
        style={{ animationDelay: '0.5s' }}
      />

      <Image
        src="/Images/cheers/flying-frog.svg"
        alt="Frog mascot"
        width={80}
        height={80}
        className="hidden md:block absolute top-[15%] right-[36%] animate-bounce"
        style={{ animationDelay: '1s' }}
      />

      <Image
        src="/Images/cheers/flying-cow.svg"
        alt="Cow mascot"
        width={80}
        height={80}
        className="hidden md:block absolute top-[20%] right-[30%] animate-bounce"
        style={{ animationDelay: '1.5s' }}
      />

      <Image
        src="/Images/cheers/cheers.svg"
        alt="Cheers to 10 years!"
        width={110}
        height={144}
        className="object-cover w-[400px] sm:w-[525px] xl:w-[872px] mt-[40%] sm:mt-[20%] md:mt-[15%] lg:ml-[10%] z-10"
      />

      <Image
        src="/Images/cheers/sm-pink-flower.svg"
        alt="Small Pink Flower"
        width={110}
        height={144}
        className="absolute right-[20%] sm:right-[2%] -bottom-[10%] sm:bottom-[10%] md:bottom-[20%] w-[70px] xl:w-[120px] h-auto ml-auto sm:-mr-4"
      />
    </div>
  );
}
