import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '../data/experience'
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react'

const colorMap = {
  purple: { border: 'rgba(124,58,237,0.5)', dot: '#7c3aed', bg: 'rgba(124,58,237,0.1)', text: '#a78bfa', pill: 'rgba(124,58,237,0.15)' },
  cyan: { border: 'rgba(6,182,212,0.5)', dot: '#06b6d4', bg: 'rgba(6,182,212,0.1)', text: '#22d3ee', pill: 'rgba(6,182,212,0.15)' },
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 top-1/2 left-0 bg-purple-700" style={{ filter: 'blur(130px)', opacity: 0.09 }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center">
            <span className="w-8 h-px bg-cyan-500" />
            Work History
            <span className="w-8 h-px bg-cyan-500" />
          </div>
          <h2 className="section-heading text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.6), rgba(6,182,212,0.6))' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const c = colorMap[exp.color]
              const isLeft = idx % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#030712] z-10 flex-shrink-0"
                    style={{ background: c.dot, boxShadow: `0 0 12px ${c.dot}` }}
                  />

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 md:w-[46%] ${isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                    <div
                      className="glass-card p-6 md:p-8"
                      style={{ borderColor: c.border }}
                    >
                      {/* Badge row */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {exp.current && (
                          <span
                            className="px-3 py-1 rounded-full text-xs font-bold"
                            style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                          >
                            ● Current Role
                          </span>
                        )}
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af' }}
                        >
                          {exp.type}
                        </span>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af' }}
                        >
                          {exp.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Briefcase size={13} style={{ color: c.text }} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} style={{ color: c.text }} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} style={{ color: c.text }} />
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-5">
                        {exp.achievements.map((a, ai) => (
                          <li key={ai} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={14} style={{ color: c.text, flexShrink: 0, marginTop: 3 }} />
                            {a}
                          </li>
                        ))}
                      </ul>

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map(t => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md text-xs font-medium"
                            style={{ background: c.pill, color: c.text }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
