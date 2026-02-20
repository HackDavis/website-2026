'use client';

import { useEffect, useMemo, useState, createRef } from 'react';
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

  // one ref per word (stable across renders)
  const nodeRefs = useMemo(
    () => words.map(() => createRef<HTMLSpanElement>()),
    []
  );

  useEffect(() => {
    const swapInterval = setInterval(() => {
      setWordIdx((idx) => (idx + 1) % words.length);
    }, 3000);

    return () => clearInterval(swapInterval);
  }, []);

  const activeRef = nodeRefs[wordIdx];

  return (
    <span className="inline-block align-baseline text-[#AFD157] font-bold text-left md:text-right">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={words[wordIdx]}
          nodeRef={activeRef}
          timeout={200}
          classNames={{
            enter: 'opacity-0 translate-y-[35px] text-white',
            enterActive: 'opacity-0 translate-y-0',
            exit: 'opacity-100',
            exitActive: 'opacity-0 -translate-y-[35px] text-white',
          }}
        >
          <span
            ref={activeRef}
            className="inline-block will-change-transform will-change-opacity"
            style={{
              transition: 'all 400ms cubic-bezier(0.165, 0.84, 0.44, 1)',
            }}
          >
            {words[wordIdx]}
          </span>
        </CSSTransition>
      </SwitchTransition>
    </span>
  );
}
