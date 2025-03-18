"use client"
import { useInView } from "react-intersection-observer"
import { Brain, Users, GraduationCap, Rocket } from "lucide-react"

export default function AboutStory() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: card4Ref, inView: card4InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={sectionRef} className="relative overflow-x-clip py-28 mx-auto">
      <div className="pointer-events-none absolute inset-y-0 bottom-0 w-full h-[100px] md:h-[200px] bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-background"></div>
      <span className="absolute block w-1/2 blur-xl h-40 border top-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-background -translate-y-1/2 z-10"></span>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:[background-size:20px_20px]"></div>
      <div className="container relative max-w-7xl mx-auto px-4">
        <div className="absolute left-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none -z-10"></div>
        <div className="absolute right-[50px] top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-350 to-transparent opacity-20 blur-2xl pointer-events-none -z-10"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 blur-3xl"></div>
        <div className="flex flex-row lg:gap-20 gap-12">
          <div
            ref={textRef}
            className={`lg:w-1/2 relative ${textInView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
          >
            <h2 className="mb-6 text-4xl font-bold  dark:text-white sm:text-5xl">
              The <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-300 text-transparent bg-clip-text">Story</span> Behind Us
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              It all started with one question: What if hiring didn't have to feel like gambling on a hunch?
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div
                ref={card1Ref}
                className={`rounded-xl border border-border hover:border-none dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-200 group dark:border-gray-700 hover:gradient-border hover:bg-purple-600 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card1InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                <Brain className="mb-3 h-6 w-6 text-purple-400" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">AI-Powered</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Advanced AI/ML algorithms for precise matching
                </p>
              </div>
              <div
                ref={card2Ref}
                className={`rounded-xl border border-border hover:border-none dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-200 group dark:border-gray-700 hover:gradient-border hover:bg-purple-600 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card2InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                <Users className="mb-3 h-6 w-6 text-purple-400" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Human-Centric</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Built by recruiters, for recruiters</p>
              </div>
              <div
                ref={card3Ref}
                className={`rounded-xl border border-border hover:border-none dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-200 group dark:border-gray-700 hover:gradient-border hover:bg-purple-600 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card3InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                <GraduationCap className="mb-3 h-6 w-6 text-purple-400" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Skill Assessment</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Comprehensive skill evaluation system</p>
              </div>
              <div
                ref={card4Ref}
                className={`rounded-xl border border-border hover:border-none dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-200 group dark:border-gray-700 hover:gradient-border hover:bg-purple-600 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card4InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                <Rocket className="mb-3 h-6 w-6 text-purple-400" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Future-Ready</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Constantly evolving with industry needs</p>
              </div>
            </div>
          </div>
          <div
            ref={imageRef}
            className={`lg:w-1/2 relative ${imageInView ? "opacity-100 transform-none" : "opacity-0 scale-95"} transition-all duration-1000`}
          >
            <div className="relative h-[500px] transition-transform duration-200 hover:scale-x-105 overflow-hidden rounded-2xl">
              <img
                src="https://www.everythingtalent.ai/assets/about-us/our-story.svg"
                alt="Story section visual representation"
                className="object-cover absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

