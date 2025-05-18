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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#about" className="logo-homeplate desktop-only">
          <HomePlateLogo />
        </a>

        <ul className="navbar-links desktop-only">
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>

        <a href="#contact" className="contact-button desktop-only">Contact Me</a>

        <button
          className={`hamburger ${showHamburger ? 'hamburger-animate' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`menu mobile-only ${isOpen ? 'open' : ''}`}>
          <a href="#about" className="logo-homeplate" onClick={closeMenu}>
            <HomePlateLogo />
          </a>
          <ul className="navbar-links">
            <li><a href="#about" onClick={closeMenu}>About Me</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#blogs" onClick={closeMenu}>Blogs</a></li>
          </ul>
          <a href="#contact" className="contact-button" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
