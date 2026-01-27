import Hero from '@app/(pages)/about-us/_components/Hero/Hero';
import Header from '@components/Header/Header';
import Directors from './_components/Directors/directors';
import OurTeam from './_components/OurTeam/OurTeam';

export default function AboutUs() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Directors />
      <OurTeam />
    </div>
  );
}
