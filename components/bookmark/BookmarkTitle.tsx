"use client"

import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function BookmarkTitle() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (inView){
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const wordAnimation = {
    hidden: {},
    visible:{},
  }

  const charAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 2.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      }
    }
  }

  return (
    <h2 
      role="heading" 
      className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]">
      {/* {title.split(" ").map((word, i) => ( */}
        <motion.span
          ref={ref}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          transition={{
            delayChildren:  1.25,
            staggerChildren: 0.05,
          }}
          className={cn("inline-block whitespace-nowrap")}
        >
            <motion.span 
            aria-hidden="true"
            variants={charAnimation}
             className={cn("inline-block")}>
              Bookmark
            </motion.span>
          {/* ))} */}
        </motion.span>
    </h2>
  )
}
