import React from 'react'
import ProgramCard from './ProgramCard'
import { Award, Clock, CheckSquare, Coffee } from 'lucide-react'

export default function Programs() {
  const programs = [
    { icon: <Award />, title: 'Long Term Training (LTT)', description: 'Comprehensive certified courses for in-depth skill building.', to: '/skill-development#ltt' },
    { icon: <Clock />, title: 'Short Term Training (STT)', description: 'Short, intensive courses to enhance employability quickly.', to: '/skill-development#stt' },
    { icon: <CheckSquare />, title: 'Recognition of Prior Learning (RPL)', description: 'Certify prior skills and experience to formal qualifications.', to: '/skill-development#rpl' },
    { icon: <Coffee />, title: 'Tourism & Hospitality', description: 'Sector-specific training focused on local employment opportunities.', to: '/skill-development#tourism' }
  ]

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="section-heading text-center">Programs We Offer</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">Practical, industry-oriented training designed to deliver measurable results.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {programs.map((p) => <ProgramCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}