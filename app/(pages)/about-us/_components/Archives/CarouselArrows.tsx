'use client';
import { useCarouselContext } from '@pages/about-us/_hooks/useCarouselContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function CarouselArrows() {
  const { windowWidth, scroll, windowRef, contentWidth } = useCarouselContext();

  const carouselWindow = windowRef?.current;

  const scrollRight = () => {
    carouselWindow?.scrollTo({
      left: scroll + windowWidth / 2,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    carouselWindow?.scrollTo({
      left: scroll - windowWidth / 2,
      behavior: 'smooth',
    });
  };

  const canGoLeft = scroll !== 0;
  const canGoRight = scroll + windowWidth < contentWidth - 1;

  const baseButtonClasses =
    'flex h-12 w-12 items-center justify-center rounded-full p-4 text-[#929292] transition-colors duration-200 bg-[#DBDBDB]';
  const activeButtonClasses = 'bg-[#9DE7E5] text-[#123041] cursor-pointer';
  const inactiveButtonClasses = 'cursor-default';

  return (
    <div className="flex w-full flex-row items-center justify-between gap-6 sm:w-auto sm:justify-start">
      <button
        onClick={scrollLeft}
        className={`${baseButtonClasses} ${
          canGoLeft ? activeButtonClasses : inactiveButtonClasses
        }`}
        aria-label="Scroll left"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="h-full" />
      </button>
      <button
        onClick={scrollRight}
        className={`${baseButtonClasses} ${
          canGoRight ? activeButtonClasses : inactiveButtonClasses
        }`}
        aria-label="Scroll right"
      >
        <FontAwesomeIcon icon={faChevronRight} className="h-full" />
      </button>
    </div>
  );
}
