import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import Blob from '../components/Blob'
import hero from '../assets/hero.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Floating blobs */}
      <Blob className="w-[500px] h-[500px] bg-purple -top-32 -left-32" />
      <Blob className="w-[400px] h-[400px] bg-brown bottom-0 right-0" delay={2} />
      <Blob className="w-[300px] h-[300px] bg-purple-lite top-1/3 right-1/4" delay={4} />

      <section className="relative max-w-6xl mx-auto px-6 pt-12 pb-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT — Text */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 text-sm text-purple-lite border border-purple/30 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles size={14} />
            Available for opportunities
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple to-purple-lite bg-clip-text text-transparent">
              Lucy Johnson
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-text-dim text-lg leading-relaxed mb-8 max-w-lg"
          >
            Final-year Computer Science student from DMI St John the Baptist University Mangochi campus, Malawi. I build
            secure web systems, explore machine learning and love turning
            ideas into clean, working software.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple text-white font-medium hover:bg-purple-lite hover:text-black transition-all"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert('CV coming soon!'); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brown/50 text-text hover:bg-brown/20 transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple via-purple-lite to-brown blur-2xl opacity-40 scale-95" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-purple/40">
            <img
              src={hero}
              alt="Lucy Johnson"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects teaser */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          Featured <span className="text-purple-lite">Work</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="text-text-dim mb-10"
        >
          A couple of things I'm proud of building.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'ML Phishing Detection System',
              tag: 'Machine Learning · Cybersecurity',
              desc: 'A web system that detects phishing URLs using a trained ML model.',
              slug: 'phishing-detection',
            },
            {
              title: 'ChumaPay VSL',
              tag: 'In Progress · Fintech',
              desc: 'A savings & loan platform built for Malawian village groups.',
              slug: 'chumapay-vsl',
            },
          ].map((p, i) => (
            <motion.div
              key={p.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i + 2}
            >
              <Link
                to={`/projects/${p.slug}`}
                className="block p-6 rounded-2xl bg-bg-soft border border-white/5 hover:border-purple/50 hover:-translate-y-1 transition-all"
              >
                <p className="text-xs uppercase tracking-wider text-brown mb-3">
                  {p.tag}
                </p>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-text-dim text-sm leading-relaxed">{p.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}