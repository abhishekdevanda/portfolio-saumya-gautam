import Magnet from "@/components/Animations/Magnet";

type WorkCardProps = {
  image: string;
  title: string;
  link: string;
  isActive?: boolean;
};

const WorkCard = ({
  image,
  title,
  link,
  isActive = true,
}: WorkCardProps) => {
  return (
    <article
      className={`w-[358px] overflow-hidden rounded-lg md:w-[480px] ${
        isActive ? "opacity-100" : "opacity-95"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-[363px] w-full rounded-lg object-cover md:h-[520px]"
        draggable={false}
      />
      <div className="mt-2 text-center font-montserrat md:mt-6">
        <h3 className="mb-3 text-lg font-bold uppercase tracking-wide md:text-[30px]">
          {title}
        </h3>
        <Magnet padding={100} disabled={false} magnetStrength={10}>
          <a
            href={link}
            className="mt-2 inline-block cursor-pointer rounded-[10px] border border-[#6D4C41] px-4 py-2 font-montserrat text-lg font-medium text-[#6D4C41] transition-all hover:bg-[#8A6C59] hover:text-white md:mt-6 md:text-[24px]"
          >
            See work
          </a>
        </Magnet>
      </div>
    </article>
  );
};

export default WorkCard;
