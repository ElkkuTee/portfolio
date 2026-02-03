import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  trigger?: boolean;
  loop?: boolean;
}

const CHARS = '!<>-\/[]{}=+*^?#';

export default function TextScramble({ 
  text, 
  className = '', 
  delay = 0,
  trigger = true,
  loop = false 
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  const frameCounter = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isUnscrambling = useRef(false);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    const performScramble = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const timeout = setTimeout(() => {
        const length = Math.max(text.length, displayText.length);
        const queue: typeof queueRef.current = [];

        // Pre-generate random values to reduce per-frame calculations
        for (let i = 0; i < length; i++) {
          const from = displayText[i] || '';
          const to = isUnscrambling.current ? text[i] || '' : CHARS[Math.floor(Math.random() * CHARS.length)];
          const start = Math.floor(Math.random() * 20);
          const end = start + Math.floor(Math.random() * 20);
          queue.push({ from, to, start, end, char: CHARS[Math.floor(Math.random() * CHARS.length)] });
        }

        queueRef.current = queue;
        frameCounter.current = 0;

        const update = () => {
          let output = '';
          let complete = 0;

          for (let i = 0; i < queue.length; i++) {
            const item = queue[i];
            const { from, to, start, end } = item;

            if (frameCounter.current >= end) {
              complete++;
              output += to;
            } else if (frameCounter.current >= start) {
              if (Math.random() < 0.28) {
                item.char = CHARS[Math.floor(Math.random() * CHARS.length)];
              }
              output += item.char;
            } else {
              output += from;
            }
          }

          setDisplayText(output);

          if (complete === queue.length) {
            isAnimating.current = false;
            if (loop) {
              isUnscrambling.current = !isUnscrambling.current;
              timeoutRef.current = setTimeout(performScramble, 1500);
            }
            return;
          }

          frameCounter.current++;
          frameRef.current = requestAnimationFrame(update);
        };

        update();
      }, delay);

      timeoutRef.current = timeout;
    };

    performScramble();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, trigger, delay, loop]);

  return <span className={`whitespace-nowrap ${className}`}>{displayText}</span>;
}
