import { useState, useEffect, useRef } from 'react';

export function useParallax() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const veloFactor = 0.01;
    const damping = 0.83;

    const animate = () => {
      const xVelo =
        (targetPositionRef.current.x - currentPositionRef.current.x) *
        veloFactor;
      const yVelo =
        (targetPositionRef.current.y - currentPositionRef.current.y) *
        veloFactor;

      velocityRef.current.x += xVelo;
      velocityRef.current.y += yVelo;

      velocityRef.current.x *= damping;
      velocityRef.current.y *= damping;

      currentPositionRef.current.x += velocityRef.current.x;
      currentPositionRef.current.y += velocityRef.current.y;

      setMousePosition({
        x: currentPositionRef.current.x,
        y: currentPositionRef.current.y,
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (container && window.innerWidth > 425) {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2; // center of screen is parallax origin
        const y = event.clientY - rect.top - rect.height / 2; // center of screen is parallax origin
        targetPositionRef.current = { x, y };
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    container?.addEventListener('mousemove', handleMouseMove);

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return { mousePosition, containerRef };
}
