"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { FadeInSection } from "./fade-in-section"

const images = [
  "/images/BeachWalk.png",
  "/images/Lena.png",
  "/images/ThailandClimbing.png",
]

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fade, setFade] = useState(false)

useEffect(() => {
  const interval = setInterval(() => {
    setFade(true)
    setTimeout(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    setFade(false)
    }, 500) // Fade out after 500ms
  }, 5000) // Change image every 5 seconds
  
  return () => clearInterval(interval)
}, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <FadeInSection>
        <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-white max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate developer with 5 years of experience in building web applications. I specialize in
                React, Next.js, and modern web technologies.
              </p>
              <p className="text-lg">
                My journey in tech started over ten years ago when I did computer games design at college.
              </p>
            </div>
            <div className="flex justify-center">
            <div className={`transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                  src={images[currentImageIndex]}
                  alt="Profile"
                  width={256}
                  height={256}
                  className="w-64 h-64 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
