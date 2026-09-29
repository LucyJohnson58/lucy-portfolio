import { Link, NavLink } from 'react-router-dom'
import { Download } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold text-white">
          Lucy<span className="text-purple">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive ? 'text-purple-lite' : 'text-text-dim hover:text-purple-lite'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
  href="#"
  onClick={(e) => { e.preventDefault(); alert('CV coming soon!'); }}
  className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple text-white text-sm font-medium hover:bg-purple-lite hover:text-black transition-all"
>
  <Download size={16} />
  CV
</a>
      </div>
    </nav>
  )
}