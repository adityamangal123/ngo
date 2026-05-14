import React from 'react'
import useCountUp from '../utils/useCountUp'
import { Users, BookOpen, Globe, Award } from 'lucide-react'

function StatItem({ icon, label, target }) {
  const value = useCountUp(target, 1600)
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-4">
      <div className="p-3 rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-semibold">{value.toLocaleString()}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-light py-12" aria-label="Statistics">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-heading text-center">Impact in Numbers</h2>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Our measurable impact across Rajasthan through training and community support.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <StatItem icon={<Users size={20} />} label="Students Trained" target={12000} />
          <StatItem icon={<BookOpen size={20} />} label="Training Programs" target={85} />
          <StatItem icon={<Globe size={20} />} label="Community Outreach" target={250} />
          <StatItem icon={<Award size={20} />} label="Placement Support" target={6200} />
        </div>
      </div>
    </section>
  )
}