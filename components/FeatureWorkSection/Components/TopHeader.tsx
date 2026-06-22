import BlurText from "@/components/Animations/BlurText";
import SplitText from "@/components/Animations/SplitText";

interface TopHeadingProps {
  title: string;
  subTitle: string;
}

const TopHeading = ({ title, subTitle }: TopHeadingProps) => {
  return (
    <div className="relative mb-10 text-center md:mb-16">
      <h2 className="relative inline-block font-nanum text-[40px] font-[800] text-[#3C3C3C] md:text-[80px]">
        <BlurText text={title} delay={150} animateBy="words" direction="top" />
        <img
          src="/images/decoresImg/three_line.png"
          alt=""
          className="faded-effect absolute left-[-35px] top-[-20px] h-[67px] w-[47px] rotate-90 md:left-[-40px] md:top-[-24px]"
          draggable={false}
        />
        <img
          src="/images/decoresImg/jigjag_arrow.png"
          alt=""
          className="bounce-effect absolute bottom-[-20px] right-[-70px] h-[80px] w-[70px] rotate-45 md:bottom-0 md:right-[-35%] md:h-[170px] md:w-[160px] md:rotate-0"
          draggable={false}
        />
      </h2>
      <div className="mx-auto mt-4 max-w-[250px] font-annie text-[20px] text-[#3C3C3C] md:mt-6 md:max-w-[532px] md:text-[40px]">
        <SplitText
          text={subTitle}
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
    </div>
  );
};

export default TopHeading;
