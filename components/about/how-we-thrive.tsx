"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { UsersRound, Lightbulb, Rocket, TrendingUp, Star, Award } from "lucide-react"

export default function AboutHowWeThrive() {
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

  const { ref: card5Ref, inView: card5InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: card6Ref, inView: card6InView } = useInView({
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
        <div className="flex flex-row lg:gap-20 gap-12 lg:flex-row-reverse">
          <div
            ref={textRef}
            className={`lg:w-1/2 relative ${textInView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
              <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-300 bg-clip-text text-transparent">How We Thrive</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              At Everything Talent, we break the norm. Driven by community, we empower individuals to innovate, learn,
              and push boundaries—fostering shared growth and a relentless pursuit of excellence.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div
                ref={card1Ref}
                className={`rounded-xl relative group overflow-hidden dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-300 dark:border-gray-700 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card1InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-[2px] rounded-lg bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 -z-10 group-hover:from-purple-900/90 group-hover:via-slate-900 group-hover:to-slate-950 transition-all duration-300"></div>
                
                <UsersRound className="mb-3 h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">Community-Driven</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  We build strong connections and foster collaboration within our team.
                </p>
              </div>
              <div
                ref={card2Ref}
                className={`rounded-xl relative group overflow-hidden dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-300 dark:border-gray-700 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card2InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-[2px] rounded-lg bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 -z-10 group-hover:from-purple-900/90 group-hover:via-slate-900 group-hover:to-slate-950 transition-all duration-300"></div>
                
                <Lightbulb className="mb-3 h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">Innovation First</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  We encourage creative thinking and novel approaches to challenges.
                </p>
              </div>
              <div
                ref={card3Ref}
                className={`rounded-xl relative group overflow-hidden dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-300 dark:border-gray-700 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card3InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-[2px] rounded-lg bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 -z-10 group-hover:from-purple-900/90 group-hover:via-slate-900 group-hover:to-slate-950 transition-all duration-300"></div>
                
                <Rocket className="mb-3 h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">Action Oriented</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  We transform ideas into tangible results through decisive action.
                </p>
              </div>
              <div
                ref={card4Ref}
                className={`rounded-xl relative group overflow-hidden dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-300 dark:border-gray-700 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card4InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-[2px] rounded-lg bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 -z-10 group-hover:from-purple-900/90 group-hover:via-slate-900 group-hover:to-slate-950 transition-all duration-300"></div>
                
                <TrendingUp className="mb-3 h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">Continuous Growth</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  We embrace learning and development as core principles.
                </p>
              </div>
              <div
                ref={card5Ref}
                className={`rounded-xl relative group overflow-hidden dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-300 dark:border-gray-700 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card5InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-[2px] rounded-lg bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 -z-10 group-hover:from-purple-900/90 group-hover:via-slate-900 group-hover:to-slate-950 transition-all duration-300"></div>
                
                <Star className="mb-3 h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">Excellence Pursuit</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  We strive for exceptional quality in everything we do.
                </p>
              </div>
              <div
                ref={card6Ref}
                className={`rounded-xl relative group overflow-hidden dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl duration-300 dark:border-gray-700 bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] ${card6InView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-[2px] rounded-lg bg-gradient-to-br from-purple-50 via-pink-50 to-[#ffffff76] dark:from-black dark:via-slate-900 dark:to-slate-950 -z-10 group-hover:from-purple-900/90 group-hover:via-slate-900 group-hover:to-slate-950 transition-all duration-300"></div>
                
                <Award className="mb-3 h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">Shared Success</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  We celebrate achievements and grow together as one team.
                </p>
              </div>
            </div>
          </div>
          <div
            ref={imageRef}
            className={`lg:w-1/2 relative ${imageInView ? "opacity-100 transform-none" : "opacity-0 scale-95"} transition-all duration-1000`}
          >
            <div className="relative transition-transform duration-200 hover:scale-x-105 overflow-hidden rounded-2xl h-full">
              <Image
                src="https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Flanding-page%2Finsight-img-2.jpeg&w=1090&q=75"
                alt="Story section visual representation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}