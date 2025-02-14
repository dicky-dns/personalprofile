import { GithubIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardImageAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  repo: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      aria-hidden="true"
      className="relative z-10 grid lg:h-[550px] w-full overflow-hidden rounded-3xl border border-foreground/20 bg-zinc-200 dark:bg-zinc-800"
    >
      
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardLinksAnimation}
        aria-hidden="true"
        className="relative lg:absolute left-0 top-0 ml-5 mt-5 gap-4 lg:ml-14 lg:mt-10"
      >
         <h3 className="text-2xl lg:text-5xl font-bold leading-1 text-foreground md:text-4xl md:leading-none lg:leading-none">
          <motion.span
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardTitleAnimation}
            aria-hidden="true"
          >
            {title}
          </motion.span>
        </h3>
      </motion.div>

      <div className="relative lg:absolute left-5 top-0 mb-10 ml-0 text-foreground lg:left-10 lg:top-52 lg:mb-14 lg:ml-4">
        <p className="mt-4 w-[90%] max-w-[454px] text-sm text-foreground/80">
          <motion.span
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardDescriptionAnimation}
            aria-hidden="true"
          >
            {description}
          </motion.span>
        </p>
        <motion.div
          ref={ref}
          animate={ctrls}
          initial="hidden"
          variants={projectCardTechAnimation}
          aria-hidden="true"
          className="mt-9 flex gap-4"
        >
          {tech.map((tech, index) => (
            <p
              key={index}
              className="text-xs font-semibold text-foreground/50 md:text-sm"
            >
              {tech}
            </p>
          ))}
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardImageAnimation}
        aria-hidden="true"
        className="flex justify-end"
      >
        <Image
          width={1000}
          height={600}
          src={image}
          alt={title}
          className="relative lg:absolute -bottom-2 right-0 w-[95%] lg:w-[85%] object-contain md:w-[60%] lg:max-w-[55%]"
        />
      </motion.div>
    </motion.div>
  )
}
