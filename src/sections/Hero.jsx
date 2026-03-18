import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 lg:px-[15%]">
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        <div className="flex justify-center mb-6 animate-fade-in-up">
          <img
            src={`${BASE}jeffrey.jpeg`}
            alt="Jeffrey Lu"
            className="w-28 h-28 rounded-full object-cover ring-4 ring-cyan-glow/20"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-linear-to-r from-cyan-glow via-purple-glow to-pink-glow bg-clip-text text-transparent text-glow">
            Jeffrey Lu
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Software Engineer & CS Student
        </p>

        <p className="text-xl text-gray-500 max-w-4xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          I'm a Final Year CS student at McMaster University passionate about building scalable
          software and exploring Machine Learning & AI. Current SWE Intern at TELUS.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/projects"
            className="px-8 py-3 rounded-full bg-linear-to-r from-cyan-glow to-purple-glow text-dark-900 font-semibold hover:shadow-lg hover:shadow-cyan-glow/25 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Link>
          <a
            href="https://docs.google.com/document/d/1kTR1VcFTvhjtDSgaaszizKWorqkxX08jvwGrWrufyFk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-cyan-glow/50 hover:text-cyan-glow transition-all duration-300"
          >
            Resume
          </a>
        </div>

      </div>
    </section>
  )
}
