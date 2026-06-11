import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Mail, Phone, User, Briefcase, Award } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const highlights = [
  { icon: Briefcase, label: '7+ Years', sublabel: 'IT Experience', color: 'purple' },
  { icon: Award, label: '400+', sublabel: 'Projects Delivered', color: 'blue' },
  { icon: User, label: '5+ Years', sublabel: 'Big Data Engineering', color: 'cyan' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Orb */}
      <div className="orb w-96 h-96 -top-20 right-0 bg-purple-700" style={{ filter: 'blur(130px)', opacity: 0.1 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center">
            <span className="w-8 h-px bg-cyan-500" />
            About Me
            <span className="w-8 h-px bg-cyan-500" />
          </div>
          <h2 className="section-heading text-white">
            The Engineer Behind The <span className="gradient-text">Data</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I'm <span className="text-white font-semibold">Muhammad Mussaddiq Ahmed Qureshi</span>, a Senior
                Python Developer and Big Data Engineer based in Lahore, Pakistan, with over{' '}
                <span className="gradient-text font-bold">7 years of IT experience</span> and{' '}
                <span className="text-cyan-400 font-semibold">5+ years</span> of dedicated expertise in
                distributed systems and big data engineering.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                My career spans the full data and backend engineering spectrum — from architecting multi-terabyte
                real-time streaming pipelines with <span className="text-purple-400">Apache Spark, Kafka, and Hadoop</span>,
                to building high-performance REST APIs with <span className="text-cyan-400">Flask and FastAPI</span>,
                to deploying production AI/ML models that drive real business outcomes.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                With <span className="text-amber-400 font-semibold">400+ projects</span> delivered across
                Healthcare, Aviation, Finance, Hospitality, Logistics, and more — I bring both breadth and depth
                to every engagement. I thrive at the intersection of scale, performance, and business impact.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I'm deeply skilled in <span className="text-white">Python, Java, Scala, SQL/NoSQL</span>, ETL
                pipeline engineering, concurrent systems design, and building intelligent data-driven
                applications. Whether it's a microservice API, a Kafka streaming topology, or a full ML pipeline,
                I engineer for production from day one.
              </p>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: MapPin, label: 'Lahore, Punjab', sub: 'Pakistan', color: '#a78bfa' },
                { icon: Mail, label: 'muzzammilkhan7890', sub: '@gmail.com', color: '#22d3ee' },
                { icon: Phone, label: '+92 308 699 4758', sub: 'Available', color: '#fbbf24' },
              ].map(item => (
                <div
                  key={item.label}
                  className="glass-card p-4 flex items-start gap-3"
                >
                  <item.icon size={18} style={{ color: item.color, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p className="text-white text-sm font-medium">{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Highlights + tech cloud */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className="stat-card"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: h.color === 'purple'
                        ? 'rgba(124,58,237,0.2)'
                        : h.color === 'blue'
                        ? 'rgba(37,99,235,0.2)'
                        : 'rgba(6,182,212,0.2)',
                    }}
                  >
                    <h.icon size={20} style={{ color: h.color === 'purple' ? '#a78bfa' : h.color === 'blue' ? '#60a5fa' : '#22d3ee' }} />
                  </div>
                  <div className="text-2xl font-black gradient-text mb-1">{h.label}</div>
                  <div className="text-xs text-gray-500">{h.sublabel}</div>
                </motion.div>
              ))}
            </div>

            {/* Core tech stack */}
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Core Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'Apache Spark', 'Apache Kafka', 'Hadoop',
                  'Flask', 'FastAPI', 'MySQL', 'PostgreSQL', 'MongoDB',
                  'Redis', 'Docker', 'Apache Airflow', 'Scikit-learn',
                  'TensorFlow', 'Java', 'Scala', 'Celery', 'Elasticsearch',
                  'HBase', 'Hive', 'AWS', 'GCP', 'Pandas', 'NumPy',
                ].map(tech => (
                  <span key={tech} className="skill-pill cursor-default">{tech}</span>
                ))}
              </div>
            </div>

            {/* What I build */}
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">What I Build</h3>
              <div className="space-y-2">
                {[
                  { label: 'Distributed Big Data Pipelines', note: 'Spark, Kafka, Hadoop' },
                  { label: 'High-Performance REST APIs', note: 'Flask, FastAPI' },
                  { label: 'AI / ML Production Systems', note: 'Scikit-learn, TensorFlow' },
                  { label: 'Enterprise ETL Workflows', note: 'Airflow, Talend' },
                  { label: 'Real-time Streaming Systems', note: 'Kafka, Spark Streaming' },
                  { label: 'Multi-domain Business Apps', note: '12+ Industries' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-sm text-gray-300">{item.label}</span>
                    <span className="text-xs text-gray-600 font-mono">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
