'use client';

import { useEffect, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const words = ['create', 'code', 'design', 'collab', 'ideate', 'craft', 'hack', 'strive', 'build'];

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
    <span className="inline-block align-baseline text-[#AFD157] font-bold">
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
            style={{ transition: 'all 400ms cubic-bezier(0.165, 0.84, 0.44, 1)' }}
          >
            {words[wordIdx]}
          </span>
        </CSSTransition>
      </SwitchTransition>
    </span>
  );
}
