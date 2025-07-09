import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion"

export default function AboutSkill() {
  const ref = useRef<HTMLDivElement | null>(null); 
  const isInView = useInView(ref)
  const ctrls = useAnimation()
  const [width, setWidth] = useState(0);
  const [mobile, setMobile] = useState(0);


  useEffect(() => {
    const updateWidth = () => {
      if (isInView) {
        ctrls.start("visible") 
      } 

      if (ref.current) {
        setWidth(ref.current.offsetWidth);

        if(window.innerWidth < 640){
          setMobile(24)
        }else{
          setMobile(0)
        }
      }
    };

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    if (ref.current) {
      observer.observe(ref.current);
      updateWidth(); 
    }

    return () => {
      observer.disconnect();
    };
  }, [ctrls, isInView]);

  const skillAnimation = {
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
  }

  return (
    <motion.div 
      ref={ref} 
      animate={ctrls}
      initial="hidden"
      variants={skillAnimation}
      aria-hidden="true" 
      className="relative flex w-full items-center justify-center overflow-hidden sm:p-4"
      >
      <div className="size-full flex w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" className="h-10 w-10 sm:h-14 sm:w-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12 5.601c-.035 0-.076 0-.116 0-1.61 0-3.18.175-4.69.507l.144-.027c-1.442.303-2.718.751-3.91 1.343l.094-.042c-1.011.487-1.867 1.139-2.57 1.93l-.007.008c-.571.624-.927 1.453-.945 2.364v.004c.019.914.374 1.741.946 2.367l-.002-.003c.71.799 1.566 1.451 2.529 1.917l.048.021c1.098.549 2.374.998 3.71 1.282l.106.019c1.366.305 2.936.48 4.546.48h.123-.006.116c1.61 0 3.18-.175 4.69-.507l-.144.027c1.442-.303 2.718-.751 3.91-1.343l-.094.042c1.011-.487 1.867-1.139 2.57-1.93l.007-.008c.571-.624.927-1.453.945-2.364v-.004c-.018-.915-.374-1.744-.947-2.371l.002.003c-.71-.799-1.566-1.451-2.529-1.917l-.048-.021c-1.098-.549-2.374-.998-3.71-1.282l-.106-.019c-1.366-.305-2.936-.48-4.546-.48-.041 0-.082 0-.123 0h.006zm-3.12 7.264c-.131.119-.28.221-.442.301l-.011.005c-.141.068-.308.131-.482.179l-.021.005c-.172.062-.371.099-.579.099-.008 0-.016 0-.024 0h.001-1.972l-.32 1.963h-1.447l1.28-6.675h2.773c.018 0 .04-.001.062-.001.36 0 .706.063 1.026.179l-.021-.007c.295.108.546.276.748.489l.001.001c.175.223.3.493.354.789l.002.011c.025.146.04.314.04.486 0 .196-.019.387-.055.573l.003-.019c-.036.179-.083.335-.142.485l.007-.019q-.086.221-.184.417-.122.196-.27.393c-.096.129-.201.242-.317.343l-.003.002zm4.172.589.565-2.822c.024-.107.038-.229.038-.355 0-.026-.001-.052-.002-.078v.004c-.001-.109-.043-.208-.111-.283-.069-.06-.151-.106-.241-.134l-.005-.001c-.125-.04-.269-.062-.418-.062-.017 0-.034 0-.051.001h.002-1.126l-.736 3.73h-1.423l1.28-6.48h1.423l-.343 1.767h1.28c.022 0 .047-.001.073-.001.331 0 .653.041.961.117l-.027-.006c.249.055.466.172.641.332l-.001-.001c.156.123.267.298.306.498l.001.005c.014.089.022.191.022.295 0 .17-.021.335-.062.492l.003-.014-.589 2.994zm7.902-2.184c-.04.181-.082.328-.132.473l.009-.031c-.054.159-.12.297-.201.425l.005-.008c-.069.155-.151.288-.248.408l.003-.004c-.098.122-.203.23-.317.329l-.003.003c-.131.119-.28.221-.442.301l-.011.005c-.141.068-.308.131-.482.179l-.021.005c-.172.062-.371.099-.579.099-.008 0-.016 0-.024 0h.001-1.972l-.343 1.959h-1.423l1.28-6.675h2.749c.022-.001.047-.001.073-.001.365 0 .716.063 1.041.18l-.022-.007c.287.104.529.272.718.488l.002.002c.19.222.325.497.378.799l.002.01c.022.131.035.281.035.435 0 .221-.026.435-.075.641l.004-.019zm-2.7-1.547h-.978l-.513 2.749h.856.052c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012c.031-.129.048-.278.048-.431 0-.074-.004-.147-.012-.218l.001.009c-.014-.158-.072-.301-.161-.419l.001.002c-.116-.108-.255-.192-.409-.243l-.008-.002c-.186-.062-.399-.097-.621-.097-.023 0-.046 0-.068.001h.003zm-11.19 0h-.978l-.515 2.749h.858.052c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012c.031-.129.048-.278.048-.431 0-.074-.004-.147-.012-.218l.001.009c-.014-.158-.072-.301-.161-.419l.001.002c-.116-.108-.255-.192-.409-.243l-.008-.002c-.186-.062-.399-.097-.621-.097-.023 0-.046 0-.068.001h.003z"></path></g>
              </svg>
            </div>
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="h-10 w-10 sm:h-14 sm:w-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path>
              </svg>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between">
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" className="h-10 w-10 sm:h-14 sm:w-14" height=".7em" width=".7em" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23.644 5.43c.009.032.014.065.014.099v5.15c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.072.258-.188.326L9.931 23.95c-.021.012-.043.02-.066.027-.008.002-.016.008-.024.01-.063.018-.13.018-.192 0-.011-.002-.02-.008-.029-.012-.021-.008-.043-.014-.063-.025L.534 18.755c-.117-.068-.189-.191-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.021.014-.032.006-.02.014-.04.023-.058.004-.013.015-.022.023-.033.012-.016.021-.031.033-.045.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034h.001L5.044.05c.115-.067.259-.067.375 0l4.512 2.597h.002c.015.01.027.021.041.033.012.009.025.018.037.027.013.014.021.029.033.045.008.011.02.021.025.033.011.019.017.038.024.058.003.011.011.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.005-.066.014-.098.003-.011.009-.021.013-.032.007-.02.014-.039.024-.059.007-.012.018-.021.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.011.026-.023.041-.032h.001l4.513-2.598c.116-.067.259-.067.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.029.034.044.008.012.019.021.024.033.011.02.018.039.024.059.006.011.012.022.015.033zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283l3.76-2.164zm-4.511 7.75v-4.287l-2.146 1.225-6.127 3.498v4.326l8.273-4.762zM1.095 3.624v14.588l8.273 4.762v-4.326l-4.322-2.445-.002-.003h-.002c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.039-.01-.012-.021-.023-.028-.037h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043-.004-.018-.006-.037-.008-.057-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257-1.578-.908zM5.231.81l-3.76 2.164 3.76 2.164 3.758-2.164L5.231.81zm1.956 13.505l2.182-1.256V3.624l-1.58.909-2.182 1.256v9.435l1.58-.909zM18.769 3.364l-3.76 2.164 3.76 2.163 3.759-2.164-3.759-2.163zm-.376 4.979l-2.182-1.256-1.579-.908v4.283l2.182 1.256 1.579.908V8.343zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.324 2.489-3.941 2.27 3.752 2.124z"></path></g>
              </svg>
            </div>
            <div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 16 16" className="h-10 w-10 sm:h-14 sm:w-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.71693 1H0.5C0.320967 1 0.155598 1.09572 0.0664289 1.25097C-0.0227402 1.40622 -0.0220988 1.59729 0.0681106 1.75194L7.06811 13.7519C7.15772 13.9055 7.32217 14 7.5 14C7.67783 14 7.84228 13.9055 7.93189 13.7519L14.9319 1.75194C15.0221 1.59729 15.0227 1.40622 14.9336 1.25097C14.8444 1.09572 14.679 1 14.5 1H12.2831L7.50004 8.97184L2.71693 1Z" fill="currentColor"></path> <path d="M11.1169 1H8.191L7.50002 2.38197L6.80903 1H3.88312L7.50004 7.02819L11.1169 1Z" fill="currentColor"></path> </g></svg>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between">
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" className="h-10 w-10 sm:h-14 sm:w-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.011.33.024.653.037.98.041 1.036.067 1.993.378 2.832.05.137.187.843.727 1.466.54.624 1.598 1.013 2.803.755.85-.182 1.931-.51 2.649-1.532.71-1.01 1.03-2.459 1.093-4.809.016-.127.035-.235.055-.336l.169.015h.02c.907.041 1.891-.088 2.713-.47.728-.337 1.279-.678 1.68-1.283.1-.15.21-.331.24-.643s-.149-.8-.446-1.025c-.595-.452-.969-.28-1.37-.197a6.27 6.27 0 0 1-1.202.146c1.156-1.947 1.985-4.015 2.458-5.845.28-1.08.437-2.076.45-2.947.013-.871-.058-1.642-.58-2.309C21.36.6 19.067.024 17.293.004c-.055-.001-.11-.002-.165-.001zm-.047.64c1.678-.016 3.822.455 5.361 2.422.346.442.449 1.088.437 1.884-.013.795-.16 1.747-.429 2.79-.522 2.02-1.508 4.375-2.897 6.488a.756.756 0 0 0 .158.086c.29.12.951.223 2.27-.048.332-.07.575-.117.827.075a.52.52 0 0 1 .183.425.704.704 0 0 1-.13.336c-.255.383-.758.746-1.403 1.045-.571.266-1.39.405-2.116.413-.364.004-.7-.024-.985-.113l-.018-.007c-.11 1.06-.363 3.153-.528 4.108-.132.77-.363 1.382-.804 1.84-.44.458-1.063.734-1.901.914-1.038.223-1.795-.017-2.283-.428-.487-.41-.71-.954-.844-1.287-.092-.23-.14-.528-.186-.926-.046-.398-.08-.885-.103-1.434a51.426 51.426 0 0 1-.03-2.523 3.061 3.061 0 0 1-1.552.76c-.689.117-1.304.002-1.671-.09a2.276 2.276 0 0 1-.52-.201c-.17-.091-.332-.194-.44-.397a.56.56 0 0 1-.057-.381.61.61 0 0 1 .218-.331c.198-.161.46-.251.855-.333.719-.148.97-.249 1.123-.37.13-.104.277-.314.537-.622a1.16 1.16 0 0 1-.003-.041 2.96 2.96 0 0 1-1.33-.358c-.15.158-.916.968-1.85 2.092-.393.47-.827.74-1.285.759-.458.02-.872-.211-1.224-.552-.703-.683-1.264-1.858-1.753-3.186-.488-1.328-.885-2.807-1.167-4.067-.283-1.26-.45-2.276-.474-2.766-.105-2.082.382-3.485 1.217-4.37.836-.885 1.982-1.22 3.099-1.284 2.005-.115 3.909.584 4.294.734.742-.504 1.698-.818 2.892-.798a7.39 7.39 0 0 1 1.681.218l.02-.009a6.854 6.854 0 0 1 .739-.214A9.626 9.626 0 0 1 17.08.642zm.152.67h-.146a8.74 8.74 0 0 0-1.704.192c1.246.552 2.187 1.402 2.85 2.25a8.44 8.44 0 0 1 1.132 1.92c.11.264.184.487.226.66.021.087.035.16.04.236.002.038.004.077-.012.144 0 .003-.005.01-.006.013.03.876-.187 1.47-.213 2.306-.02.606.135 1.318.173 2.095.036.73-.052 1.532-.526 2.319.04.048.076.096.114.144 1.254-1.975 2.158-4.16 2.64-6.023.258-1.003.395-1.912.407-2.632.01-.72-.124-1.242-.295-1.46-1.342-1.716-3.158-2.153-4.68-2.165zm-4.79.256c-1.182.003-2.03.36-2.673.895-.663.553-1.108 1.31-1.4 2.085-.347.92-.466 1.81-.513 2.414l.013-.008c.357-.2.826-.4 1.328-.516.502-.115 1.043-.151 1.533.039s.895.637 1.042 1.315c.704 3.257-.219 4.468-.559 5.382a9.61 9.61 0 0 0-.331 1.013c.043-.01.086-.022.129-.026.24-.02.428.06.54.108.342.142.577.44.704.78.033.089.057.185.071.284a.336.336 0 0 1 .02.127 55.14 55.14 0 0 0 .013 3.738c.023.538.057 1.012.1 1.386.043.373.104.657.143.753.128.32.315.739.653 1.024.338.284.823.474 1.709.284.768-.165 1.242-.394 1.559-.723.316-.329.505-.787.626-1.488.181-1.05.545-4.095.589-4.668-.02-.432.044-.764.182-1.017.142-.26.362-.419.552-.505.095-.043.184-.072.257-.093a5.956 5.956 0 0 0-.243-.325 4.456 4.456 0 0 1-.666-1.099 8.296 8.296 0 0 0-.257-.483c-.133-.24-.301-.54-.477-.877-.352-.675-.735-1.493-.934-2.29-.198-.796-.227-1.62.281-2.201.45-.516 1.24-.73 2.426-.61-.035-.105-.056-.192-.115-.332a7.817 7.817 0 0 0-1.041-1.764c-1.005-1.285-2.632-2.559-5.146-2.6h-.115zm-6.642.052c-.127 0-.254.004-.38.011-1.01.058-1.965.351-2.648 1.075-.684.724-1.134 1.911-1.036 3.876.019.372.181 1.414.459 2.652.277 1.238.67 2.695 1.142 3.982.473 1.287 1.046 2.407 1.59 2.937.274.265.512.372.728.363.217-.01.478-.135.797-.518a43.244 43.244 0 0 1 1.81-2.048 3.497 3.497 0 0 1-1.167-3.15c.103-.739.117-1.43.105-1.976-.012-.532-.05-.886-.05-1.107a.336.336 0 0 1 0-.019v-.005l-.001-.006v-.001a9.893 9.893 0 0 1 .592-3.376c.28-.744.697-1.5 1.322-2.112-.614-.202-1.704-.51-2.884-.568a7.603 7.603 0 0 0-.38-.01zM18.199 6.9c-.679.009-1.06.184-1.26.413-.283.325-.31.895-.134 1.597.175.703.537 1.489.877 2.142.17.327.335.621.468.86.134.24.232.41.292.555.055.134.116.252.178.362.263-.555.31-1.1.283-1.668-.035-.703-.198-1.422-.174-2.15.027-.851.195-1.405.21-2.063a5.793 5.793 0 0 0-.74-.048zm-8.234.115a2.82 2.82 0 0 0-.616.074 4.665 4.665 0 0 0-1.153.449 2.417 2.417 0 0 0-.349.228l-.022.02c.006.146.035.5.047 1.021.012.57-.002 1.297-.112 2.084-.239 1.71 1.002 3.126 2.46 3.128.085-.351.225-.707.365-1.082.406-1.094 1.205-1.892.532-5.006-.11-.51-.328-.716-.628-.832a1.474 1.474 0 0 0-.524-.084zm7.917.204h.05c.066.002.127.009.18.022.054.012.1.03.138.055a.164.164 0 0 1 .075.11l-.001.008h.001-.001a.24.24 0 0 1-.035.135.668.668 0 0 1-.11.15.677.677 0 0 1-.386.212.59.59 0 0 1-.41-.103.608.608 0 0 1-.13-.118.26.26 0 0 1-.063-.127.17.17 0 0 1 .042-.128.384.384 0 0 1 .117-.09c.096-.054.226-.094.373-.116.055-.008.109-.012.16-.013zm-7.82.168c.053 0 .109.005.166.013.153.021.289.062.393.122a.446.446 0 0 1 .133.106.223.223 0 0 1 .054.17.302.302 0 0 1-.075.154.649.649 0 0 1-.143.13.64.64 0 0 1-.448.113.728.728 0 0 1-.42-.228.71.71 0 0 1-.118-.164.28.28 0 0 1-.041-.177c.015-.108.104-.164.191-.195a.866.866 0 0 1 .307-.04zm9.06 7.343l-.003.001c-.147.053-.268.075-.37.12a.452.452 0 0 0-.239.214c-.063.115-.117.319-.101.666a.51.51 0 0 0 .148.07c.171.052.458.086.778.081.638-.007 1.423-.156 1.84-.35a3.95 3.95 0 0 0 .943-.615h-.001c-1.393.288-2.18.211-2.663.012a1.315 1.315 0 0 1-.332-.2zm-8.031.094h-.021c-.053.005-.13.023-.279.188-.348.39-.47.635-.757.864-.287.228-.66.35-1.405.503-.236.048-.371.101-.461.144.029.024.026.03.07.053.109.06.249.113.362.142.32.08.846.173 1.395.08.549-.094 1.12-.357 1.607-1.04.084-.118.093-.292.024-.479-.07-.187-.223-.348-.331-.393a.653.653 0 0 0-.204-.06z"></path></g>
              </svg>
            </div>
            <div className="rounded-2xl border bg-zinc-200 p-4 dark:bg-zinc-800 z-10">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-zinc-300 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-black sm:text-8xl">
                    Skills
                </span>
            </div>
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" className="h-10 w-10 sm:h-14 sm:w-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z" fill="currentColor"></path> </g>
              </svg>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between">
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="h-10 w-10 sm:h-14 sm:w-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 18.1778L16.6192 16.9222L17.2434 10.1444H9.02648L8.82219 7.88889H17.4477L17.6747 5.67778H6.32535L6.96091 12.3556H14.7806L14.5195 15.2222L12 15.8889L9.48045 15.2222L9.32156 13.3778H7.0517L7.38083 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2Z"></path>
              </svg>
            </div>
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" className="h-10 w-10 sm:h-14 sm:w-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
              </svg>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="h-10 w-10 sm:h-14 sm:w-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z" fill="currentColor"></path> </g></svg>   
          </div>
          <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" className="h-10 w-10 sm:h-12 sm:w-12" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
              </svg>
          </div>
        </div>
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${44 - mobile},${44 - mobile} Q ${width *0.3},${44 - mobile} ${width * 0.5},${273 - (mobile * 4)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${44 - mobile},${44 - mobile} Q ${width *0.3},${44 - mobile} ${width * 0.5},${273 - (mobile * 4)}`}
            strokeWidth={2}
            stroke="url(#light-running1)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running1" gradientUnits="userSpaceOnUse" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="5s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="5s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="5s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="5s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${44 - mobile},${140 - mobile * 1.5} Q ${width *0.3},${140 - mobile * 1.5} ${width * 0.5},${273 - (mobile * 4)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${44 - mobile},${140 - mobile * 1.5} Q ${width *0.3},${140 - mobile * 1.5} ${width * 0.5},${273 - (mobile * 4)}`}
            strokeWidth={2}
            stroke="url(#light-running2)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running2" gradientUnits="userSpaceOnUse" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${44 - mobile},${273 - mobile * 3.25} Q ${width *0.3},${273 - mobile* 3.25} ${width * 0.5},${273 - (mobile * 3.25)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${44 - mobile},${273 - mobile * 3.25} Q ${width *0.3},${273 - mobile* 3.25} ${width * 0.5},${273 - (mobile * 3.25)}`}
            strokeWidth={2}
            stroke="url(#light-running3)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running3" gradientUnits="userSpaceOnUse" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="2.5s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="2.5s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="2.5s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="2.5s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${44 - mobile},${406 - mobile * 4.8} Q ${width *0.3},${406 - mobile * 4.8} ${width * 0.5},${273 - (mobile * 2.5)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${44 - mobile},${406 - mobile * 4.8} Q ${width *0.3},${406 - mobile * 4.8} ${width * 0.5},${273 - (mobile * 2.5)}`}
            strokeWidth={2}
            stroke="url(#light-running4)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running4" gradientUnits="userSpaceOnUse" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="1.5s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="1.5s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="1.5s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="1.5s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${44 - mobile},${502 - mobile * 5.5} Q ${width *0.3},${502 - mobile * 5.5} ${width * 0.5},${273 - (mobile * 2.5)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${44 - mobile},${502 - mobile * 5.5} Q ${width *0.3},${502 - mobile * 5.5} ${width * 0.5},${273 - (mobile * 2.5)}`}
            strokeWidth={2}
            stroke="url(#light-running5)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running5" gradientUnits="userSpaceOnUse" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="1.9s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="1.9s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="1.9s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="1.9s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${width * 0.96 - mobile * 0.7},${44 - mobile} Q ${width *0.70 },${44 - mobile} ${width * 0.505},${273 - (mobile * 4)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${width * 0.96 - mobile * 0.7},${44 - mobile} Q ${width *0.70 },${44 - mobile} ${width * 0.505},${273 - (mobile * 4)}`}
            strokeWidth={2}
            stroke="url(#light-running6)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running6" gradientUnits="userSpaceOnUse" x1="100%" x2="0%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${width * 0.96 - mobile* 0.7},${140 - mobile * 1.5} Q ${width *0.70 },${140 - mobile * 1.5} ${width * 0.505},${273 - (mobile * 4)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${width * 0.96 - mobile* 0.7},${140 - mobile * 1.5} Q ${width *0.70 },${140 - mobile * 1.5} ${width * 0.505},${273 - (mobile * 4)}`}
            strokeWidth={2}
            stroke="url(#light-running7)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running7" gradientUnits="userSpaceOnUse" x1="100%" x2="0%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="1.8s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="1.8s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="1.8s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="1.8s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${width * 0.96 - mobile* 0.7},${273 - mobile * 3.25} Q ${width *0.70 },${273 - mobile * 3.25} ${width * 0.505},${273 - (mobile * 3.25)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${width * 0.96 - mobile* 0.7},${273 - mobile * 3.25} Q ${width *0.70 },${273 - mobile * 3.25} ${width * 0.505},${273 - (mobile * 3.25)}`}
            strokeWidth={2}
            stroke="url(#light-running8)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running8" gradientUnits="userSpaceOnUse" x1="100%" x2="0%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="1.6s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="1.6s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="1.6s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="1.6s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${width * 0.96 - mobile* 0.7},${406 - mobile * 4.8} Q ${width *0.70 },${406 - mobile * 4.8} ${width * 0.505},${273 - (mobile * 2.5)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${width * 0.96 - mobile* 0.7},${406 - mobile * 4.8} Q ${width *0.70 },${406 - mobile * 4.8} ${width * 0.505},${273 - (mobile * 2.5)}`}
            strokeWidth={2}
            stroke="url(#light-running9)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running9" gradientUnits="userSpaceOnUse" x1="100%" x2="0%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          fill="none"
          width={width}
          height="546"
          viewBox={`0 0 ${width} 546`}
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 w-full h-auto"
        >
          <path
            d={`M ${width * 0.96 - mobile* 0.7},${502 - mobile * 5.5} Q ${width *0.70 },${502 - mobile * 5.5} ${width * 0.505},${273 - (mobile * 2.5)}`} stroke="gray"
            strokeWidth={2}
            strokeOpacity={0.2}
            strokeLinecap="round"
          ></path>
          <path
            d={`M ${width * 0.96 - mobile* 0.7},${502 - mobile * 5.5} Q ${width *0.70 },${502 - mobile * 5.5} ${width * 0.505},${273 - (mobile * 2.5)}`}
            strokeWidth={2}
            stroke="url(#light-running10)"
            strokeOpacity={1}
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient id="light-running10" gradientUnits="userSpaceOnUse" x1="100%" x2="0%" y1="0%" y2="0%">
              <stop stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0; 1" dur="1.7s" repeatCount="indefinite" />
              </stop>
              <stop stopColor="#fff">
                <animate attributeName="offset" values="0.1; 1.1" dur="1.7s" repeatCount="indefinite" />
              </stop>
              <stop offset="32.5%" stopColor="#fff">
                <animate attributeName="offset" values="0.2; 1.2" dur="1.7s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#fff" stopOpacity={0}>
                <animate attributeName="offset" values="0.3; 1.3" dur="1.7s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>

  );
};

