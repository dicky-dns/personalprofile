"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import HeroGraphic from "./HeroGraphic"
import DigitalGlobe from "../DigitalGlobe"

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
        </div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: -0.4 }}
          className="absolute left-0 top-[40%] hidden 
          h-[90px] w-[200px] flex-col items-start 
          justify-center rounded-br-full rounded-tr-full 
          bg-zinc-800 px-5 dark:bg-neural-800 lg:flex"
        >
          <p className="text-sm font-medium text-zinc-200 light:text-zinc-800">
            Located in
          </p>
          <p className="text-sm font-medium text-zinc-200 light:text-zinc-800">
            Surakarta,
          </p>
          <p className="text-sm font-medium text-zinc-200 light:text-zinc-800">
            Indonesia
          </p>
          <DigitalGlobe className="absolute right-3 bg-background" />
        </motion.div>
    </motion.section>
  )
}
