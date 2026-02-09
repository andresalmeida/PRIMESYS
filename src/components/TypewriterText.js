"use client";

import { useState, useEffect } from "react";

export default function TypewriterText({ text, speed = 50, delay = 0 }) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [started, text, speed]);

  return (
    <span>
      {displayText}
      <span className="cursor">|</span>
      <style jsx>{`
        .cursor {
          animation: blink 1s infinite;
          color: #33b8ff;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
