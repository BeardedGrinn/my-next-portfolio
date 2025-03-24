"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FadeInSection } from "./fade-in-section"
import { GithubIcon, ExternalLinkIcon } from "./icons"

interface Project {
  title: string
  description: string
  image: string
  github: string
  demo: string
  languages: string[]
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("https://api.github.com/users/BeardedGrinn/repos")
      const data = await response.json()
      const sortedData = data.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      const recentRepos = sortedData.slice(0, 6)

      const projectsWithLanguages = await Promise.all(
        recentRepos.map(async (repo: any) => {
          const languagesResponse = await fetch(repo.languages_url)
          const languagesData = await languagesResponse.json()
          const languages = Object.keys(languagesData)
          return {
            title: repo.name,
            description: repo.description,
            image: "/placeholder.svg?height=200&width=400", // Replace with actual image if available
            github: repo.html_url,
            demo: repo.homepage || repo.html_url,
            languages,
          }
        })
      )

      setProjects(projectsWithLanguages)
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="min-h-screen py-20">
      <FadeInSection>
        <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-black/40 rounded-lg overflow-hidden">
                <div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex space-x-4 mb-4">
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
                  <div className="flex flex-wrap space-x-2">
                    {project.languages.map((language, langIndex) => (
                      <span key={langIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {language}
                      </span>
                    ))}
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

