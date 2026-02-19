import HeroInfo from './_components/heroInfo/heroInfo';
import Stats from './_components/Stats';
import TenYears from './_components/TenYears';
import AccordionFAQ from './_components/FAQ/faq';
import Create from './_components/Create/create';

import React from 'react';
import Donors from '../registration/Donors/Donors';
import Sponsers from '../registration/Sponsers/Sponsers';
export default function Home() {
  return (
    <div className="pt-40 w-full">
      <HeroInfo />
      <TenYears />
      <Stats />
      <Create />
      <AccordionFAQ />
      <Sponsers />
      <Donors />
    </div>
  );
}
