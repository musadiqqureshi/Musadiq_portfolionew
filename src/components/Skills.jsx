import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data/skills'
import {
  Code2, Layers, Server, GitBranch, Database, Brain, Zap, Cpu
} from 'lucide-react'

const iconMap = { Code2, Layers, Server, GitBranch, Database, Brain, Zap, Cpu }

const colorMap = {
  purple: { bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.3)', text: '#a78bfa', bar: '#7c3aed' },
  blue: { bg: 'rgba(37,99,235,0.12)', border: 'rgba(37,99,235,0.3)', text: '#60a5fa', bar: '#2563eb' },
  cyan: { bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)', text: '#22d3ee', bar: '#06b6d4' },
  gold: { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', text: '#fbbf24', bar: '#f59e0b' },
}

function SkillBar({ name, level, color, delay, inView }) {
  const c = colorMap[color]
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="font-mono text-xs" style={{ color: c.text }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${c.bar}, ${c.bar}aa)`,
            boxShadow: `0 0 8px ${c.bar}60`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="orb w-80 h-80 top-0 left-0 bg-blue-600" style={{ filter: 'blur(120px)', opacity: 0.08 }} />
      <div className="orb w-80 h-80 bottom-0 right-0 bg-cyan-600" style={{ filter: 'blur(100px)', opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center">
            <span className="w-8 h-px bg-cyan-500" />
            Technical Skills
            <span className="w-8 h-px bg-cyan-500" />
          </div>
          <h2 className="section-heading text-white">
            Engineering <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-3">
            A comprehensive skill set spanning the entire data & backend engineering stack — from distributed systems to AI/ML production deployments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, catIdx) => {
            const Icon = iconMap[cat.icon]
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.08 }}
                className="glass-card p-6"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  >
                    {Icon && <Icon size={18} style={{ color: c.text }} />}
                  </div>
                  <h3 className="text-sm font-bold text-white leading-tight">{cat.title}</h3>
                </div>

                {/* Skills */}
                <div>
                  {cat.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      delay={catIdx * 0.08 + skillIdx * 0.08}
                      inView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Technologies row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 glass-card p-6"
        >
          <p className="text-center text-xs uppercase tracking-widest text-gray-600 mb-5">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Python', 'Java', 'Scala', 'SQL', 'Bash',
              'Apache Spark', 'Apache Kafka', 'Hadoop', 'HDFS', 'Hive', 'HBase', 'Zookeeper',
              'Flask', 'FastAPI', 'Django REST', 'Spring Boot', 'Celery',
              'ETL/ELT', 'Airflow', 'Talend', 'Data Warehouse', 'Data Lake',
              'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Redis', 'Elasticsearch', 'Oracle',
              'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'SHAP',
              'Multithreading', 'Multiprocessing', 'AsyncIO', 'Concurrent.futures',
              'Git', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Jupyter', 'IntelliJ', 'VS Code',
            ].map(tech => (
              <span key={tech} className="skill-pill cursor-default text-[11px]">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
