import { useState, useEffect } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = [
  { id: 'about',    label: 'About'    },
  { id: 'projects', label: 'Projects' },
  { id: 'blogs',    label: 'Blog'     },
  { id: 'contact',  label: 'Contact'  },
]

export default function Sidebar() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      const ids = ['contact', 'blogs', 'projects', 'about']
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="flex flex-col justify-between h-full">
      {/* ── Identity ── */}
      <div>
        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-neutral-800 mb-6">
          <img
            src={`${BASE}jeffrey.jpeg`}
            alt="Jeffrey Lu"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-white mb-1">Jeffrey Lu</h1>
        <p className="text-[15px] text-neutral-400 font-medium mb-4">
          Software Engineer at TELUS
        </p>
        <p className="text-sm text-neutral-500 leading-relaxed max-w-[260px]">
          CS student at McMaster University. I build scalable software and
          explore ML&nbsp;&&nbsp;AI.
        </p>

        {/* ── Nav (desktop only) ── */}
        <nav className="hidden lg:flex flex-col gap-0.5 mt-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`group flex items-center gap-4 py-2 text-sm font-medium transition-colors text-left cursor-pointer ${
                active === link.id
                  ? 'text-white'
                  : 'text-neutral-600 hover:text-neutral-300'
              }`}
            >
              <span
                className={`h-px bg-current transition-all duration-300 ${
                  active === link.id
                    ? 'w-10'
                    : 'w-4 group-hover:w-6'
                }`}
              />
              {link.label}
            </button>
          ))}
        </nav>

        {/* ── CTA (mobile only) ── */}
        <div className="flex lg:hidden gap-3 mt-8">
          <a
            href="https://docs.google.com/document/d/1kTR1VcFTvhjtDSgaaszizKWorqkxX08jvwGrWrufyFk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/jeffrey-lu-2b5367204/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium rounded-lg hover:border-neutral-700 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jeffreyl45"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium rounded-lg hover:border-neutral-700 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* ── Resume + Social (desktop only) ── */}
      <div className="hidden lg:flex flex-col gap-5">
        <a
          href="https://docs.google.com/document/d/1kTR1VcFTvhjtDSgaaszizKWorqkxX08jvwGrWrufyFk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-4 py-2 w-fit bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors"
        >
          Resume
        </a>
        <div className="flex items-center gap-5">
          <a
            href="mailto:jefflu288@gmail.com"
            className="text-neutral-600 hover:text-white transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="text-lg" />
          </a>
          <a
            href="https://github.com/jeffreyn45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://linkedin.com/in/jeffrey-lu-2b5367204"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  )
}
