import React from "react"
import { AnimateWords } from "./AnimateWords"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        <AnimateWords
          title="DICKY-DWI NUR-SETYO"
          style="inline-block overflow-hidden pt-1 -mr-0 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
        />
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: `0em`,
            transition: {
              delay: 0,
              duration: 1,
              ease: [0.2, 0.65, 0.3, 0.9],
            },
          }}
          className="absolute bottom-[calc(50%-70px] sm:bottom-[calc(50%-90px] md:bottom-[calc(50%-100px)] lg:bottom-[calc(50%-110px)]"
        >
          <Image
            src={"/images/profile.webp"}
            width={150}
            height={150}
            priority
            alt="Dicky DNS"
            className="h-full w-[120px] rounded-[16px] grayscale 
            hover:grayscale-0 sm:w-[180px] md:w-[200px] md:rounded-[32px] lg:w-[calc(20vw-10vh)]"
          />
        </motion.div>
      </div>
    </div>
  )
}
