import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/blogs', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-cyan-glow/10 shadow-lg shadow-cyan-glow/5'
          : 'bg-transparent'
      }`}
    >
      <div className="px-[15%] py-3 flex items-center justify-between">
        <Link
          to="/"
          className="hover:opacity-80 transition-opacity"
        >
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="JL" className="h-20 w-20" />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-base transition-colors duration-300 relative group ${
                location.pathname === l.to ? 'text-cyan-glow' : 'text-gray-400 hover:text-cyan-glow'
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-cyan-glow to-purple-glow transition-all duration-300 ${
                  location.pathname === l.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <a
            href="https://docs.google.com/document/d/1kTR1VcFTvhjtDSgaaszizKWorqkxX08jvwGrWrufyFk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-base font-medium border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        <button
          className="lg:hidden text-gray-300 text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-t border-cyan-glow/10 px-6 pb-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`block w-full py-3.5 text-lg transition-colors border-b border-white/5 ${
                location.pathname === l.to ? 'text-cyan-glow' : 'text-gray-400 hover:text-cyan-glow'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
