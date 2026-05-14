import React from 'react'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="section-heading">About the Organization</h1>
      <p className="mt-4 text-gray-700">Detailed description about Adarsh Bal Vidya Mandir Shikshan Sanstha — history, governance, areas of work.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="card-heading">Vision</h3>
          <p className="mt-2 text-gray-600">A prosperous community with skilled individuals contributing to the local economy.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="card-heading">Mission</h3>
          <p className="mt-2 text-gray-600">Provide accessible vocational training, certify prior learning, and support placements.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="card-heading">Objectives</h3>
          <ul className="mt-2 text-gray-600 list-disc list-inside">
            <li>Increase employability</li>
            <li>Community upliftment</li>
            <li>Certification & quality training</li>
          </ul>
        </div>
      </div>

      {/* Approach & Timeline (skeleton) */}
      <section className="mt-10">
        <h2 className="section-heading">Our Approach</h2>
        <p className="text-gray-600 mt-2">Community engagement → Industry partnerships → Training delivery → Placement support → Monitoring</p>

        <div className="mt-6 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <strong className="text-primary">2010</strong> — Organization established and pilot programs launched.
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <strong className="text-primary">2015</strong> — Scaled to multiple districts and built industry partnerships.
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <strong className="text-primary">2023</strong> — Continued impact with focus on RPL & placement networks.
          </div>
        </div>
      </section>
    </div>
  )
}