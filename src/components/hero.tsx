"use client"

import { FadeInSection } from "./fade-in-section"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <FadeInSection>
        <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-right text-white">
          <div className="flex items-center mb-4">
            <img src="https://scontent.fbhx1-2.fna.fbcdn.net/v/t1.6435-9/126502060_10158603263993954_7926409188052956935_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4-edqs7o6a8Q7kNvgEnUehK&_nc_zt=23&_nc_ht=scontent.fbhx1-2.fna&_nc_gid=ACl9v7pSjU5Mt0YepIGyGTc&oh=00_AYBObV6xpCihXek5KGgAXEXJDKipnFz8qnzxFVJJHy2Z-g&oe=67DFC0F2" alt="Mitchell Grinnell" className="w-40 h-40 rounded-full mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">Mitchell Grinnell</h1>
          </div>
          <h2 className="text-xl md:text-2xl mb-6">Junior Software Developer</h2>
          <p className="text-lg max-w-2xl mx-auto">
            The sky's the limit. Building beautiful and functional web experiences with modern technologies.
          </p>
        </div>
      </FadeInSection>
    </section>
  )
}
