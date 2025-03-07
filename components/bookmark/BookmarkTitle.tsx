"use client"

import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function BookmarkTitle() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  const bookmarkTitleAnimation = {
    hidden: {
      opacity: 0,
      y: -150,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      aria-hidden="true"
      variants={bookmarkTitleAnimation}
      className=""
    >
      <h2 className="">
        Recent
      </h2>
    </motion.div>
  )
}
