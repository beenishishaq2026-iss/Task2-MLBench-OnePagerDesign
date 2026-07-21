import { useState, useEffect } from 'react'
import { Aperture, Menu, X } from 'lucide-react'

const links = [
  { name: 'Home', href: '#home-section', id: 'home-section' },
  { name: 'Portfolio', href: '#portfolio-section', id: 'portfolio-section' },
  { name: 'Services', href: '#services-section', id: 'services-section' },
  { name: 'Team', href: '#team-section', id: 'team-section' },
  { name: 'About', href: '#about-section', id: 'about-section' },
  { name: 'Blog', href: '#blog-section', id: 'blog-section' },
  { name: 'Contact Us', href: '#contact-section', id: 'contact-section' },
];

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('home-section')

  useEffect(() => {
    const heroEl = document.getElementById('home-section')
    const threshold = heroEl ? heroEl.offsetHeight : window.innerHeight

    const handleScroll = () => {
      setVisible(window.scrollY > threshold - 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    visible && (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-mono">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-10 py-6">

        <a href="#home-section" className="flex items-center gap-3">
          <span className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
            <Aperture size={30} strokeWidth={1} color="white" />
          </span>
          <span>
            <span className="block text-2xl font-bold tracking-wide text-gray-900">
              ONE<span className="font-normal">PAGER</span>
            </span>
            <span className="block text-xs text-gray-400 tracking-wide">
              creative single page template
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 text-base tracking-wide text-gray-800 uppercase">
          {links.map((link) =>
            active === link.id ? (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block bg-teal-500 text-white px-5 py-3 -skew-x-12"
                >
                  <span className="inline-block skew-x-12">{link.name}</span>
                </a>
              </li>
            ) : (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-5 py-3 hover:text-teal-500"
                >
                  {link.name}
                </a>
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-800"
        >
          {open ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
        </button>

      </div>

      {open && (
        <ul className="lg:hidden bg-white border-t px-6 py-4 space-y-4 text-base tracking-wide text-gray-800 uppercase">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block transition-colors duration-300 hover:text-teal-500 ${
                  active === link.id ? 'text-teal-500 font-semibold' : ''
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
    )
  );
}