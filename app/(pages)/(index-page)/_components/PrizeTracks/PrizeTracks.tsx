'use client';

import { allTracks, TrackData } from '@data/tracks';
import PrizeGrid from './PrizeGrid';
import { useState } from 'react';
import PrizeTracksMobileControls from './PrizeTracksMobileControls';

const prizes = Object.values(allTracks);
const PRIZE_TRACK_FILTERS = [
  'ALL',
  'GENERAL',
  'TECHNICAL',
  'DESIGN',
  'BUSINESS',
  'SPONSOR',
  'NON-PROFIT',
] as const;

export default function PrizeTracks() {
  const [filter, setFilter] = useState<string>('all');
  const [filteredPrizes, setFilteredPrizes] = useState<TrackData[]>(prizes);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter.toLowerCase());
    setFilteredPrizes(() => {
      if (selectedFilter.toLowerCase() === 'all') {
        return prizes;
      }
      return prizes.filter(
        (prize) => prize.filter.toLowerCase() === selectedFilter.toLowerCase()
      );
    });
  };

  return (
    <main className="flex flex-col gap-4 px-[5%] py-[15%] md:py-[8%] bg-[#FAFAFF]">
      <Header />
      <DesktopFilterRow
        currentFilter={filter}
        onFilterChange={handleFilterChange}
      />
      <PrizeTracksMobileControls
        currentFilter={filter}
        onFilterChange={handleFilterChange}
        isMobileFilterOpen={isMobileFilterOpen}
        setIsMobileFilterOpen={setIsMobileFilterOpen}
        filters={PRIZE_TRACK_FILTERS}
      />
      <div className="flex items-center justify-center w-full mt-8">
        <PrizeGrid items={filteredPrizes} />
      </div>
    </main>
  );
}

function Header() {
  return (
    <div className="flex flex-col">
      <h3 className="font-medium text-4xl font-metropolis mt-4">Prizes</h3>
    </div>
  );
}

interface FilterRowProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

function DesktopFilterRow({ currentFilter, onFilterChange }: FilterRowProps) {
  return (
    <div className="hidden md:flex gap-4 overflow-x-scroll no-scrollbar">
      {PRIZE_TRACK_FILTERS.map((track) => {
        const isActive = currentFilter.toLowerCase() === track.toLowerCase();
        return (
          <button
            key={track}
            type="button"
            className={`flex w-[163px] h-[45px] px-[38px] py-[13px] justify-center items-center rounded-[22.5px] font-jakarta text-sm sm:text-[16px] font-semibold leading-[100%] tracking-[0.32px] transition-all duration-200 whitespace-nowrap ${
              isActive
                ? 'bg-[#3F3F3F] text-[#FAFAFF]'
                : 'bg-[#F3F3FC] text-[#3F3F3F] hover:bg-gray-100'
            }`}
            onClick={() => onFilterChange(track)}
          >
            {track}
          </button>
        );
      })}
    </div>
  );
}
