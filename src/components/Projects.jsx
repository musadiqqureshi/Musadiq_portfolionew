import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { featuredProjects, projectCategories, projectStats, projectCategoryStats } from '../data/projects'
import { ExternalLink, Tag, Zap, BarChart3, CheckCircle2 } from 'lucide-react'

const statColor = {
  purple: { bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.3)', text: '#a78bfa' },
  blue: { bg: 'rgba(37,99,235,0.12)', border: 'rgba(37,99,235,0.3)', text: '#60a5fa' },
  cyan: { bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)', text: '#22d3ee' },
  gold: { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', text: '#fbbf24' },
}

function ProjectCard({ project, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="project-card group"
    >
      {/* Top strip gradient */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{project.icon}</span>
          <div>
            <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
            <span className="text-xs text-gray-500">{project.categoryLabel}</span>
          </div>
        </div>
        <span
          className="px-2 py-0.5 rounded-md text-xs font-medium flex-shrink-0"
          style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa' }}
        >
          {project.categoryLabel.split(' ')[0]}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Features */}
      <ul className="space-y-1.5">
        {project.features.slice(0, 3).map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
            <CheckCircle2 size={12} className="text-cyan-500 flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map(t => (
          <span
            key={t}
            className="px-2 py-0.5 rounded text-xs font-mono"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#6b7280', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="px-2 py-0.5 rounded text-xs text-gray-600">+{project.tech.length - 5}</span>
        )}
      </div>

      {/* Impact */}
      <div
        className="flex items-start gap-2 p-3 rounded-xl text-xs"
        style={{ background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.12)' }}
      >
        <Zap size={13} className="text-cyan-500 flex-shrink-0 mt-0.5" />
        <span className="text-cyan-300/80">{project.impact}</span>
      </div>

      {/* CTA */}
      <button
        className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/btn"
        style={{ color: '#a78bfa' }}
        onClick={() => alert('Case study coming soon — contact me for detailed project documentation.')}
      >
        <ExternalLink size={14} />
        <span className="group-hover/btn:underline">View Case Study</span>
      </button>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 top-0 right-0 bg-blue-700" style={{ filter: 'blur(140px)', opacity: 0.08 }} />
      <div className="orb w-80 h-80 bottom-0 left-0 bg-purple-700" style={{ filter: 'blur(120px)', opacity: 0.08 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="section-tag justify-center">
            <span className="w-8 h-px bg-cyan-500" />
            Portfolio
            <span className="w-8 h-px bg-cyan-500" />
          </div>
          <h2 className="section-heading text-white">
            <span className="gradient-text-gold">400+</span> Projects <span className="gradient-text">Delivered</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3">
            A curated selection of featured work across Big Data, Backend Engineering, AI/ML,
            and enterprise application development spanning 12+ industry domains.
          </p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
        >
          {projectStats.map((stat, i) => {
            const c = statColor[stat.color]
            return (
              <div
                key={stat.label}
                className="stat-card"
                style={{ borderColor: c.border }}
              >
                <div className="text-3xl font-black mb-1" style={{ color: c.text }}>{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Category breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="glass-card p-6 mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 size={16} className="text-cyan-400" />
            <span className="text-sm font-semibold text-gray-300">Projects by Category</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {projectCategoryStats.map(cat => (
              <div
                key={cat.category}
                className="text-center p-3 rounded-xl transition-all duration-200 cursor-default hover:bg-white/5"
              >
                <span className="text-xl mb-1 block">{cat.icon}</span>
                <span className="text-lg font-black gradient-text">{cat.count}+</span>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{cat.category}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {projectCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'text-white shadow-lg shadow-purple-500/20'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
              style={
                activeCategory === cat.id
                  ? { background: 'linear-gradient(135deg, #7c3aed, #2563eb)', border: 'none' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  delay={idx * 0.08}
                  inView={isInView}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-16 text-gray-500">
                <p className="text-lg">No featured projects in this category.</p>
                <p className="text-sm mt-2">
                  This category has many projects — contact me for the full portfolio.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-block p-8 rounded-2xl text-center max-w-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.05))',
              border: '1px solid rgba(124,58,237,0.2)',
            }}
          >
            <p className="text-2xl font-black text-white mb-2">
              Want to see more? <span className="gradient-text">400+</span> projects available.
            </p>
            <p className="text-gray-400 mb-6 text-sm">
              This portfolio showcases featured work only. I have delivered projects in 12+ domains
              across 400+ engagements. Reach out for the full project list or case studies.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Request Full Portfolio
              </button>
              <a
                href="mailto:muzzammilkhan7890@gmail.com"
                className="btn-secondary"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
