import './Contact.css'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-message">
        Feel free to connect with me via Email or LinkedIn! I'm always open to chatting about opportunities and collaborations!
      </p>
      <div className="contact-icons">
        <a href="mailto:jefflu288@gmail.com" className="contact-icon" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/jeffreyl45" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/jeffrey-lu-2b5367204" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <p className="contact-footer">© {new Date().getFullYear()} Jeffrey Lu. All rights reserved.</p>
    </section>
  )
}
