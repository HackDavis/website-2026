import type { TrackData } from '@data/tracks';
import PrizeCard from './PrizeCard';

export default function PrizeGrid({ items }: { items: TrackData[] }) {
  return (
    <main className="grid grid-cols-1 gap-8 lg:gap-12 w-full ">
      {items.map((item) => {
        return (
          <PrizeCard
            key={item.name}
            name={item.name}
            prizeNames={item.prizes}
            prizeImages={item.images}
            criteria={item.eligibility_criteria}
          />
        );
      })}
    </main>
  );
}
