import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateTitle from "./AnimateTitle"
import AboutText from './AboutText';
import AboutExperience from "./AboutExperience"
import Skills from "./AboutSkill";
export default function About() {
  
  return (
    <section
      id="about"
      className="relative pb-section flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="lg:mg-16 mb-3 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:gap-6 md:text-[20px] md:leading-relaxed lg:text-base">
            <AboutText />
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 mt-3 lg:max-w-[1200px] ">
          <AboutExperience />
        </div>
        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          <Skills/>
        </div>
      </div>
    </section>
  )
}
