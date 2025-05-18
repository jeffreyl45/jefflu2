import { useState, useEffect } from 'react'
import HomePlateLogo from './HomePlateLogo'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showHamburger, setShowHamburger] = useState(false)

  useEffect(() => {
    const checkMobile = () => setShowHamburger(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const closeMenu = () => setIsOpen(false)

  // ✨ Programmatic smooth scroll using element IDs
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'auto' }) // or 'smooth' if you prefer
    }
    closeMenu()
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="logo-homeplate desktop-only" onClick={() => scrollToSection('about')}>
          <HomePlateLogo />
        </a>

        <ul className="navbar-links desktop-only">
          <li><a onClick={() => scrollToSection('about')}>About Me</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('blogs')}>Blogs</a></li>
        </ul>

        <a className="contact-button desktop-only" onClick={() => scrollToSection('contact')}>
          Contact Me
        </a>

        <button
          className={`hamburger ${showHamburger ? 'hamburger-animate' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`menu mobile-only ${isOpen ? 'open' : ''}`}>
          <a className="logo-homeplate" onClick={() => scrollToSection('about')}>
            <HomePlateLogo />
          </a>
          <ul className="navbar-links">
            <li><a onClick={() => scrollToSection('about')}>About Me</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('blogs')}>Blogs</a></li>
          </ul>
          <a className="contact-button" onClick={() => scrollToSection('contact')}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
