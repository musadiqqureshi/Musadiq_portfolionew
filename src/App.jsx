import { SpeedInsights } from '@vercel/speed-insights/react'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Quotes from './components/Quotes'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function SectionDivider() {
  return <div className="section-separator mx-auto max-w-4xl" />
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Quotes />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  )
}
