import React from "react"
import { AnimateWords } from "./AnimateWords"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">
      <div className="relative flex flex-col items-center justify-center">
        <AnimateWords
          title="DICKY-DWI NUR-SETYO"
          style="inline-block overflow-hidden pt-[1.4rem] md:pt-[1.1rem] -mr-0 sm:-mr-5 md:-mr-7 lg:-mr-9 leading-[0.73]"
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
          className="absolute bottom-0 xl:bottom-[-2px]"
        >
          <Image
            src={"/images/profile.png"}
            width={150}
            height={150}
            priority
            alt="Dicky DNS"
            className="h-full w-[210px] rounded-[16px] grayscale 
            hover:grayscale-0 sm:w-[240px] md:w-[260px] md:rounded-[32px] lg:w-[350px] 2xl:w-[360px] 3xl:w-[380px]"
          />
        </motion.div>
      </div>
    </div>
  )
}
