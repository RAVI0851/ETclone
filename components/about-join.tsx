"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function AboutJoin() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    if (contentRef.current) observer.observe(contentRef.current)
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (contentRef.current) observer.unobserve(contentRef.current)
    }
  }, [])
  \
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-purple-600 text-white"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 text-purple-100">
            We're always looking for talented individuals who are passionate about using technology to solve complex problems in talent acquisition.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-purple-50">
            View open positions
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

