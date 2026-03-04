import HeroSection from "./hero/HeroSection";
import Sponsor from "./Sponsor";
import StepSection from "./Steps/StepSection";
import FeaturedJobs from "./Featured/FeaturedJobs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Sponsor />
      <FeaturedJobs />
      <StepSection />
    </>
  );
}
