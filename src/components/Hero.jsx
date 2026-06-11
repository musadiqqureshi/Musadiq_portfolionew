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

function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
      className="relative mx-auto"
      style={{ width: 'min(80vw, 350px)' }}
    >
      {/* Soft glow backdrop */}
      <div
        className="absolute -inset-6 rounded-[2.5rem]"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(124,58,237,0.35) 0%, rgba(37,99,235,0.18) 45%, transparent 72%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Floating portrait card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Gradient border wrapper */}
        <div
          className="relative rounded-[2rem] p-[2px]"
          style={{
            background: 'linear-gradient(150deg, rgba(124,58,237,0.9), rgba(37,99,235,0.5) 40%, rgba(6,182,212,0.7) 75%, rgba(245,158,11,0.6))',
            boxShadow: '0 0 60px rgba(124,58,237,0.3)',
          }}
        >
          {/* Inner frame holds the photo */}
          <div
            className="relative rounded-[1.9rem] overflow-hidden"
            style={{
              aspectRatio: '5 / 6',
              background: 'linear-gradient(160deg, #161630 0%, #0c0c1f 60%, #0a0a1a 100%)',
            }}
          >
            <img
              src="/profile.png"
              alt="Muhammad Mussaddiq Ahmed Qureshi"
              className="absolute inset-0 w-full h-full select-none pointer-events-none"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              draggable={false}
            />
            {/* Subtle bottom fade into frame */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(10,10,26,0.55), transparent)' }}
            />
          </div>
        </div>

        {/* Floating accent badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl backdrop-blur-md whitespace-nowrap"
          style={{
            background: 'rgba(10,10,26,0.85)',
            border: '1px solid rgba(124,58,237,0.4)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-white">Available for Hire</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const ri = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2400)
    const qi = setInterval(() => setQuoteIndex(i => (i + 1) % quotes.length), 5000)
    return () => { clearInterval(ri); clearInterval(qi) }
  }, [])

  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-aura-mesh pt-28 pb-16 lg:pt-24"
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

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT — Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', color: '#a78bfa' }}
            >
              <Sparkles size={12} />
              Python & Big Data Engineer
              <Sparkles size={12} />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black leading-none mb-3"
            >
              <span className="text-white">Muhammad </span>
              <span className="gradient-text">Mussaddiq</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mt-2">
                Ahmed Qureshi
              </span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-9 flex items-center justify-center lg:justify-start mb-5"
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

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
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
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <button onClick={() => scrollTo('#projects')} className="btn-primary">
                <ArrowRight size={18} />
                View Projects
              </button>
              <button onClick={() => scrollTo('#contact')} className="btn-secondary">
                <Mail size={18} />
                Contact Me
              </button>
              <a href="/Muhammad-Mussaddiq-Ahmed-Qureshi-CV.pdf" download className="btn-gold">
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4"
            >
              {[
                { val: '400+', label: 'Projects' },
                { val: '7+', label: 'Years IT' },
                { val: '5+', label: 'Big Data' },
                { val: '20+', label: 'Technologies' },
              ].map(stat => (
                <div key={stat.val} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.val}</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <ProfilePhoto />
          </div>
        </div>

        {/* Rotating quote — full width */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="p-5 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed">{quotes[quoteIndex].text}</p>
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
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} className="text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
