"use client"

import { FadeInSection } from "./fade-in-section"

export default function About() {
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
              <img
                src="https://scontent.fbhx1-1.fna.fbcdn.net/v/t39.30808-6/448589895_10161059701928954_1727753282008410826_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bJ7sU-QjB4oQ7kNvgF1P19s&_nc_zt=23&_nc_ht=scontent.fbhx1-1.fna&_nc_gid=ALRe6vD6G_uN0ooiC2JiQlV&oh=00_AYB2wlcPFvomA_Y7KiIeHwIVRA_lHplF0YYfsDaD4roS5w&oe=67BE3BE9"
                alt="Profile"
                className="w-64 h-64 rounded-full"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
