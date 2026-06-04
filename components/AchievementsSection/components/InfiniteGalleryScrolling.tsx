import React from 'react'
import GalleryCard from './GalleryCard'
import Magnet from '@/components/Animations/Magnet'

type AchievementItem = {
  icon: string
  image: string
  caption: string
}

const InfiniteGalleryScrolling = ({ data }: { data: AchievementItem[] }) => {
  const renderItem = (item: AchievementItem, index: number, copyId: string) => (
    <div key={`${copyId}-${index}`} className="flex items-center gap-12">
      <img
        src={item.icon}
        alt=""
        className="w-24 rotate-[-8deg] md:w-40"
      />
      {copyId === 'set-0' ? (
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <GalleryCard
            index={index}
            image={item.image}
            caption={item.caption}
          />
        </Magnet>
      ) : (
        <GalleryCard
          index={index}
          image={item.image}
          caption={item.caption}
        />
      )}
    </div>
  )

  return (
    <div className="relative my-20 ">
      <div className="flex items-center gap-12 animate-marquee2">
        {data.map((item, index) => renderItem(item, index, 'set-0'))}
        {/* Duplicate for smooth infinite scrolling */}
        {data.map((item, index) => renderItem(item, index, 'set-1'))}
        {data.map((item, index) => renderItem(item, index, 'set-2'))}
      </div>
    </div>
  )
}

export default InfiniteGalleryScrolling