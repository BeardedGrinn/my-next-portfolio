"use client"

import { FadeInSection } from "./fade-in-section"
import { MailIcon, LinkedinIcon, GithubIcon } from "./icons"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20">
      <FadeInSection>
        <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:mitchell.t.grinnell@hotmail.co.uk"
                  className="flex items-center space-x-3 hover:text-blue-400 transition-colors"
                >
                  <MailIcon />
                  <span>Email Me</span>
                </a>
                <a
                  href="https://linkedin.com/in/mitchell-grinnell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-blue-400 transition-colors"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/BeardedGrinn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-blue-400 transition-colors"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[150px] resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

