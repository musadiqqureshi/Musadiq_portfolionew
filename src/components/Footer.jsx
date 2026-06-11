import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Download, ArrowUp, Heart } from 'lucide-react'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="orb w-80 h-80 bottom-0 left-1/2 bg-purple-700" style={{ filter: 'blur(130px)', opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-black shadow-lg shadow-purple-500/30">
                M
              </div>
              <div>
                <p className="font-bold text-white">Muhammad Mussaddiq</p>
                <p className="text-xs text-gray-500">Ahmed Qureshi</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Senior Python Developer & Big Data Engineer with 7+ years of IT experience
              and 400+ projects delivered. Building scalable data-driven solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Spark', 'Kafka', 'Flask', 'AI/ML'].map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs"
                  style={{ background: 'rgba(124,58,237,0.12)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => scrollTo(e, link.href)}
                  className="text-sm text-gray-500 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:muzzammilkhan7890@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-purple-400" />
                muzzammilkhan7890@gmail.com
              </a>
              <a
                href="tel:+923086994758"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-cyan-400" />
                +92 308 699 4758
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin size={14} className="text-amber-400" />
                Lahore, Punjab, Pakistan
              </div>
            </div>
            <div className="mt-5">
              <a
                href="/Muhammad-Mussaddiq-Ahmed-Qureshi-CV.pdf"
                download
                className="btn-primary text-sm px-5 py-2.5"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="neon-line mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 flex items-center gap-1">
            © {new Date().getFullYear()} Muhammad Mussaddiq Ahmed Qureshi. Built with
            <Heart size={11} className="text-red-500 mx-0.5" />
            using React & Tailwind CSS.
          </p>
          <p className="text-xs text-gray-600 font-mono">
            Python Developer · Data Engineer · Lahore, PK
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
