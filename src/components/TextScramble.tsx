import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  trigger?: boolean;
  loop?: boolean;
}

const chars = '!<>-\/[]{}=+*^?#';

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

    let currentDisplayText = displayText;

    const performScramble = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const timeout = setTimeout(() => {
        const length = Math.max(text.length, currentDisplayText.length);
        const queue: typeof queueRef.current = [];

        for (let i = 0; i < length; i++) {
          const from = currentDisplayText[i] || '';
          const to = isUnscrambling.current ? text[i] || '' : chars[Math.floor(Math.random() * chars.length)];
          const start = Math.floor(Math.random() * 20);
          const end = start + Math.floor(Math.random() * 20);
          queue.push({ from, to, start, end });
        }

        queueRef.current = queue;
        frameCounter.current = 0;

        const update = () => {
          let output = '';
          let complete = 0;

          for (let i = 0; i < queue.length; i++) {
            const { from, to, start, end } = queue[i];
            let char = queue[i].char;

            if (frameCounter.current >= end) {
              complete++;
              output += to;
            } else if (frameCounter.current >= start) {
              if (!char || Math.random() < 0.28) {
                char = chars[Math.floor(Math.random() * chars.length)];
                queue[i].char = char;
              }
              output += char;
            } else {
              output += from;
            }
          }

          setDisplayText(output);
          currentDisplayText = output;

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

  return <span className={className}>{displayText}</span>;
}
