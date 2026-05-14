import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Programs from '../components/Programs'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="section-heading">About Adarsh Bal Vidya Mandir</h2>
            <p className="mt-4 text-gray-700 max-w-3xl">Adarsh Bal Vidya Mandir Shikshan Sanstha is a non-profit dedicated to vocational education and community development in Rajasthan. We focus on practical training tied to local industries, certifications, and placement support.</p>
            <div className="mt-4">
              <a href="/about" className="text-primary font-medium">Read more →</a>
            </div>
          </div>

          <aside className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="card-heading">Quick Facts</h3>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li><strong>Established:</strong> 2010</li>
              <li><strong>Focus:</strong> Skill Development, RPL, Community Outreach</li>
              <li><strong>Regions:</strong> Multiple districts in Rajasthan</li>
            </ul>
          </aside>
        </div>
      </section>

      <Programs />

      {/* Gallery preview (placeholder) */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-heading text-center">Gallery</h2>
          <p className="text-center text-gray-600 mt-2">Snapshots from our training programs and community events.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 bg-white rounded-lg overflow-hidden shadow-sm">
                <img src={`/src/assets/hero.jpg`} alt={`Gallery ${i+1}`} className="w-full h-full object-cover transform hover:scale-105 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Partners placeholder */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <h2 className="section-heading text-center">What People Say</h2>
        <p className="text-center text-gray-600 mt-2">Feedback from stakeholders and learners</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700">"The training changed my life — I now work in hospitality and support my family."</p>
            <div className="mt-4 text-sm text-gray-600">— Participant</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700">"Strong focus on practical skills, great placement support."</p>
            <div className="mt-4 text-sm text-gray-600">— Employer</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700">"Community-driven and accountable programs."</p>
            <div className="mt-4 text-sm text-gray-600">— Partner NGO</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="card-heading">Join Our Skill Development Mission</h3>
            <p className="mt-2 text-white/90">Partner with us or enroll to create local employment opportunities.</p>
          </div>

          <div className="flex gap-3">
            <a href="/contact" className="px-5 py-3 bg-accent text-dark rounded-md font-medium">Contact Us</a>
            <a href="/contact" className="px-5 py-3 border border-white rounded-md font-medium">Become a Partner</a>
          </div>
        </div>
      </section>
    </>
  )
}