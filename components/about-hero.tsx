"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

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

    if (heroRef.current) observer.observe(heroRef.current)
    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (subtitleRef.current) observer.unobserve(subtitleRef.current)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative py-20 md:py-32 overflow-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out"
          >
            Transforming Talent Acquisition with AI
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl text-gray-600 mb-8 opacity-0 translate-y-8 transition-all duration-1000 delay-500 ease-out"
          >
            We're on a mission to revolutionize how companies find, engage, and hire the best talent using cutting-edge
            artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 translate-y-8 transition-all duration-1000 delay-700 ease-out animate-in">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Get started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-purple-200 hover:bg-purple-50">
              Learn more
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

