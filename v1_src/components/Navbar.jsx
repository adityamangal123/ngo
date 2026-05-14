import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/skill-development', label: 'Skill Development' },
    { to: '/members', label: 'Society Members' },
    { to: '/documents', label: 'Documents' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">AB</div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-primary">Adarsh Bal Vidya Mandir</div>
                <div className="text-xs text-gray-500">Shikshan Sanstha</div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-primary underline' : 'text-gray-700 hover:text-primary'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:brightness-95">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="p-2 rounded-md inline-flex items-center justify-center text-primary"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="pt-2 pb-4 space-y-1 px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-primary bg-light' : 'text-gray-700 hover:bg-gray-50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="block mt-2 px-3 py-2 rounded-md text-base text-white bg-accent text-center font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}