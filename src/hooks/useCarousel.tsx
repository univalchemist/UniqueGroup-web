import { useState, useEffect, useRef, useCallback } from "react";

interface useCarouselProps {
  itemCount: number;
  slidesCount: number;
}

interface CarouselControls {
  initialize: (element: HTMLElement) => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  goLeft: () => void;
  goRight: () => void;
  goTo: (index: number) => void;
  activeIndex: number;
}

const useCarousel = ({
  itemCount,
  slidesCount,
}: useCarouselProps): CarouselControls => {
  const ref = useRef<HTMLElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const childElement = ref?.current?.children?.[index];
    let leftOffset = 0;
    if (childElement instanceof HTMLElement) {
      leftOffset = childElement.offsetLeft;
    }

    if (typeof leftOffset !== "number") {
      return;
    }
    // debugger;
    ref?.current?.scrollTo({
      left: index === 0 ? 0 : leftOffset,
      behavior: "smooth",
    });
    // debugger;
    setActiveIndex(index);
  };

  const goLeft = useCallback(() => {
    goTo(Math.max(activeIndex - 1, 0));
  }, [activeIndex]);

  const goRight = useCallback(() => {
    // debugger;
    goTo(Math.min(activeIndex + 1, itemCount - slidesCount));
  }, [activeIndex, itemCount, slidesCount]);

  const initialize = useCallback((element: HTMLElement) => {
    ref.current = element;
    return;
  }, []);

  return {
    initialize,
    // isDragActive: dragState,
    canScrollLeft: activeIndex !== 0,
    canScrollRight: activeIndex !== itemCount - 1,
    goLeft,
    goRight,
    goTo,
    activeIndex,
  };
};

useCarousel.defaultProps = {
  dragActiveClass: "drag-active",
  slidesCount: 1,
  itemCount: 0,
};

export default useCarousel;
