import React from 'react'

export default function SkillDevelopment() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="section-heading">Skill Development Programs</h1>
      <p className="mt-3 text-gray-600">We offer Long Term Training (LTT), Short Term Training (STT), and Recognition of Prior Learning (RPL).</p>

      <div className="mt-8 space-y-8">
        <section id="ltt" className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="card-heading">Long Term Training (LTT)</h2>
          <p className="mt-2 text-gray-700">Overview, benefits, objectives, target beneficiaries, process, placement support.</p>
        </section>

        <section id="stt" className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="card-heading">Short Term Training (STT)</h2>
          <p className="mt-2 text-gray-700">Overview and course list. Use tabs or accordions here for modules.</p>
        </section>

        <section id="rpl" className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="card-heading">Recognition of Prior Learning (RPL)</h2>
          <p className="mt-2 text-gray-700">Process: Assessment, certification, bridging courses and placement support.</p>
        </section>
      </div>
    </div>
  )
}