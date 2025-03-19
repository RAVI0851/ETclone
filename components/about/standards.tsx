"use client"

import { useState, useEffect, useRef } from "react"
import ambition from "@/components/assets/security.jpg"
import { useInView } from "react-intersection-observer"

const standards = [
  {
    id: "ambition",
    title: "Connecting Talent and Opportunity",
    subtitle: "Ambition",
    description:
      "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
    points: [
      "Connect skilled developers with ideal roles",
      "Streamline tech recruitment process",
      "Create optimal candidate-company matches",
    ],
    image: "https://www.everythingtalent.ai/assets/about-us/integrity.webp",
  },
  {
    id: "satisfaction",
    title: "Partnering for Success",
    subtitle: "Satisfaction",
    description:
      "Your success is our mission, and we're here to fuel it every step of the way by becoming your partner in achieving hiring excellence. For us, your success isn't just a goal; it's the spark that drives the future of tech and innovation!",
    points: [
      "Dedicated partnership for hiring success",
      "Fuel company growth through talent",
      "Drive tech innovation through matching",
    ],
    image: "https://www.everythingtalent.ai/assets/about-us/some1.avif",
  },
  {
    id: "integrity",
    title: "Building Trust in Hiring",
    subtitle: "Integrity",
    description:
      "We believe that trust is the foundation of every great hire. That's why we make it our mission to prioritize clarity and trust at every step of the journey.",
    points: [
      "Build hiring confidence through transparency",
      "Prioritize trust in recruitment process",
      "Foster honest candidate-employer relationships",
    ],
    image: "https://www.everythingtalent.ai/assets/about-us/integrity.webp",
  },
  {
    id: "vigilance",
    title: "Security-Driven Solutions",
    subtitle: "Vigilance",
    description:
      "Confidence starts with security, and we are committed to enhancing your experience. Your security is woven into every part of our platform so you can drive forward without a second thought.",
    points: [
      "Prioritize end-to-end platform security",
      "Ensure protected recruitment experience",
      "Build confidence through data protection",
    ],
    image: "https://www.everythingtalent.ai/assets/about-us/some1.avif",
  },
]

