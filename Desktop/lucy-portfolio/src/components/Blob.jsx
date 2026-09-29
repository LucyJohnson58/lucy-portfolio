import { motion } from 'framer-motion'

export default function Blob({ className = '', delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
      animate={{
        x: [0, 40, -30, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}