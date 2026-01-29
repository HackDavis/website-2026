'use client';

import { useEffect, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const words = [
  'create',
  'code',
  'design',
  'collab',
  'ideate',
  'craft',
  'hack',
  'strive',
  'build',
];

export default function WordCycle() {
  const [wordIdx, setWordIdx] = useState(0);
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const swapInterval = setInterval(() => {
      setWordIdx((idx) => (idx + 1) % words.length);
    }, 3000);

    return () => clearInterval(swapInterval);
  }, []);

  return (
    <span className="block mb-[13px] font-bold">
      <SwitchTransition>
        <CSSTransition
          key={words[wordIdx]}
          nodeRef={nodeRef}
          timeout={400}
          mountOnEnter
          unmountOnExit
          classNames={{
            enter: 'opacity-0 translate-y-[35px]',
            enterActive: 'opacity-100 translate-y-0',
            exit: 'opacity-100',
            exitActive: 'opacity-0 -translate-y-[35px]',
          }}
        >
          <span
            ref={nodeRef}
            className="inline-block will-change-transform will-change-opacity"
            // We apply the different easings depending on the phase by relying on class changes,
            // and using a transition that covers both. Enter uses this easing; exit overrides below.
            style={{
              transition: 'all 400ms cubic-bezier(0.165, 0.84, 0.44, 1)',
            }}
            // Override easing for exit-active via inline style when that class is present is hard,
            // so instead we do it with a tiny trick: a data attribute and a CSS selector in globals.
            data-wordcycle
          >
            {words[wordIdx]}
          </span>
        </CSSTransition>
      </SwitchTransition>{' '}
    </span>
  );
}
