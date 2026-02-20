import Image from 'next/image';
import tent from '@public/Images/donor_scroll/tent.svg';
import mobile_cloud from '@public/Images/donor_scroll/mobile_cloud.svg';
import Donors from '@app/(pages)/(index-page)/_components/Donors/Donors';

export default function DonorScroll() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#11043F] min-h-[140vw] sm:min-h-[1100px]">
      {/* Cloud */}
      <Image
        src={mobile_cloud}
        alt="Cloud"
        className="absolute top-0 right-0 h-auto w-full sm:w-[140vw] md:w-[38vw] z-0"
      />

      {/* Donors overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center">
        <Donors />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center z-20">
        <Image
          src={tent}
          alt="Tent"
          className="hidden md:block md:h-[580px] md:w-auto"
        />
        <div className="w-full h-[120px] -mt-[8%] bg-[#080022] -z-30" />
      </div>
    </div>
  );
}
