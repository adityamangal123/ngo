import React from 'react'
import { FileText } from 'lucide-react'

const docs = [
  { title: 'Qualification Pack - Sample', file: '/docs/qp-sample.pdf' },
  { title: 'NOS - Sample', file: '/docs/nos-sample.pdf' },
  { title: 'Training Manual', file: '/docs/manual.pdf' },
  { title: 'Student Handbook', file: '/docs/handbook.pdf' },
  { title: 'Assessment Guidelines', file: '/docs/assess.pdf' }
]

export default function Documents() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="section-heading">Documents & Resources</h1>
      <p className="text-gray-600 mt-2">Downloadable resource cards for trainers and learners.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {docs.map((d) => (
          <div key={d.title} className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-md bg-primary/10 text-primary"><FileText /></div>
            <div className="flex-1">
              <div className="font-medium">{d.title}</div>
              <div className="text-sm text-gray-600 mt-1">PDF • {Math.floor(Math.random() * 200) + 50} KB</div>
            </div>
            <a href={d.file} className="text-accent font-medium" download>Download</a>
          </div>
        ))}
      </div>
    </div>
  )
}