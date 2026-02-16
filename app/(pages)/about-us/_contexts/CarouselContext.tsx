'use client';
import { useState, createContext, useRef, createRef } from 'react';

interface CarouselContextValue {
  windowWidth: number;
  contentWidth: number;
  scroll: number;
  itemBounds: DOMRect[];
  setWindowWitdh: (_: any) => void;
  setContentWidth: (_: any) => void;
  setScroll: (_: any) => void;
  setItemBounds: (_: any[]) => void;
  windowRef: React.MutableRefObject<HTMLElement | null>;
}

export type { CarouselContextValue };

export const CarouselContext = createContext<CarouselContextValue>({
  windowWidth: 0,
  contentWidth: 0,
  scroll: 0,
  itemBounds: [],
  setWindowWitdh: (_: any) => {},
  setContentWidth: (_: any) => {},
  setScroll: (_: any) => {},
  setItemBounds: (_: any[]) => {},
  windowRef: createRef(),
});

export default function CarouselContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowWidth, setWindowWitdh] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [itemBounds, setItemBounds] = useState<DOMRect[]>([]);
  const windowRef = useRef(null);

  const value = {
    windowWidth,
    contentWidth,
    itemBounds,
    scroll,
    setWindowWitdh,
    setContentWidth,
    setScroll,
    setItemBounds,
    windowRef,
  };

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
}
