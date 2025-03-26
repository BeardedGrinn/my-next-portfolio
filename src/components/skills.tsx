"use client"

import { FadeInSection } from "./fade-in-section"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiPostgresql, SiJest, SiVercel, SiVite, SiFigma, SiJson, SiVitest, SiSentry } from "react-icons/si"

const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "ViTest", icon: <SiVitest /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "JSON", icon: <SiJson /> },
    { name: "Sentry", icon: <SiSentry /> },
]

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen py-20">
            <FadeInSection>
                <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-black/40 rounded-lg p-4 flex items-center justify-center">
                                <div className="text-3xl mr-4">{skill.icon}</div>
                                <p className="text-lg font-bold text-center">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>
        </section>
    )
}