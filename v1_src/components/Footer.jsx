import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-primary text-white flex items-center justify-center font-bold">AB</div>
            <div>
              <div className="font-semibold text-lg text-primary">Adarsh Bal Vidya Mandir</div>
              <div className="text-sm text-gray-600">Shikshan Sanstha</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 max-w-sm">We work for community-driven skill development and empowerment across Rajasthan.</p>
        </div>

        <div className="flex justify-between md:col-span-2">
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/skill-development">Skill Development</Link></li>
              <li><Link to="/members">Society Members</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <address className="not-italic mt-3 text-sm text-gray-700">
              Office: Near City Center, Rajasthan<br/>
              Phone: <a href="tel:+911234567890" className="text-primary">+91 12345 67890</a><br/>
              Email: <a href="mailto:info@adarsh.org" className="text-primary">info@adarsh.org</a>
            </address>

            <div className="mt-4 flex gap-3">
              <a className="p-2 rounded-md bg-gray-100 text-gray-600" aria-label="Facebook"><Facebook /></a>
              <a className="p-2 rounded-md bg-gray-100 text-gray-600" aria-label="Twitter"><Twitter /></a>
              <a className="p-2 rounded-md bg-gray-100 text-gray-600" aria-label="Instagram"><Instagram /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">© {new Date().getFullYear()} Adarsh Bal Vidya Mandir Shikshan Sanstha. All rights reserved.</div>
      </div>
    </footer>
  )
}