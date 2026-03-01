'use client';

function DonorRow({ rowNames, rowNum }: { rowNames: string[]; rowNum: 1 | 2 }) {
  const anim = rowNum === 2 ? 'animate-sponsor-right' : 'animate-sponsor-left';

  return (
    <div className="group w-full overflow-hidden">
      <div
        className={`flex w-max items-center whitespace-nowrap gap-[2vw] ${anim} group-hover:[animation-play-state:paused]`}
      >
        {/* Triple the array to guarantee the screen is always full */}
        {[...rowNames, ...rowNames, ...rowNames].map((name, i) => (
          <div
            key={i}
            className="glass-pill flex items-center justify-center !p-[1vw] !px-[2.5vw]"
          >
            <p className="cursor-default text-[14px] md:text-[1vw] text-white font-metropolis uppercase font-medium">
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
    'Michelle Yeoh',
    'Sandeep Reehal',
    'Afifah Hadi',
    'Kelly Tran',
    'Alex Marasigan',
    'Sidney Heng',
    'Jack Zheng',
    'Ravi Surinder Singh Sandhu',
    'Roshan Pandey',
    'Sathiyaseelan Kandiah',
    'Stanley Kim',
    'Thenushaa Kandiah',
    'Trang Nguyen',
    'Vivek Sandhu',
    'Vivek Shome',
    'Vivian Nguyen',
    'Youza Pak',
    'Zhaoheng Ding',
  ];

  const row2_names = [
    'Alexander Do',
    'Anna Pandey',
    'Ashley Heng',
    'Asif Mansoor Amanullah',
    'Christina Chung',
    'Christina Zhu',
    'Eric Lin',
    'Glenn Suravech',
    'Hung Nguyen',
    'Jayden Kwong',
    'Levi Tobias Loureiro',
    'Lynn Farias',
    'Mai Nguyen',
    'Orion Ho',
    'Pranav Lal',
    'Ram Pandey',
  ];

  return (
    <div className="bg-darkpurple mt-[8%] gap-[1.5vw] py-[4vw] px-[3vw] flex flex-col">
      <div className="flex flex-row items-center justify-center gap-[1.5vw]">
        <p className="text-white flex justify-center items-center text-[20px] md:text-[35px] font-semibold">
          And a special thanks to our donors! ♡
        </p>
      </div>

      <DonorRow rowNames={row1_names} rowNum={1} />
      <DonorRow rowNames={row2_names} rowNum={2} />
    </div>
  );
}
