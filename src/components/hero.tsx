"use client"

import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <FadeInSection>
        <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-center text-white">
          <div className="flex items-center mb-4">
            <Image
             src="/images/profile.png" 
             alt="Mitchell Grinnell" 
             width={500}
             height={500}
             className="w-40 h-40 rounded-full mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">Mitchell Grinnell</h1>
          </div>
          <h2 className="text-xl md:text-3xl mb-6">Junior Software Developer</h2>
          <p className="text-lg max-w-3xl mx-auto">
            The sky's the limit. Building beautiful and functional web experiences with modern technologies.
          </p>
        </div>
      </FadeInSection>
    </section>
  )
}
