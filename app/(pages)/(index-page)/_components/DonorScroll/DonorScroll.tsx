import Image from 'next/image';
import tent from '@public/Images/donor_scroll/tent.svg';
import mobile_cloud from '@public/Images/donor_scroll/mobile_cloud.svg';
import Donors from '@app/(pages)/registration/Donors/Donors';

export default function DonorScroll() {
  return (
    <>
      <div className="donor-scroll-section flex flex-col items-center relative w-full h-[100vw] sm:h-[800px] overflow-x-clip bg-[#11043F]">
        <Image
          src={mobile_cloud}
          alt="Cloud"
          className="h-auto w-full sm:w-[140vw] md:w-[38vw] right-0 absolute top-0 "
        />
        <Image
          src={tent}
          alt="Tent"
          className="hidden pb-[2%] md:block md:h-[580px] md:mt-[300px] md:ml-[80px] z-10"
        />
        <Donors />
        {/* Just a black div to elevate the 'ground' */}
        <div className="h-0 md:h-[250px] bg-[#080022] w-full -mt-[120px]"></div>
      </div>
    </>
  );
}
