"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import HeroGraphic from "./HeroGraphic"
import Located from "./Located"
import ScrollAnimate from "./ScrollAnimate"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative pb-section select-none z-10 flex min-h-screen w-full flex-col items-center justify-center"
      initial="initial"
      animate="animate"
    >
        <HeroGraphic />
        <HeroText />
        <div className="mt-10 w-full overflow-hidden">
          <ParallaxText direction={500} baseVelocity={-1}>
            Web Developer
          </ParallaxText>
          <ScrollAnimate/>
        </div>
        <Located/>
    </motion.section>
  )
}