export default function AboutStandards() {
  const [activeStandard, setActiveStandard] = useState("ambition")
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const pointsRefs = useRef<(HTMLLIElement | null)[]>([])
  const { ref: mobileContainerRef, inView: mobileContainerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const mobileItemsRefs = useRef<(HTMLDivElement | null)[]>([])
  const mobilePointsRefs = useRef<(HTMLLIElement | null)[][]>([])
  const mobileImagesRefs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    mobilePointsRefs.current = standards.map(() => [])
    mobileImagesRefs.current = standards.map(() => null)
    mobileItemsRefs.current = standards.map(() => null)
  }, [])

  useEffect(() => {
    if (contentInView) {
      pointsRefs.current.forEach((ref, index) => {
        if (ref) {
          setTimeout(
            () => {
              ref.style.opacity = "1"
              ref.style.transform = "translateX(0)"
            },
            300 + index * 150,
          )
        }
      })
    }
  }, [contentInView, activeStandard])

  useEffect(() => {
    if (mobileContainerInView) {
      mobileItemsRefs.current.forEach((ref, cardIndex) => {
        if (ref) {
          setTimeout(() => {
            ref.style.opacity = "1"
            ref.style.transform = "translateY(0)"
            
            mobilePointsRefs.current[cardIndex]?.forEach((pointRef, pointIndex) => {
              if (pointRef) {
                setTimeout(() => {
                  pointRef.style.opacity = "1"
                  pointRef.style.transform = "translateX(0)"
                }, 300 + pointIndex * 150)
              }
            })
            
            if (mobileImagesRefs.current[cardIndex]) {
              mobileImagesRefs.current[cardIndex]!.style.opacity = "1"
              mobileImagesRefs.current[cardIndex]!.style.transform = "scale(1)"
            }
          }, 300 * cardIndex)
        }
      })
    }
  }, [mobileContainerInView])

  const activeContent = standards.find((s) => s.id === activeStandard)

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-white dark:bg-slate-950 bg-gradient-to-br dark:from-black dark:via-slate-900 dark:to-slate-950">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_10%,#000_10%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)] before:absolute before:inset-0 before:from-[#1c153117] before:via-[#2d224f28] before:to-[#6151926c] before:z-10 after:absolute after:inset-0 after:via-black/10 after:to-black/30"></div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 bottom-0 w-full h-[100px] md:h-[200px] bg-gradient-to-b from-white via-white dark:from-black"></div>
      <div className="container relative mx-auto px-4 py-16 max-w-7xl" ref={sectionRef}>
        <div className="text-center mb-8">
          <div className="flex flex-col items-center mb-8 sm:mb-16">
            <div className="flex items-center justify-center w-full">
              <div className="dark:bg-[#404040] bg-gray-100 py-1 px-2 rounded-lg">
                <small className="text-sm leading-none text-center w-full dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
                  Our Standards
                </small>
              </div>
            </div>
            <h2 className="mt-5 mb-5 text-5xl leading-[44px] md:text-center font-bold text-gray-900 dark:text-white">
              The Fuel for
              <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-300 text-transparent bg-clip-text"> Our Vision</span>
            </h2>
            <p className="text-gray-600 sm:text-xl sm:leading-[30px] dark:text-slate-400 text-center">
              Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
            </p>
          </div>
          <div className="inline-flex bg-gradient-to-br border from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] shadow-md rounded-full p-1 relative max-sm:hidden">
            {standards.map((standard) => (
              <button
                key={standard.id}
                className={`px-6 py-2 rounded-full relative z-10 transition-colors duration-200 ${activeStandard === standard.id ? "text-gray-900" : "text-gray-600 hover:text-gray-900 dark:hover:text-slate-300"}`}
                onClick={() => setActiveStandard(standard.id)}
              >
                <span className="relative z-10">{standard.subtitle}</span>
                {activeStandard === standard.id && (
                  <div className="absolute inset-0 bg-white rounded-full shadow-sm"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        <div
          ref={contentRef}
          className={`${contentInView ? "opacity-100 transform-none" : "opacity-0 translate-x-5"} transition-all duration-1000`}
        >
          <div className="max-sm:hidden">
            <div className="bg-gradient-to-br border from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-16 transition-transform duration-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-medium">{activeContent?.title}</h2>
                  <p className="text-xl">{activeContent?.subtitle}</p>
                  <p className="text-gray-600">{activeContent?.description}</p>
                  <ul className="list-none space-y-3 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    {activeContent?.points.map((point, index) => (
                      <li
                        key={index}
                        ref={(el) => (pointsRefs.current[index] = el)}
                        className="flex items-center gap-2"
                        style={{ opacity: 0, transform: "translateX(-20px)", transition: "all 0.5s ease" }}
                      >
                        <span className="text-lg text-purple-500">✧</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[400px]">
                  <img
                    src={activeContent?.image || "/placeholder.svg"}
                    alt={`${activeContent?.subtitle} illustration`}
                    className="absolute right-0 top-0 w-full h-full object-cover rounded-lg"
                    style={{
                      opacity: contentInView ? 1 : 0,
                      transform: contentInView ? "scale(1)" : "scale(0.9)",
                      transition: "all 0.8s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 w-[calc(100%-1rem)] mx-auto sm:hidden" ref={mobileContainerRef}>
          {standards.map((standard, cardIndex) => (
            <div
              key={standard.id}
              ref={(el) => (mobileItemsRefs.current[cardIndex] = el)}
              className="bg-gradient-to-br border from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-16 transition-transform duration-200"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease" }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-medium">{standard.title}</h2>
                  <p className="text-xl">{standard.subtitle}</p>
                  <p className="text-gray-600">{standard.description}</p>
                  <ul className="list-none space-y-3 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    {standard.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        ref={(el) => {
                          if (!mobilePointsRefs.current[cardIndex]) {
                            mobilePointsRefs.current[cardIndex] = [];
                          }
                          mobilePointsRefs.current[cardIndex][pointIndex] = el;
                        }}
                        className="flex items-center gap-2"
                        style={{ opacity: 0, transform: "translateX(-20px)", transition: "all 0.5s ease" }}
                      >
                        <span className="text-lg text-purple-500">✧</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[400px]">
                  <img
                    src={standard.image || "/placeholder.svg"}
                    alt={`${standard.subtitle} illustration`}
                    ref={(el) => (mobileImagesRefs.current[cardIndex] = el)}
                    className="absolute right-0 top-0 w-full h-full object-cover rounded-lg"
                    style={{
                      opacity: 0,
                      transform: "scale(0.9)",
                      transition: "all 0.8s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}