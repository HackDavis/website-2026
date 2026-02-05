import Image from 'next/image';

export default function TenYears() {
  return (
    <div>
      <Image
        src="/Images/cheers/cheers.svg"
        alt="Cheers to 10 years!"
        width={110}
        height={144}
        className="ml-[8%] w-[915px] h-[695px]"
      />
    </div>
  );
}
