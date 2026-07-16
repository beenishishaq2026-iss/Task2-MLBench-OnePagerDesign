import { useState } from 'react'

export default function Navbar() {
    const[open , setOpen] = useState(false)

    const links= [
        {name: 'Home', href: '#home-section'},
        {name: 'Portfolio', href: '#portfolio-section'},
        {name: 'Services', href: '#services-section'},
        {name: 'Team', href: '#team-section'},
        {name: 'Blog', href: '#blog-section'},
        {name: 'Contact Us', href: '#contact-section'},
    ]

    return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home-section">
          <img
            src="https://demoxml.com/html/onepager/images/logo.png"
            alt="Logo"
            className="h-8"
          />
        </a>

        <ul className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-orange-500 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

        {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col bg-white border-t px-4 py-2 text-gray-700 text-sm font-semibold">
          {links.map((link) => (
            <li key={link.name} className="py-2 border-b last:border-0">
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
