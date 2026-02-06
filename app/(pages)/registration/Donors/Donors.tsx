import { LuHeart } from 'react-icons/lu';

function DonorRow({
  rowNames,
  rowNum,
}: {
  rowNames: string[];
  rowNum: number;
}) {
  return (
    <div className="flex flex-row inline-flex overflow-hidden justify-center items-center">
      <div
        className={
          'flex flex-row inline-flex gap-[2vw] hover:[animation-play-state:paused] whitespace-nowrap ' +
          (rowNum === 1 ? 'animate-sponsers-row1' : 'animate-sponsers-row2')
        }
      >
        {[...rowNames, ...rowNames, ...rowNames].map((name, i) => (
          <div
            key={`${i}-${name}`}
            className="glass-pill flex items-center justify-center !p-[1vw] !px-[2.5vw]"
          >
            <p className="cursor-default text-[1vw] text-white font-metropolis uppercase font-medium">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Donors() {
  const row1_names = [
    'Pranav Lal',
    'Anonymous',
    'Pranav Lal',
    'Anonymous',
    'Pranav Lal',
    'Anonymous',
  ];

  const row2_names = [
    'Alex Marasigan',
    'Also ALEX Marasigan',
    'Also Also ALEX Marasigan',
    'Also Also Also ALEX Marasigan',
    'Also Also Also Also ALEX Marasigan',
    'Also Also Also Also Also ALEX Marasigan',
  ];

  return (
    <div className="bg-darkpurple py-[3vw] gap-[2vw] flex flex-col">
      <div className="flex flex-row items-center justify-center gap-[1.5vw]">
        <p className="text-[3vw] text-white flex justify-center items-center font-inter font-semibold">
          And a special thanks to our donors!
        </p>
        <LuHeart className="text-white text-[3vw]" />
      </div>
      <DonorRow rowNames={row1_names} rowNum={1} />
      {/* <DonorRow rowNames={row2_names} rowNum={2} />*/}
    </div>
  );
}
