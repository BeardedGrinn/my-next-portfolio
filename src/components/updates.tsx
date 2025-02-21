"use client"

import { FadeInSection } from "./fade-in-section"

export default function Updates() {
  const updates = [
    {
      date: "2024-02-20",
      title: "New Project Launch",
      content: "Just launched a new e-commerce platform built with Next.js and Stripe integration.",
    },
    {
      date: "2024-02-15",
      title: "Tech Talk",
      content: "Gave a presentation on Modern Web Development at the local tech meetup.",
    },
    {
      date: "2024-02-10",
      title: "Blog Post",
      content: "Published an article about optimizing React applications for better performance.",
    },
  ]

  return (
    <section id="updates" className="min-h-screen py-20">
      <FadeInSection>
        <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Latest Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <div key={index} className="bg-black/40 rounded-lg p-6">
                <h3 className="text-lg font-semibold">{update.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{update.date}</p>
                <p className="text-gray-200">{update.content}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}