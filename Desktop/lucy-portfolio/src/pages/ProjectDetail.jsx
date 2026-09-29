import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Code2, CheckCircle2 } from 'lucide-react'
import Blob from '../components/Blob'
import { getProjectBySlug } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-dim mb-4">Project not found.</p>
          <Link to="/projects" className="text-purple-lite hover:underline">
            ← Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Blob className="w-[400px] h-[400px] bg-purple -top-24 right-0" />
      <Blob className="w-[300px] h-[300px] bg-brown bottom-0 -left-20" delay={2} />

      <section className="relative max-w-4xl mx-auto px-6 pt-12 pb-24">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-dim hover:text-purple-lite transition-colors mb-8"
        >
          <ArrowLeft size={16} /> All projects
        </Link>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-xs uppercase tracking-widest text-brown mb-3"
        >
          {project.tag} · {project.year}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {project.title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-text-dim text-lg leading-relaxed mb-6"
        >
          {project.overview}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-wrap gap-3 mb-10"
        >
          <span
            className={`text-xs px-3 py-1.5 rounded-full border ${
              project.status === 'In Progress'
                ? 'bg-brown/20 border-brown/50 text-brown'
                : 'bg-purple/20 border-purple/40 text-purple-lite'
            }`}
          >
            {project.status}
          </span>
          <a
  href="#"
  onClick={(e) => e.preventDefault()}
  className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-white/10 text-text-dim hover:border-purple/50 hover:text-purple-lite transition-all"
>
  <Code2 size={14} /> GitHub
</a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-white/10 text-text-dim hover:border-purple/50 hover:text-purple-lite transition-all"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </motion.div>

        {/* Stack */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-sm uppercase tracking-widest text-text-dim mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-sm px-3 py-1.5 rounded-full bg-bg-soft border border-white/10 text-text"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Problem */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-3">
            The <span className="text-purple-lite">Problem</span>
          </h3>
          <p className="text-text-dim leading-relaxed">{project.problem}</p>
        </motion.div>

        {/* Approach */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-3">
            My <span className="text-purple-lite">Approach</span>
          </h3>
          <p className="text-text-dim leading-relaxed">{project.approach}</p>
        </motion.div>

        {/* Results */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Key <span className="text-purple-lite">Outcomes</span>
          </h3>
          <ul className="space-y-3">
            {project.results.map((r) => (
              <li key={r} className="flex items-start gap-3 text-text-dim">
                <CheckCircle2 size={18} className="text-purple mt-0.5 shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Lessons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-bg-soft border border-brown/30"
        >
          <h3 className="text-lg font-semibold mb-2 text-brown">
            What I learned
          </h3>
          <p className="text-text-dim leading-relaxed">{project.lessons}</p>
        </motion.div>
      </section>
    </main>
  )
}