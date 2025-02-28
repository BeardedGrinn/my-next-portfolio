import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Updates from "@/components/updates"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('https://cdn.hswstatic.com/gif/gettyimages-139494347.jpg')] bg-fixed bg-cover bg-center">
      <div className="relative">
        <Navigation />
        <div className="container mx-auto px-2">
          <Hero />
          <About />
          <Projects />
          <Updates />
          <Contact />
        </div>
      </div>
    </main>
  )
}
