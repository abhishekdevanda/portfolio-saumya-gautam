import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className='flex items-center gap-3 space-x-4' >
      <div className="flex items-center space-x-4">
        <Image src="/images/skills_Icons/figma_logo.png" alt="Figma" width={32} height={32} className="ml-3 h-8 w-8" />
        <span className="font-nanum text-[37.5px] font-bold">Figma</span>
      </div>
      <Image src="/images/decoresImg/shining_star.png" alt="Star" width={24} height={24} className="h-6 w-6" />
      <div className="flex items-center space-x-4">
        <Image src="/images/skills_Icons/xd_logo.png" alt="Adobe XD" width={32} height={32} className="h-8 w-8" />
        <span className="font-nanum text-[37.5px] font-bold">Adobe XD</span>
      </div>
      <Image src="/images/decoresImg/shining_star.png" alt="Star" width={24} height={24} className="h-6 w-6" />
      <div className="flex items-center space-x-4">
        <Image src="/images/skills_Icons/adove_logo.png" alt="Illustrator" width={32} height={32} className="h-8 w-8" />
        <span className="font-nanum text-[37.5px] font-bold">Adobe Illustrator</span>
      </div>
    </div>
  )
}

export default Features
