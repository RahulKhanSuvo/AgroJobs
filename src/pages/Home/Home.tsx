import HeroSection from "./hero/HeroSection";
import Sponsor from "./Sponsor";
import FeaturedJobs from "./Featured/FeaturedJobs";
import WhyJobZilla from "./Why/WhyJobZilla";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedJobs />
      <Sponsor />
      <WhyJobZilla />
    </>
  );
}
