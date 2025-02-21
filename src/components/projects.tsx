"use client"

import Link from "next/link"
import { FadeInSection } from "./fade-in-section"
import { GithubIcon, ExternalLinkIcon } from "./icons"

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with Next.js and TypeScript.",
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with real-time updates and cart functionality.",
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
    {
      title: "Project 3",
      description: "A responsive dashboard with data visualization and analytics.",
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20">
      <FadeInSection>
        <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-black/40 rounded-lg overflow-hidden">
                <div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                    >
                      <GithubIcon />
                      <span>Code</span>
                    </Link>
                    <Link
                      href={project.demo}
                      className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLinkIcon />
                      <span>Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

