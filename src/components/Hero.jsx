import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles, ArrowRight, Download, Mail } from 'lucide-react'

const roles = [
  'Senior Python Developer',
  'Big Data Engineer',
  'Flask & FastAPI Expert',
  'Apache Spark Architect',
  'Data Pipeline Engineer',
  'AI / ML Developer',
  'Distributed Systems Engineer',
]

const quotes = [
  { text: '"Data is not just information; it is the architecture of intelligent decisions."', author: '— Muhammad Mussaddiq' },
  { text: '"Engineering scalable systems means designing for tomorrow\'s complexity today."', author: '— Engineering Principle' },
  { text: '"Great software is built where logic, performance, and purpose meet."', author: '— Software Philosophy' },
  { text: '"AI becomes powerful when clean data, strong architecture, and real-world problems connect."', author: '— Data Science Insight' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const ri = setInterval(() => {
      setRoleIndex(i => (i + 1) % roles.length)
    }, 2400)
    const qi = setInterval(() => {
      setQuoteIndex(i => (i + 1) % quotes.length)
    }, 5000)
    return () => { clearInterval(ri); clearInterval(qi) }
  }, [])

  const scrollTo = href => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-aura-mesh"
    >
      {/* Orb background glows */}
      <div className="orb w-96 h-96 top-1/4 left-1/4 bg-purple-600" style={{ filter: 'blur(120px)', opacity: 0.12 }} />
      <div className="orb w-80 h-80 bottom-1/4 right-1/4 bg-cyan-500" style={{ filter: 'blur(100px)', opacity: 0.1 }} />
      <div className="orb w-64 h-64 top-1/2 left-1/2 bg-blue-600" style={{ filter: 'blur(90px)', opacity: 0.08 }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
          style={{
            background: 'rgba(124,58,237,0.1)',
            border: '1px solid rgba(124,58,237,0.3)',
            color: '#a78bfa',
          }}
        >
          <Sparkles size={12} />
          Available for Freelance & Full-time Opportunities
          <Sparkles size={12} />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4"
        >
          <span className="text-white">Muhammad </span>
          <br className="sm:hidden" />
          <span className="gradient-text">Mussaddiq</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-2"
        >
          Ahmed Qureshi
        </motion.h2>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-12 flex items-center justify-center mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-xl font-mono font-semibold gradient-text-purple"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Sub description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Senior engineer with{' '}
          <span className="text-purple-400 font-semibold">7+ years of IT experience</span> and{' '}
          <span className="text-cyan-400 font-semibold">5+ years in Big Data</span> — architecting distributed
          systems, real-time pipelines, and AI-powered solutions across{' '}
          <span className="text-amber-400 font-semibold">400+ projects</span> delivered.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-primary text-base px-8 py-4"
          >
            <ArrowRight size={18} />
            View Projects
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-secondary text-base px-8 py-4"
          >
            <Mail size={18} />
            Contact Me
          </button>
          <a
            href="/Muhammad-Mussaddiq-Ahmed-Qureshi-CV.pdf"
            download
            className="btn-gold text-base px-8 py-4"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-12"
        >
          {[
            { val: '400+', label: 'Projects' },
            { val: '7+', label: 'Years IT' },
            { val: '5+', label: 'Big Data' },
            { val: '20+', label: 'Technologies' },
          ].map(stat => (
            <div key={stat.val} className="text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.val}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Rotating quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="p-5 rounded-2xl text-center"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed">
                  {quotes[quoteIndex].text}
                </p>
                <p className="text-xs text-gray-500 mt-2">{quotes[quoteIndex].author}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
