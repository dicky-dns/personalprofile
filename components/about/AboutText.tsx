import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AnimateText {
  text: string,
}

export default function AboutText() {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const text = `Hello! 👋🏼 I’m Dicky, and I currently live in Surakarta, Indonesia. I'm a programmer with over 3 years of experience, I’m a versatile Web Developer skilled in designing, developing, and managing websites, with a particular focus on PHP and javascript. As a self-taught developer, I’m passionate about creating engaging and interactive websites. I’m not just a coder, but also problem solver, and a lifelong learner—constantly eager to explore new things. Taking an unconventional route, I chose hands-on learning and real-world applications which has helped me build resilience and adaptability in my approach. Currently, I work as a Web Developer at a company in Surakarta (Solo). I’m always open to new opportunities and collaborations, so feel free to reach out to me! 🚀`;

  const splitText = ({text}: AnimateText) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="text-about text-foreground">{word}</span>
    ));
  };

  useEffect(() => {
    const words = paragraphRef.current?.querySelectorAll('.text-about');

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      words,
      {
        opacity: 0.2,         
        textShadow: 'none',    
      },
      {
        opacity: 1,          
        stagger: 0.04,         
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',    
          end: 'bottom 20%',   
          scrub: true,         
          toggleActions: 'play none none none', 
        },
      }
    );
  }, []);

  return (
    <p ref={paragraphRef} className="paragraph-about select-none flex flex-wrap text-justify text-base md:text-lg leading-none tracking-wide ">
      {splitText({text})}
    </p>
  );
}