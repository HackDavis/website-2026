import Hero from '@app/(pages)/about-us/_components/Hero/Hero';
import Header from '@components/Header/Header';
import Directors from './_components/Directors/directors';
import OurTeam from './_components/OurTeam/OurTeam';
import AllAbout from './_components/AllAbout/AllAbout';
import Archives from './_components/Archives/Archives';
import CelebratePast from './_components/CelebratePast/celebratePast';

export default function AboutUs() {
  return (
    <div className="relative">
      <Header />

      <section id="about-hero" data-header-theme="dark">
        <Hero />
      </section>

      <section id="about-allabout" data-header-theme="light">
        <AllAbout />
      </section>

      <section id="about-directors" data-header-theme="light">
        <Directors />
      </section>

      <section id="about-team" data-header-theme="light">
        <OurTeam />
      </section>

      <section id="about-celebrate" data-header-theme="light">
        <CelebratePast />
      </section>

      <section id="about-archives" data-header-theme="light">
        <Archives />
      </section>
    </div>
  );
}
