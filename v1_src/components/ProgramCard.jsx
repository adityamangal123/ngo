import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ProgramCard({ icon, title, description, to }) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(15,76,129,0.08)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 14 }}
      className="bg-white rounded-lg p-5 border border-gray-100"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-md bg-primary/10 text-primary">{icon}</div>
        <div>
          <h3 className="card-heading">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <div className="mt-4">
        <a href={to} className="inline-flex items-center text-primary font-medium text-sm gap-2">
          Learn more <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  )
}