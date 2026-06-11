import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink,
  CheckCircle2, AlertCircle, Loader2
} from 'lucide-react'

const socialLinks = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: '#0a66c2', note: 'Connect with me' },
  { label: 'GitHub', icon: Github, href: 'https://github.com', color: '#e6edf3', note: 'View my code' },
  {
    label: 'Upwork',
    icon: ExternalLink,
    href: 'https://upwork.com',
    color: '#14a800',
    note: 'Hire me on Upwork',
  },
  {
    label: 'Fiverr',
    icon: ExternalLink,
    href: 'https://fiverr.com',
    color: '#1dbf73',
    note: 'Order on Fiverr',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Simulate form submission — replace with EmailJS or backend call
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 top-0 left-0 bg-purple-700" style={{ filter: 'blur(130px)', opacity: 0.1 }} />
      <div className="orb w-80 h-80 bottom-0 right-0 bg-cyan-600" style={{ filter: 'blur(110px)', opacity: 0.08 }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center">
            <span className="w-8 h-px bg-cyan-500" />
            Get In Touch
            <span className="w-8 h-px bg-cyan-500" />
          </div>
          <h2 className="section-heading text-white">
            Let's Build Something <span className="gradient-text">Powerful</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-3 leading-relaxed">
            Let's build scalable data-driven solutions together. Whether you need a Big Data pipeline,
            a backend API, an AI system, or a full enterprise platform — I'm ready.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact details */}
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-base font-bold text-white mb-2">Contact Details</h3>
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'muzzammilkhan7890@gmail.com',
                  href: 'mailto:muzzammilkhan7890@gmail.com',
                  color: '#a78bfa',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+92 308 699 4758',
                  href: 'tel:+923086994758',
                  color: '#22d3ee',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Lahore, Punjab, Pakistan',
                  href: null,
                  color: '#fbbf24',
                },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.color + '18', border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={16} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-gray-200 hover:text-white transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <h3 className="text-base font-bold text-white mb-4">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <link.icon size={16} style={{ color: link.color }} />
                    <div>
                      <p className="text-xs font-semibold text-white">{link.label}</p>
                      <p className="text-[10px] text-gray-600">{link.note}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(124,58,237,0.06))',
                border: '1px solid rgba(6,182,212,0.15)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Available for Work</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Open to freelance projects, contract work, and full-time remote or on-site opportunities in Data Engineering, Python Backend, and AI/ML.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block uppercase tracking-wide">Name *</label>
                  <input
                    className="contact-input"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block uppercase tracking-wide">Email *</label>
                  <input
                    className="contact-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1.5 block uppercase tracking-wide">Subject</label>
                <input
                  className="contact-input"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1.5 block uppercase tracking-wide">Message *</label>
                <textarea
                  className="contact-input resize-none"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project or inquiry in detail..."
                  rows={6}
                  required
                />
              </div>

              {status === 'success' && (
                <div
                  className="flex items-center gap-2 p-4 rounded-xl text-sm text-green-400"
                  style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
                >
                  <CheckCircle2 size={16} />
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div
                  className="flex items-center gap-2 p-4 rounded-xl text-sm text-red-400"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
