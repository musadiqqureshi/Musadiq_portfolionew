import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

const quotes = [
  {
    text: 'Data is not just information; it is the architecture of intelligent decisions.',
    theme: 'Data Philosophy',
    gradient: 'from-purple-600 to-blue-600',
    glow: 'rgba(124,58,237,0.2)',
  },
  {
    text: 'Engineering scalable systems means designing for tomorrow\'s complexity today.',
    theme: 'Systems Design',
    gradient: 'from-blue-600 to-cyan-600',
    glow: 'rgba(37,99,235,0.2)',
  },
  {
    text: 'Great software is built where logic, performance, and purpose meet.',
    theme: 'Software Engineering',
    gradient: 'from-cyan-600 to-teal-600',
    glow: 'rgba(6,182,212,0.2)',
  },
  {
    text: 'AI becomes powerful when clean data, strong architecture, and real-world problems connect.',
    theme: 'AI & Machine Learning',
    gradient: 'from-amber-600 to-orange-600',
    glow: 'rgba(245,158,11,0.2)',
  },
  {
    text: 'A pipeline is only as strong as its weakest transformation — validate early, scale confidently.',
    theme: 'Data Engineering',
    gradient: 'from-violet-600 to-purple-600',
    glow: 'rgba(109,40,217,0.2)',
  },
  {
    text: 'Distributed systems teach you that failure is not the exception — it is the requirement to design for.',
    theme: 'Distributed Systems',
    gradient: 'from-rose-600 to-pink-600',
    glow: 'rgba(225,29,72,0.15)',
  },
]

export default function Quotes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="orb w-80 h-80 top-1/2 right-1/4 bg-amber-600" style={{ filter: 'blur(130px)', opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag justify-center">
            <span className="w-8 h-px bg-cyan-500" />
            Engineering Philosophy
            <span className="w-8 h-px bg-cyan-500" />
          </div>
          <h2 className="section-heading text-white">
            Principles That <span className="gradient-text">Drive</span> My Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-7 flex flex-col gap-4 group relative overflow-hidden"
              style={{ boxShadow: `0 0 0 transparent` }}
            >
              {/* Gradient accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${q.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${q.gradient} flex items-center justify-center opacity-80`}>
                <Quote size={18} className="text-white" />
              </div>

              <p className="text-gray-200 text-base leading-relaxed font-medium italic flex-1">
                "{q.text}"
              </p>

              <div className="flex items-center gap-2 mt-auto">
                <div className={`h-px flex-1 bg-gradient-to-r ${q.gradient} opacity-30`} />
                <span className="text-xs text-gray-600 font-mono">{q.theme}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
