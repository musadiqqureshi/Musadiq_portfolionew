import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="orb w-80 h-80 top-0 right-0 bg-green-600" style={{ filter: 'blur(130px)', opacity: 0.07 }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center">
            <span className="w-8 h-px bg-cyan-500" />
            Education
            <span className="w-8 h-px bg-cyan-500" />
          </div>
          <h2 className="section-heading text-white">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="glass-card p-8 relative overflow-hidden"
              style={{ border: '1px solid rgba(124,58,237,0.3)' }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full"
                style={{ background: 'rgba(124,58,237,0.06)', filter: 'blur(30px)' }}
              />

              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
                >
                  <GraduationCap size={26} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight mb-1">
                    Bachelor of Science in Computer Science
                  </h3>
                  <span
                    className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(6,182,212,0.1)', color: '#22d3ee', border: '1px solid rgba(6,182,212,0.2)' }}
                  >
                    In Progress
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <BookOpen size={15} className="text-purple-400 flex-shrink-0" />
                  <span className="font-semibold text-white">University of Management and Technology (UMT)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin size={15} className="text-purple-400 flex-shrink-0" />
                  Lahore, Punjab, Pakistan
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Calendar size={15} className="text-purple-400 flex-shrink-0" />
                  November 2023 – November 2027
                </div>
              </div>

              <div
                className="p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pursuing a formal CS degree while simultaneously applying 7+ years of practical
                  industry experience in data engineering, distributed systems, and AI/ML development.
                  Blending academic rigor with real-world production expertise.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Note + self-learning */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-5"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award size={18} className="text-amber-400" />
                <h3 className="text-base font-bold text-white">Continuous Learning</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                My expertise is built through years of hands-on production work combined with continuous
                self-study and professional development across multiple disciplines.
              </p>
              <div className="space-y-2">
                {[
                  'Apache Spark & Big Data Engineering (Deep Expertise)',
                  'Apache Kafka Real-time Stream Processing',
                  'Cloud Architecture (AWS / GCP)',
                  'Machine Learning & AI Model Deployment',
                  'Docker, Kubernetes & DevOps Practices',
                  'Distributed Systems Design Patterns',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Note about experience vs degree */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.05))',
                border: '1px solid rgba(124,58,237,0.15)',
              }}
            >
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "My technical knowledge goes far beyond the classroom.
                With <span className="text-purple-300 font-semibold">7+ years of real-world engineering</span> and{' '}
                <span className="text-cyan-300 font-semibold">400+ projects</span> delivered,
                I combine theoretical foundations with battle-tested production experience."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
