"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { workData } from "@/Data/workData";

import WorkCard from "./WorkCard";

const CARD_WIDTH = 480;

const CARD_IMAGE_HEIGHT = 520;

const SIDE_TILT = 28;

const CENTER_SCALE = 0.79;

const SIDE_SCALE = 0.86;

const STAGE_EDGE_GAP = 28;
const TILT_BLEED = 40;

function computeSpread(stageWidth: number) {
  const sideCardHalf = (CARD_WIDTH * SIDE_SCALE) / 2;
  const maxSpread = stageWidth / 2 - sideCardHalf - STAGE_EDGE_GAP - TILT_BLEED;
  return Math.max(80, maxSpread);
}

function getWrappedOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;

  if (offset > total / 2) offset -= total;

  if (offset < -total / 2) offset += total;

  return offset;
}

/** Horizontal strip — cards slide off the left, new ones enter from the right */

function getStripStyle(offset: number, cardSpread: number) {
  const abs = Math.abs(offset);

  const x = offset * cardSpread;

  const rotateY = offset * -SIDE_TILT;

  const isCenter = offset === 0;

  const scale = isCenter ? CENTER_SCALE : SIDE_SCALE;

  const translateZ = isCenter ? 48 : -36;

  if (abs > 1) {
    return {
      transform: `translateX(calc(-50% + ${x}px)) rotateY(${rotateY}deg) translateZ(-80px) scale(0.82)`,

      opacity: 0,

      zIndex: 0,

      pointerEvents: "none" as const,
    };
  }

  return {
    transform: `translateX(calc(-50% + ${x}px)) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,

    opacity: isCenter ? 1 : 0.92,

    zIndex: isCenter ? 30 : 20,

    pointerEvents: "auto" as const,
  };
}

const WorkCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [cardSpread, setCardSpread] = useState(480);

  const stageRef = useRef<HTMLDivElement>(null);

  const total = workData.length;

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const updateSpread = () => {
      setCardSpread(computeSpread(stage.clientWidth));
    };

    updateSpread();

    const observer = new ResizeObserver(updateSpread);

    observer.observe(stage);

    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },

    [total],
  );

  const goPrev = useCallback(() => {
    setActiveIndex((index) => (index - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % total);
  }, [total]);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="hidden min-w-0 md:block">
        <div className="flex w-full min-w-0 max-w-full items-start justify-between">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous project"
            className="flex shrink-0 items-center text-[#3C3C3C] transition-opacity hover:opacity-60"
            style={{ height: CARD_IMAGE_HEIGHT }}
          >
            <FiChevronLeft className="h-10 w-10" strokeWidth={1.5} />
          </button>

          <div
            ref={stageRef}
            className="relative mx-4 min-w-0 flex-1 overflow-visible lg:mx-8"
            style={{ height: CARD_IMAGE_HEIGHT + 170 }}
            aria-roledescription="carousel"
            aria-label="Featured work projects"
          >
            <div className="h-full w-full overflow-visible [perspective:1200px] [perspective-origin:50%_38%]">
              <div className="relative h-full w-full overflow-visible [transform-style:preserve-3d]">
                {workData.map((card, index) => {
                  const offset = getWrappedOffset(index, activeIndex, total);

                  const style = getStripStyle(offset, cardSpread);

                  const isCenter = offset === 0;

                  return (
                    <div
                      key={`${card.title}-${index}`}
                      className="absolute left-1/2 top-0 origin-center [backface-visibility:hidden] [transform-style:preserve-3d] transition-[transform,opacity] duration-500 ease-out will-change-transform"
                      style={{ width: CARD_WIDTH, ...style }}
                      aria-hidden={!isCenter}
                    >
                      <WorkCard
                        image={card.image}
                        title={card.title}
                        link={card.link}
                        isActive={isCenter}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next project"
            className="flex shrink-0 items-center text-[#3C3C3C] transition-opacity hover:opacity-60"
            style={{ height: CARD_IMAGE_HEIGHT }}
          >
            <FiChevronRight className="h-10 w-10" strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-2 flex justify-center gap-2">
          {workData.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to project ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-6 bg-[#8A6C59]"
                  : "w-2 bg-[#A28B7C]/40 hover:bg-[#A28B7C]/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative md:hidden">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous project"
          className="absolute left-0 top-[36%] z-10 -translate-y-1/2 text-[#3C3C3C]"
        >
          <FiChevronLeft className="h-8 w-8" strokeWidth={1.5} />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next project"
          className="absolute right-0 top-[36%] z-10 -translate-y-1/2 text-[#3C3C3C]"
        >
          <FiChevronRight className="h-8 w-8" strokeWidth={1.5} />
        </button>

        <div className="flex justify-center px-10">
          <WorkCard
            image={workData[activeIndex].image}
            title={workData[activeIndex].title}
            link={workData[activeIndex].link}
            isActive
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCardCarousel;
