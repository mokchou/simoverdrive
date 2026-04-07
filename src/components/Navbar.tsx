import { useState } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { navLinks } from '../data/navigation'

export default function Navbar() {
  const scrolled = useScrollPosition(80)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading text-lg tracking-widest uppercase">
          <span className="text-white">SIM OVER </span>
          <span className="text-red">DRIVE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-grey hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lead"
            className="cta-fill border border-red text-red px-4 py-2 text-xs uppercase tracking-widest hover:text-white transition-colors duration-200"
          >
            Guide Gratuit →
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-grey hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#lead"
              onClick={() => setMenuOpen(false)}
              className="cta-fill border border-red text-red px-6 py-2 text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              Guide Gratuit →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
