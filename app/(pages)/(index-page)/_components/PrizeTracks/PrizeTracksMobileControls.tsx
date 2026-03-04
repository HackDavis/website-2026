import Image from 'next/image';

interface PrizeTracksMobileControlsProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
  filters: readonly string[];
}

export default function PrizeTracksMobileControls({
  currentFilter,
  onFilterChange,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  filters,
}: PrizeTracksMobileControlsProps) {
  const hasSelectedFilter = currentFilter.toLowerCase() !== 'all';

  return (
    <div className="md:hidden">
      <div className="flex items-start justify-between gap-4">
        <div>
          <button
            onClick={() => setIsMobileFilterOpen((prev) => !prev)}
            type="button"
            className={`relative inline-flex w-fit min-w-[52px] h-[45px] px-3 py-[13px] justify-center items-center rounded-[22.5px] font-jakarta text-sm font-semibold leading-[100%] tracking-[0.32px] transition-all duration-200 shrink-0 ${
              isMobileFilterOpen || hasSelectedFilter
                ? 'bg-[#3F3F3F]'
                : 'bg-[#F3F3FC]'
            }`}
          >
            <Image
              src={
                isMobileFilterOpen
                  ? '/icons/white_x.svg'
                  : '/icons/hamburger_filter.svg'
              }
              alt={isMobileFilterOpen ? 'Close filters' : 'Open filters'}
              width={16}
              height={16}
              className={
                !isMobileFilterOpen && hasSelectedFilter ? 'invert' : ''
              }
            />
          </button>
        </div>
      </div>

      {isMobileFilterOpen && (
        <div className="mt-4 w-full flex flex-col gap-3">
          {filters.map((filter) => (
            <button
              key={`mobile-filter-${filter}`}
              onClick={() => {
                onFilterChange(filter);
                setIsMobileFilterOpen(false);
              }}
              type="button"
              className="relative flex w-full h-[45px] px-4 py-[13px] justify-center items-center rounded-[22.5px] font-jakarta text-sm font-semibold leading-[100%] tracking-[0.32px] transition-all duration-200"
              style={{
                backgroundColor:
                  currentFilter.toLowerCase() === filter.toLowerCase()
                    ? '#3F3F3F'
                    : '#F3F3FC',
                color:
                  currentFilter.toLowerCase() === filter.toLowerCase()
                    ? '#FAFAFF'
                    : '#3F3F3F',
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
