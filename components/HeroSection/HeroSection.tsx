import SkillsAutoScroll from "./components/SkillsAutoScroll";
import TypeWriter from "../TypeWriter/TypeWriter";
import FadeContent from "../Animations/FadeContent";
import IdeaEclipse from "./components/IdeaEclipse";
import Image from "next/image";
const typoData: string[] = [
  "ux and ui design",
  "curiosity and innovation",
  "strategy and process",
];

const HeroSection = () => {
  return (
    <div
      id="home"
      className="h-[100vh] flex items-center justify-center flex-col relative bg-background bg-no-repeat bg-cover bg-[url('/images/dots-bg.png'),url('/images/bg-gradient.png')] bg-center"
    >
      {/* Hero Text */}
      <div className="relative text-center px-4 mb-[80px] ">
        {/* Decorative Props */}
        <Image
          src="/images/decoresImg/shining_star.png"
          alt="Star Decor"
          width={47}
          height={67}
          className="absolute top-[-8rem] left-[3rem] h-[67px] w-[47px] bounce-effect md:top-[-3rem]"
          draggable={false}
        />

        <FadeContent
          blur={true}
          duration={1500}
          easing="ease-out"
          initialOpacity={0}
        >
          <h1 className="hidden md:block font-nanum text-[52px] md:text-[120px] leading-[52px]  md:leading-[130px] font-[800] ">
            Shaping{" "}
            <span className="relative inline-block">
              <span className="relative inline-block font-nanum text-[48px] md:text-[120px] font-[800] italic  ">
                ideas
                <IdeaEclipse />
              </span>{" "}
              into
            </span>
            <br />
            intuitive experiences with
          </h1>

          <h1 className="block md:hidden font-nanum text-[52px] md:text-[120px] leading-[52px]  md:leading-[130px] font-[800] ">
            Shaping{" "}
            <span className="relative inline-block font-nanum text-[48px] md:text-[120px] font-[800] italic ">
              ideas
              <IdeaEclipse />
            </span>{" "}
            into intuitive experiences with
          </h1>
        </FadeContent>
        {/* Curve Arrow */}
        <Image
          src="/images/decoresImg/curve_arrow.png"
          alt="Curve Arrow"
          width={160}
          height={80}
          className="absolute bottom-[3.5rem] left-[69%] h-[4rem] w-[4rem] rotate-[-80deg] md:bottom-[1.5rem] md:left-[78%] md:h-40 md:w-40 md:rotate-[-8deg]"
        />
        <Image
          src="/images/decoresImg/shining_star.png"
          alt="Star Decor"
          width={47}
          height={67}
          className="absolute bottom-[-4rem] right-[0rem] h-[67px] w-[47px] bounce-effect md:bottom-[2rem]"
          draggable={false}
        />
        {/* Typewriter Effect */}
        <h6 className="font-annie text-[40px] md:text-[70px] italic text-[#6D4C41] mt-2">
          <TypeWriter data={typoData} />
        </h6>
      </div>

      {/*  Skills Feature AutoScroll Section */}
      <SkillsAutoScroll />
    </div>
  );
};

export default HeroSection;
