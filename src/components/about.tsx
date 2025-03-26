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
        <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-white max-w-8xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image on the left */}
            <div className="flex justify-center md:order-1">
              <div className={`transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                  src={images[currentImageIndex]}
                  alt="Profile"
                  width={256}
                  height={256}
                  className="w-72 h-72 rounded-full"
                />
              </div>
            </div>

            {/* Scrollable text on the right */}
            <div className="space-y-4 h-80 overflow-y-auto pr-4 md:order-2">
              <p className="text-lg">
                Hi, I’m Mitch. With a background as a maintenance technician and a foundation in computer game design from over a decade ago, I rediscovered my passion for software development and decided to pivot back into tech. To bridge the gap and stay current, I joined the School of Code, where I’ve been refreshing my skills and preparing to break into the tech industry. I thrive on solving complex problems with simple, effective solutions and enjoy collaborating with others to explore innovative ideas. I’m excited to bring my unique perspective to a team that values creativity, diversity, and continuous learning.
              </p>
              <p className="text-lg">
                I've just started my journey into the tech industry, and I'm eager to learn and grow as a developer. I'm currently focusing on building projects with React, Next.js, and Tailwind CSS. I'm also learning about TypeScript, testing, and CI/CD pipelines. Now that I've graduated from the School of Code, I'm looking for opportunities to work with a team that values collaboration, creativity, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
