import heroImage1 from "@assets/images/hero-image-1-053a950af2f348330533d1ffb007f0b7.png";
import heroImage2 from "@assets/images/hero-image-2-97093caf3dc44622d56f8354eaacdb24.png";
import HeroSearch from "./HeroSearch";
export default function HeroSection() {
  return (
    <div className="flex justify-between my-2 gap-2.5">
      {/* left */}
      <div className="w-1/2  flex flex-col justify-center gap-8">
        <div className="flex flex-col items-center gap-7 justify-center w-[80%]">
          <h1 className="text-6xl font-bold">
            Get hired by the popular teams.
          </h1>
          <p className="text-xl text-paragraph">
            Explore high-paying jobs, connect with top recruiters, and build the
            career you deserve. Simple, fast, and effective.
          </p>
        </div>
        <HeroSearch />
      </div>
      {/* right image */}
      <div className="flex gap-6 w-1/2">
        <img className="max-w-[642.5px]" src={heroImage1} alt="" />
        <img src={heroImage2} alt="" />
      </div>
    </div>
  );
}
