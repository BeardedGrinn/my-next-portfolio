import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/home" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-400">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-white hover:text-gray-400">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/updates" className="text-white hover:text-gray-400">
            Updates
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-400">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}