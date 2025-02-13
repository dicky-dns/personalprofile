import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useAnimation, useInView, motion } from "framer-motion";
import { experiences } from "@/lib/experienceData";

export default function AboutExperience() {
  const marqueeRef = useRef(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  const ctrls = useAnimation();

  const [hasAnimated, setHasAnimated] = useState(false); 

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true); 

      ctrls.start("visible"); 

      const marquee = marqueeRef.current;
      if (!marquee) return;

      const items = Array.from(marquee.children);
      items.forEach((item) => {
        marquee.appendChild(item.cloneNode(true));
      });

      const totalWidth = marquee.scrollWidth / 2;

      gsap.to(marquee, {
        x: -totalWidth,
        duration: 150, 
        repeat: -1, 
        ease: "linear",
      });
    }
  }, [ctrls, inView, hasAnimated]);

  const AnimationSocialMedia = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1.8,
        delay: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={ctrls}
      variants={AnimationSocialMedia}
      className="experience-section"
    >
      <div className="experience-marquee-wrapper">
      <h2 className="text-xl font-bold mb-6">Experience</h2>
        <div ref={marqueeRef} className="experience-marquee">
          {experiences.map((experience, index) => (
            <div key={experience.id ? experience.id : `experience-${index}`} className="experience-card overflow-hidden p-px relative rounded-md bg-zinc-200 dark:bg-zinc-900">
              <div className="inline-block space-y-2 bg-zinc-200 dark:bg-zinc-800 rounded-md w-[100%] z-10 relative px-5 py-5">
                <div className="text-foreground mb-4 font-semibold text-[15px]">
                  {experience.title}
                </div>
                <div className="experience-card-year pt-2">
                  {experience.period}
                </div>
                <div className="experience-card-position">
                  {experience.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
