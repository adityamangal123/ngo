import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import SkillDevelopment from './pages/SkillDevelopment'
import SocietyMembers from './pages/SocietyMembers'
import Documents from './pages/Documents'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill-development" element={<SkillDevelopment />} />
          <Route path="/members" element={<SocietyMembers />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}