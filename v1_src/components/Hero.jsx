import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center"
      aria-label="Hero: Empowering Rajasthan through skill development"
      style={{
        backgroundImage: "linear-gradient(rgba(15,76,129,0.55), rgba(15,76,129,0.45)), url('/src/assets/hero.jpg')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl text-white">
          <motion.h1
            className="h-hero text-hero"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Rajasthan Through Skill Development & Community Transformation
          </motion.h1>

          <motion.p
            className="mt-6 text-lg max-w-xl"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We deliver vocational education and employability training focused on rural communities — enabling sustained livelihood, certified skills, and community-led development.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Link to="/skill-development" className="inline-flex items-center px-5 py-3 bg-white text-primary rounded-md font-semibold shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Explore Programs
            </Link>
            <Link to="/contact" className="inline-flex items-center px-5 py-3 border border-white text-white rounded-md bg-transparent hover:bg-white/10">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}