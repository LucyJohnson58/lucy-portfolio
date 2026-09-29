import { useState } from 'react'
import { motion } from 'framer-motion'
import Blob from '../components/Blob'
import { Mail, Code2, Briefcase, MessageCircle, Send, CheckCircle2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const socials = [
  { icon: Mail, label: 'Email', value: 'lucymbewe28@gmail.com', href: 'mailto:lucymbewe28@gmail.com' },
  { icon: Code2, label: 'GitHub', value: '@lucyjohnson', href: '#' },
  { icon: Briefcase, label: 'LinkedIn', value: 'Lucy Johnson', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with me', href: '#' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // We'll wire this up to EmailJS later
    setSent(true)
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Blob className="w-[450px] h-[450px] bg-purple -top-24 -right-24" />
      <Blob className="w-[350px] h-[350px] bg-brown bottom-0 -left-20" delay={2} />

      <section className="relative max-w-6xl mx-auto px-6 pt-12 pb-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-sm uppercase tracking-widest text-brown mb-3"
        >
          Contact
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Let's build something <span className="text-purple-lite">together</span>.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-text-dim mb-12 max-w-xl"
        >
          Whether it's an internship, a collaboration or just a chat about
          software and security , my inbox is open.
        </motion.p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left — socials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="md:col-span-2 space-y-4"
          >
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-bg-soft border border-white/5 hover:border-purple/50 hover:-translate-y-0.5 transition-all"
                >
                  <div className="p-2 rounded-lg bg-purple/20">
                    <Icon size={18} className="text-purple-lite" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-dim">
                      {s.label}
                    </p>
                    <p className="text-sm text-text">{s.value}</p>
                  </div>
                </a>
              )
            })}
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="md:col-span-3"
          >
            {sent ? (
              <div className="p-8 rounded-2xl bg-bg-soft border border-purple/40 text-center">
                <CheckCircle2 size={40} className="text-purple-lite mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
                <p className="text-text-dim text-sm">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl bg-bg-soft border border-white/5 space-y-5"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-dim mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lucy John"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-text placeholder:text-text-dim/50 focus:outline-none focus:border-purple/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-dim mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="lucy@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-text placeholder:text-text-dim/50 focus:outline-none focus:border-purple/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-dim mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me what's on your mind... 0 987 312 290"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-text placeholder:text-text-dim/50 focus:outline-none focus:border-purple/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple text-white font-medium hover:bg-purple-lite hover:text-black transition-all"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}