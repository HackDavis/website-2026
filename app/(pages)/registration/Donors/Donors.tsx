'use client';

function DonorRow({ rowNames, rowNum }: { rowNames: string[]; rowNum: 1 | 2 }) {
  const anim = rowNum === 2 ? 'animate-sponsor-right' : 'animate-sponsor-left';

  return (
    <div className="group w-full overflow-hidden">
      <div
        className={`flex w-max items-center whitespace-nowrap gap-[2vw] ${anim} group-hover:[animation-play-state:paused]`}
      >
        {/* copy A */}
        {rowNames.map((name, i) => (
          <div
            key={`a-${i}`}
            className="glass-pill flex items-center justify-center !p-[1vw] !px-[2.5vw]"
          >
            <p className="cursor-default text-[1vw] text-white font-metropolis uppercase font-medium">
              {name}
            </p>
          </div>
        ))}

        {/* copy B (identical) */}
        {rowNames.map((name, i) => (
          <div
            key={`b-${i}`}
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
    'Haylie Tan',
    'Anonymous',
    'Michelle Yeoh',
    'Sandeep Reehal',
    'Afifah Hadi',
    'Kelly Tran',
    'Alex Marasigan',
    'Sidney Heng',
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
    <div className="bg-darkpurple mt-[8%] gap-[1.5vw] py-[4vw] px-[3vw] flex flex-col">
      <div className="flex flex-row items-center justify-center gap-[1.5vw]">
        <p className="text-white text-[36px] flex justify-center items-center text-xl font-semibold">
          And a special thanks to our donors!
        </p>
      </div>

      <DonorRow rowNames={row1_names} rowNum={1} />
      <DonorRow rowNames={row2_names} rowNum={2} />
    </div>
  );
}
