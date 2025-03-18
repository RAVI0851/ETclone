"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-founder",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aisha Patel",
    role: "Chief AI Officer",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Rodriguez",
    role: "VP of Product",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    twitter: "#",
  },
]

export default function AboutTeam() {
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
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            We're a diverse group of thinkers, innovators, and experts passionate about transforming talent acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group opacity-0 translate-y-8 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <Link
                      href={member.linkedin}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </Link>
                    <Link
                      href={member.twitter}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

