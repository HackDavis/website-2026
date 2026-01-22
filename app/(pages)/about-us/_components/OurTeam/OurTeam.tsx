'use client';

import { useMemo, useState } from 'react';
import teamMembersRaw from '../../_data/teamMembers.json';
import ProfileCard from './_components/ProfileCard';

type TeamMember = {
  name: string;
  position: string;
  profile_image_url?: string;
  team_category: string;
  year: number;
  linkedinURL: string;
  _id?: { $oid?: string };
};

const filterBase =
  'px-5 py-2 rounded-full uppercase cursor-pointer whitespace-nowrap transition';

export default function OurTeam() {
  const teamMembers = teamMembersRaw as TeamMember[];

  const categories = [
    'Technical',
    'Operations',
    'Sponsorship',
    'Marketing',
    'Finance',
    'External',
    'Design',
  ];

  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0] ?? 'All'
  );

  const filteredMembers = useMemo(() => {
    if (!activeCategory) return teamMembers;
    return teamMembers.filter((m) => m.team_category === activeCategory);
  }, [teamMembers, activeCategory]);

  const tabClass = (active: boolean) =>
    [
      filterBase,
      active
        ? 'bg-[var(--card-light-blue)] text-[var(--text-dark)]'
        : 'bg-[var(--text-dark)] text-white border border-[var(--text-dark)] hover:bg-[var(--card-light-blue)]',
    ].join(' ');

  return (
    <section className="px-[10%] py-[1%]">
      {/* Tabs */}
      <div className="mb-10 flex gap-4 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={tabClass(cat === activeCategory)}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-8 grid-cols-3 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 place-items-center">
        {filteredMembers.map((m) => (
          <ProfileCard
            key={`${m.name}-${m.year}`}
            name={m.name}
            title={m.position}
            imageUrl={m.profile_image_url}
            linkedinURL={m.linkedinURL}
          />
        ))}
      </div>
    </section>
  );
}
