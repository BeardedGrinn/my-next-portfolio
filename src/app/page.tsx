import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"


export default function Home() {
  return (
    <main className="min-h-screen bg-[url('https://cdn.hswstatic.com/gif/gettyimages-139494347.jpg')] bg-fixed bg-cover bg-center">
      <div className="relative">
        <Navigation />
        <div className="container mx-auto px-2">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  )
}
