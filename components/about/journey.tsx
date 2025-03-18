"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

const timelineItems = [
  {
    year: "2024",
    title: "Everything AI 2.0",
    description:
      "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    stats: [
      { value: "50K+", label: "users" },
      { value: "98%", label: "accuracy" },
      { value: "2x faster", label: "processing" },
    ],
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1536&q=75",
  },
  {
    year: "2023",
    title: "ML Integration",
    description:
      "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
    stats: [
      { value: "+30%", label: "accuracy" },
      { value: "15+", label: "integrations" },
      { value: "25K+", label: "users" },
    ],
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1536&q=75",
  },
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
    stats: [
      { value: "10+", label: "features" },
      { value: "1M+", label: "dataProcessed" },
      { value: "1K+", label: "clients" },
    ],
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1536&q=75",
  },
]

export default function AboutJourney() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="story" className="py-16 px-4 bg-white dark:bg-slate-950 lg:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`flex flex-col items-center justify-center text-center ${sectionInView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
        >
          <div className="flex items-center justify-center w-full">
            <div className="dark:bg-[#404040] bg-gray-100 py-1 px-2 rounded-lg">
              <small className="text-sm leading-none text-center w-full dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
                Our Values & Milestones
              </small>
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Our
            <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-300 bg-clip-text text-transparent"> Journey</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Explore the milestones that have shaped our path to innovation, where every step brings us closer to
            transforming the future.
          </p>
          <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group inline-flex animate-rainbow cursor-pointer items-center justify-center bg-[length:200%] font-medium text-white dark:text-black ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white bg-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 h-11 rounded-md group relative overflow-hidden px-8 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Subscribe to Updates
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="mt-24">
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.year} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: yearRef, inView: yearInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="flex items-center justify-center sticky top-12 lg:top-28 px-4" ref={ref}>
      <div
        className="flex flex-col relative h-[600px] w-full max-w-8xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950"
        style={{ transform: "none" }}
      >
        <div className="" style={{ opacity: 0 }}></div>
        <div className="flex flex-col md:flex-row h-full p-8 gap-12 shadow-xl bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950">
          <div className="w-full md:w-[45%] space-y-6">
            <div>
              <span
                ref={titleRef}
                className={`text-sm font-medium text-purple-600 dark:text-purple-400 ${titleInView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                {item.title}
              </span>
              <h2
                ref={yearRef}
                className={`text-3xl font-bold mt-1 ${yearInView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
              >
                {item.year}
              </h2>
            </div>
            <p
              ref={descRef}
              className={`text-gray-600 dark:text-gray-300 leading-relaxed ${descInView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
            >
              {item.description}
            </p>
            <div
              ref={statsRef}
              className={`grid grid-cols-2 gap-4 pt-4 ${statsInView ? "opacity-100 transform-none" : "opacity-0 translate-y-5"} transition-all duration-1000`}
            >
              {item.stats.map((stat: any, i: number) => (
                <div key={i} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full md:w-[85%] h-full rounded-xl overflow-hidden hidden md:block">
            <div className="w-full h-full" style={{ transform: "scale(1.2)" }}>
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`${item.year} illustration`}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

