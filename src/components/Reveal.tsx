import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-2">
      <Sparkles size={16} className="text-[#b8893b]" />
      <span className="text-xs uppercase tracking-[0.3em] text-[#b8893b]">{children}</span>
      <Sparkles size={16} className="text-[#b8893b]" />
    </div>
  )
}
