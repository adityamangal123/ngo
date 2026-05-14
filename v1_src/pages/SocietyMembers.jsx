import React from 'react'

const members = [
  { name: 'Dr. Radha Sharma', role: 'President', bio: 'Experienced educator & social worker.' },
  { name: 'Mr. Mohan Singh', role: 'Secretary', bio: 'Community development specialist.' },
  { name: 'Ms. Anjali Gupta', role: 'Treasurer', bio: 'Finance & compliance professional.' }
]

export default function SocietyMembers() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="section-heading">Society Members</h1>
      <p className="text-gray-600 mt-2">Leadership & core team of the trust.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {members.map((m) => (
          <div key={m.name} className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img src="/src/assets/placeholder-member.jpg" alt={m.name} className="mx-auto h-28 w-28 rounded-full object-cover" />
            <h3 className="card-heading mt-4">{m.name}</h3>
            <div className="text-sm text-gray-500">{m.role}</div>
            <p className="mt-3 text-gray-700 text-sm">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}