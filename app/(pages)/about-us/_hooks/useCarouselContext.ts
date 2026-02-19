'use client';
import { useContext } from 'react';

import {
  CarouselContext,
  CarouselContextValue,
} from '@pages/about-us/_contexts/CarouselContext';

export function useCarouselContext(): CarouselContextValue {
  const context = useContext(CarouselContext) as CarouselContextValue;
  if (!context) {
    throw new Error(
      'useCarouselContext must be used within an CarouselContextProvider'
    );
  }
  return context;
}
