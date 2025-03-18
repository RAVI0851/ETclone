"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function AboutHero() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-black/20 dark:border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-black/20 dark:border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-black/20 dark:border-white/10 rounded-full animate-[spin_25s_linear_infinite]"></div>
      </div>
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 pt-20 lg:pt-28 mb-12 md:mb-16 lg:mb-20">
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-16 lg:gap-4">
            <div className="relative">
              <div className="space-y-8">
                <p className="mb-2 sm:mb-4 text-xs sm:text-sm font-semibold text-black dark:text-white tracking-wider">
                  ABOUT US
                </p>
                <p className="text-5xl max-sm:text-4xl font-bold leading-[60px] max-sm:leading-[50px] max-w-[600px]">
                  Shaping the Next Generation of HR
                  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-300"> Tech Recruitment.</span>
                </p>
                <p className="text-lg text-black/60 dark:text-white/70 leading-relaxed max-w-lg font-light">
                  At Everything Talent, we help you launch your recruitment into a new dimension.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a className="md:w-fit" href="https://app-everythingtalent-ai.vercel.app/login">
                    <button className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center bg-[length:200%] font-medium text-white dark:text-black transition-all duration-500 ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white bg-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 h-11 rounded-md px-8 text-sm sm:text-md">
                      Start for Free Today
                      <svg
                        className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a 1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              ref={heroRef}
              className={`relative h-[520px] w-full max-w-[520px] flex justify-center items-center ${heroInView ? "opacity-100 translate-y-0 animate-fade-in-up" : "opacity-0 translate-y-4"} transition-all duration-1000`}
            >
              <div className="absolute -right-20 md:-right-24 -top-20 h-[300px] w-[480px] md:h-[600px] md:w-[780px] rounded-full dark:bg-blue-500/20 bg-[#b9b6f0f8] blur-[150px]"></div>
              <div className="relative w-full h-full p-[5px] rounded-2xl bg-gradient-to-tr from-[#0EA5E9] via-[#E879F9] to-[#FACC15] transition-transform hover:scale-[1.01]">
                <div className="relative w-full h-full rounded-[12px] overflow-hidden">
                  <Image
                    src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroBg2.7b22de17.png&w=1536&q=75"
                    alt="Enhance hiring with AI-powered assessments and tracking"
                    fill
                    className="object-cover max-w-[520px] md:w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

