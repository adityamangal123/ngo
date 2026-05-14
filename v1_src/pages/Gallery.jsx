import React from 'react'

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-heading">Gallery</h1>
      <p className="text-gray-600 mt-2">Photos from our programs and outreach events.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <figure key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img src="/src/assets/hero.jpg" alt={`Gallery ${i+1}`} className="w-full h-48 object-cover transform hover:scale-105 transition" />
          </figure>
        ))}
      </div>
    </div>
  )
}