interface InfoBoxProps {
  text: string;
  className?: string;
}

const InfoBox = ({ text, className = "" }: InfoBoxProps) => {
  return (
    <span
      className={`pointer-events-none absolute z-10 inline-flex h-[22px] items-center justify-center whitespace-nowrap rounded-[8px] bg-[#AE9382] px-1.5 font-montserrat text-[11px] font-medium leading-none text-white shadow-[-1px_3px_6px_rgba(0,0,0,0.1),_-3px_11px_11px_rgba(0,0,0,0.09)] md:h-[34px] md:rounded-[10px] md:px-[10px] md:text-[22px] md:leading-[27px] ${className}`}
      aria-hidden
    >
      {text}
    </span>
  );
};

export default InfoBox;
