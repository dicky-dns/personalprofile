"use client";

import { useEffect, useState } from "react";

export default function ScrollAnimate() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => setIsAnimating(true), 100);
    }, 1500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex md:hidden justify-center items-center mt-12">
        <svg data-anim="slide-down" width="28" height="46" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="has-animate">
            <rect opacity="0.6" x="0.5" y="0.5" width="27" height="43" rx="13.5" className="stroke-black dark:stroke-white"></rect>
            <rect id="scroll-animate" opacity="0.6" x="12" y="6.66699" width="4" height="9.33333" rx="2"  className="fill-black dark:fill-white"></rect>
        </svg>
    </div>
  );
}
