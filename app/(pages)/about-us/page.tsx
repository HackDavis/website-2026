import Hero from '@app/(pages)/about-us/_components/Hero/Hero';
import Header from '@components/Header/Header';
import Directors from './_components/Directors/directors';
import OurTeam from './_components/OurTeam/OurTeam';
import AllAbout from './_components/AllAbout/AllAbout';

export default function AboutUs() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <AllAbout />
      <Directors />
      <OurTeam />
    </div>
  );
}
