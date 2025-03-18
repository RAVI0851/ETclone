"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AboutMission() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (textRef.current) observer.observe(textRef.current)
    if (imageRef.current) observer.observe(imageRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (textRef.current) observer.unobserve(textRef.current)
      if (imageRef.current) observer.unobserve(imageRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At EverythingTalent, we believe that finding the right talent shouldn't be a matter of luck or endless
              hours of manual work. We're building AI-powered tools that understand the nuances of skills, experience,
              and cultural fit to connect companies with the perfect candidates.
            </p>
            <p className="text-lg text-gray-600">
              Our platform analyzes millions of data points to identify patterns and insights that humans might miss,
              creating more efficient, effective, and equitable hiring processes for organizations of all sizes.
            </p>
          </div>

          <div ref={imageRef} className="opacity-0 translate-x-8 transition-all duration-1000 ease-out">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Team collaboration"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

