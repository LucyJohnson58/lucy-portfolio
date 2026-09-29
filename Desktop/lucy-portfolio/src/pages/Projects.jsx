import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Blob from '../components/Blob'
import { projects } from '../data/projects'

const filters = ['All', 'Web', 'ML', 'Cybersecurity']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = projects.filter((p) => {
    if (active === 'All') return true
    if (active === 'ML') return p.tag.toLowerCase().includes('machine learning')
    if (active === 'Cybersecurity') return p.tag.toLowerCase().includes('cybersecurity')
    if (active === 'Web') return p.stack.some((s) => ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Flask'].includes(s))
    return true
  })

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Blob className="w-[450px] h-[450px] bg-purple -top-24 -left-24" />
      <Blob className="w-[350px] h-[350px] bg-brown bottom-10 right-0" delay={2} />

      <section className="relative max-w-6xl mx-auto px-6 pt-12 pb-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-sm uppercase tracking-widest text-brown mb-3"
        >
          Portfolio
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Things I've <span className="text-purple-lite">built</span>.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-text-dim mb-10 max-w-xl"
        >
          A mix of academic, personal and in-progress projects from machine
          learning to fintech for local communities.
        </motion.p>

        {/* Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-wrap gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                active === f
                  ? 'bg-purple text-white border-purple'
                  : 'bg-transparent text-text-dim border-white/10 hover:border-purple/50 hover:text-purple-lite'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/projects/${p.slug}`}
                  className="group block p-6 rounded-2xl bg-bg-soft border border-white/5 hover:border-purple/50 hover:-translate-y-1 transition-all h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-brown">
                      {p.tag}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-text-dim group-hover:text-purple-lite group-hover:rotate-45 transition-all"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-text-dim text-sm leading-relaxed mb-4">
                    {p.short}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-dim border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-text-dim text-center py-16">
            No projects in this category yet — check back soon.
          </p>
        )}
      </section>
    </main>
  )
}