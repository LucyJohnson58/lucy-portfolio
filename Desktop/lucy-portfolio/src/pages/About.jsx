import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code2, Shield, Wrench, MapPin, Mail } from 'lucide-react'
import Blob from '../components/Blob'
import hero from '../assets/hero.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const skillGroups = [
  {
    icon: Code2,
    title: 'Software Development',
    color: 'text-purple',
    skills: ['React', 'JavaScript', 'Python', 'HTML/CSS', 'Git & GitHub', 'Flask'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    color: 'text-purple-lite',
    skills: ['Phishing Detection', 'Network Basics', 'Security Awareness', 'ML for Security'],
  },
  {
    icon: Wrench,
    title: 'IT Support',
    color: 'text-brown',
    skills: ['Troubleshooting', 'Microsoft Office Suite', 'Networking', 'Hardware Basics'],
  },
]

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Blob className="w-[400px] h-[400px] bg-purple -top-20 -right-32" />
      <Blob className="w-[350px] h-[350px] bg-brown bottom-20 -left-20" delay={2} />

      <section className="relative max-w-6xl mx-auto px-6 pt-12 pb-24">
        {/* Header */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-sm uppercase tracking-widest text-brown mb-3"
        >
          About Me
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          The person behind the <span className="text-purple-lite">code</span>.
        </motion.h1>

        {/* Bio + Photo */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="md:col-span-2 space-y-5 text-text-dim leading-relaxed"
          >
            <p>
              I'm <span className="text-text font-medium">Lucy Johnson</span>, a
              final-year Computer Science student based in{' '}
              <span className="text-purple-lite">Mangochi, Malawi</span>. I'm
              passionate about building software that solves real problems 
              especially at the intersection of{' '}
              <span className="text-text font-medium">security</span>,{' '}
              <span className="text-text font-medium">machine learning</span> and{' '}
              <span className="text-text font-medium">everyday usefulness</span>.
            </p>
            <p>
              My journey started with curiosity about how systems work under the
              hood and it grew into hands-on experience building a phishing
              detection web system and currently a savings platform for local
              village groups. Along the way I've picked up skills in full-stack
              development, cybersecurity fundamentals and IT support through my
              internship at Ungweru Organization.
            </p>
            <p>
              When I'm not coding, I'm learning something new whether that's a
              security concept, a new framework or how to make an interface feel
              just right.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="inline-flex items-center gap-2 text-sm text-text-dim">
                <MapPin size={16} className="text-purple" />
                Mangochi, Malawi
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-text-dim">
                <Mail size={16} className="text-purple" />
                lucymbewe28@gmail.com
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="relative mx-auto md:mx-0"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple to-brown blur-2xl opacity-30" />
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden border border-purple/40">
              <img src={hero} alt="Lucy Johnson" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Education + Experience */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="p-6 rounded-2xl bg-bg-soft border border-white/5 hover:border-purple/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple/20">
                <GraduationCap size={20} className="text-purple-lite" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <p className="text-text font-medium">BSc Computer Science</p>
            <p className="text-text-dim text-sm mt-1">Final Year · 2026</p>
            <p className="text-text-dim text-sm mt-3 leading-relaxed">
              Focused on software engineering, algorithms, databases and
              cybersecurity. Building practical projects alongside coursework.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="p-6 rounded-2xl bg-bg-soft border border-white/5 hover:border-brown/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-brown/20">
                <Briefcase size={20} className="text-brown" />
              </div>
              <h3 className="text-lg font-semibold">Experience</h3>
            </div>
            <p className="text-text font-medium">IT Intern</p>
            <p className="text-text-dim text-sm mt-1">Ungweru Organization · Mzuzu</p>
            <ul className="text-text-dim text-sm mt-3 space-y-1.5 leading-relaxed">
              <li>• Diagnosed and resolved hardware & software issues</li>
              <li>• Delivered Microsoft Office training to staff</li>
              <li>• Assisted with basic networking setup and support</li>
            </ul>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Skills & <span className="text-purple-lite">Tools</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-6 rounded-2xl bg-bg-soft border border-white/5 hover:-translate-y-1 transition-all"
              >
                <Icon size={24} className={`${group.color} mb-4`} />
                <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-text-dim border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </main>
  )
}