// import React from 'react';
// import Head from 'next/head';
// import Navbar from '../components/Navbar/navbar';

// const HomePage: React.FC = () => {
//   return (
//     <div>
//       <Head>
//         <title>My Next.js Portfolio</title>
//         <meta name="description" content="My portfolio built with Next.js" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar />
//       <main>
//         <h1>Welcome to My Portfolio</h1>
//         <p>This is the homepage of my portfolio built with Next.js.</p>
//       </main>
//     </div>
//   );
// };

// export default HomePage;

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
