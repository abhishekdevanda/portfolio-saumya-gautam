"use client"
import React from 'react'
import TopHeading from './Components/TopHeader'
import dynamic from 'next/dynamic';

const WorkCardCarousel = dynamic(() => import('./Components/WorkCardCarousel'), {
  ssr: false,
});

const FeatureWorkSection = () => {
  return (
    <div id="work" className="overflow-hidden bg-[#FFFCF2] px-6 py-16 md:py-24">
      <TopHeading
        title="Featured work"
        subTitle="Explore my work and discover the art of impactful design."
      />
      <WorkCardCarousel />
    </div>
  )
}

export default FeatureWorkSection
