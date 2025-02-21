"use client"

import type React from "react"

import useInView from "@/hooks/use-in-view"

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
}

export function FadeInSection({ children, className = "" }: FadeInSectionProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}

