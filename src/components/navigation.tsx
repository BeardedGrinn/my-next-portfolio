import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-black/20 py-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#hero" className="text-white hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-white hover:text-primary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-primary transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#updates" className="text-white hover:text-primary transition-colors">
              Updates
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-primary transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
