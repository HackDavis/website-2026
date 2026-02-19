import Image from 'next/image';
import tent from '@public/Images/donor_scroll/tent.svg';
import mobile_cloud from '@public/Images/donor_scroll/mobile_cloud.svg';
import Donors from '@app/(pages)/registration/Donors/Donors';

export default function DonorScroll() {
  return (
    <div className="donor-scroll-section py-5 flex flex-col items-center relative w-full min-h-[140vw] sm:min-h-[1100px] overflow-x-clip bg-[#11043F]">
      <Image
        src={mobile_cloud}
        alt="Cloud"
        className="h-auto w-full sm:w-[140vw] md:w-[38vw] right-0 absolute top-0"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center">
        <Donors />
      </div>

      <Image
        src={tent}
        alt="Tent"
        className="hidden md:block md:h-[580px] md:mt-[30%] md:ml-[80px] z-20"
      />

      <div className="h-[120px] bg-[#080022] w-full -mt-[120px]" />
    </div>
  );
}
