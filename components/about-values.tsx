"use client"

import { useEffect, useRef } from "react"
import { Brain, Users, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Brain,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI in talent acquisition.",
  },
  {
    icon: Users,
    title: "Diversity",
    description: "We build technology that reduces bias and creates opportunities for everyone.",
  },
  {
    icon: Lightbulb,
    title: "Transparency",
    description: "We believe in clear communication and explainable AI that users can trust.",
  },
  {
    icon: Shield,
    title: "Privacy",
    description: "We handle data with the utmost care and respect for individual privacy.",
  },
]

export default function AboutValues() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

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
    if (titleRef.current) observer.observe(titleRef.current)
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (titleRef.current) observer.unobserve(titleRef.current)
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-gray-600">
            These core principles guide everything we do, from product development to customer interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

