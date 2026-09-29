import { Link } from 'react-router-dom'
import { Mail, Code2, Briefcase, MessageCircle } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { icon: Mail, href: 'mailto:lucy@example.com', label: 'Email' },
  { icon: Code2, href: '#', label: 'GitHub' },
  { icon: Briefcase, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="font-heading text-2xl font-bold text-white">
            Lucy<span className="text-purple">.</span>
          </Link>
          <p className="text-text-dim text-sm mt-3 max-w-xs leading-relaxed">
            Final-year CS student building secure, useful software from Mzuzu, Malawi.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-text-dim mb-4">
            Navigate
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-text-dim hover:text-purple-lite transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-text-dim mb-4">
            Connect
          </h4>
          <div className="flex gap-3">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="p-2.5 rounded-full bg-bg-soft border border-white/10 text-text-dim hover:text-purple-lite hover:border-purple/50 hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="text-center text-xs text-text-dim py-5">
          © {new Date().getFullYear()} Lucy Johnson. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  )
}