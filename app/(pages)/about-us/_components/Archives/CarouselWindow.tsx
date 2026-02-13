'use client';
import { useRef } from 'react';
import { useCarouselContext } from '@pages/about-us/_hooks/useCarouselContext';
import UnderCloud from '@public/Images/archives/UnderCloud.svg';
import LeftCloud from '@public/Images/archives/LeftCloud.svg';
import RightCloud from '@public/Images/archives/RightCloud.svg';
import Image from 'next/image';

export default function CarouselWindow({
  children = [],
}: {
  children?: React.ReactNode;
}) {
  const {
    setWindowWitdh,
    setContentWidth,
    setItemBounds,
    windowRef,
    setScroll,
  } = useCarouselContext();

  const contentBeltResizeObserverRef = useRef<ResizeObserver | null>(null);
  const contentBeltRef = useRef<Element | null>(null);
  const contentWindowResizeObserverRef = useRef<ResizeObserver | null>(null);

  const onContentBeltChange = (elem: Element) => {
    if (!elem) return;
    const children = Array.from(elem.children);
    const boundingRects = children.map((child) =>
      (child as HTMLElement).getBoundingClientRect()
    );

    const contentBoundingRect = elem.getBoundingClientRect();
    setContentWidth(contentBoundingRect.width);
    setItemBounds(boundingRects);
  };

  const onContentBeltMount = (node: HTMLElement | null) => {
    if (!node) {
      if (contentBeltRef.current && contentBeltResizeObserverRef.current) {
        contentBeltResizeObserverRef.current.unobserve(contentBeltRef.current);
      }
      return;
    }

    contentBeltResizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length === 0) return;
      const entry = entries[0];
      onContentBeltChange(entry.target);
    });

    contentBeltRef.current = node;
    contentBeltResizeObserverRef.current.observe(contentBeltRef.current);
  };

  const onContentWindowChange = (elem: Element) => {
    if (!elem) return;
    const contentWindowWidth = elem.getBoundingClientRect().width;
    setWindowWitdh(contentWindowWidth);
  };

  const onContentWindowMount = (node: HTMLElement | null) => {
    if (!node) {
      if (windowRef.current && contentWindowResizeObserverRef.current) {
        contentWindowResizeObserverRef.current.unobserve(windowRef.current);
      }
      return;
    }

    contentWindowResizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length === 0) return;
      const entry = entries[0];
      onContentWindowChange(entry.target);
    });

    windowRef.current = node;
    contentWindowResizeObserverRef.current.observe(windowRef.current);
  };

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    setScroll(target.scrollLeft);
  };

  return (
    // NON-SCROLLING FRAME (clouds pinned here)
    <div
      className="
        relative
        top-[30%]
        min-h-[60px] md:min-h-[20vw]
        overflow-y-visible
        overflow-x-clip
        lg:min-h-[30vw]
        sm:h-[10vw]
      "
    >
      <Image
        src={UnderCloud}
        alt=""
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          w-[100vw]
          max-w-none
          -translate-x-1/2
          -translate-y-1/2
          -z-10
          hidden
          md:block
        "
      />
      {/* pinned clouds (NOT inside the scroller) */}
      <Image
        src={LeftCloud}
        alt=""
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-[-1%]
          sm:top-[32%]
          md:top-[32%]
          w-[100vw]
          max-w-none
          -translate-y-1/2
          z-30
          hidden
          md:block
        "
      />

      <Image
        src={RightCloud}
        alt=""
        aria-hidden
        className="
          pointer-events-none
          absolute
          right-[-10px]
          md:top-[25%]
          w-[90vw]
          max-w-none
          -translate-y-1/2
          z-30
          hidden
          md:block
        "
      />

      {/* HORIZONTAL-ONLY SCROLLER (circles only) */}
      <div
        ref={onContentWindowMount}
        onScroll={handleScroll}
        className="
          relative z-10
          flex flex-row items-center
          overflow-x-auto
          overflow-y-visible
          touch-pan-x touch-pan-y
          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
          md:pr-16
          md:pt-10
          lg:pt-24
          2xl:pt-52
        "
      >
        <div
          className="flex flex-row items-center gap-6 sm:gap-10 md:gap-[60px] px-[10%] [&>*]:shrink-0 "
          ref={onContentBeltMount}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
