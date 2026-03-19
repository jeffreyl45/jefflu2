import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'

const BASE = import.meta.env.BASE_URL

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'Personal portfolio website made using React + Vite.',
    image: `${BASE}logo.svg`,
    link: 'https://github.com/jeffreyl45/jefflu2',
    tags: ['React', 'Vite', 'Tailwind'],
  },
  {
    title: 'Old Personal Portfolio Website',
    description: 'My old personal portfolio website made using HTML, CSS, and JS.',
    image: `${BASE}personalPortfolio.png`,
    link: 'https://github.com/jeffreyl45/jefflu',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'MultiChat',
    description: 'Mock social media direct messaging full stack web application.',
    image: `${BASE}multichatLogo.png`,
    link: 'https://github.com/jeffreyl45/multichat',
    tags: ['React', 'Python', 'WebSocket'],
  },
  {
    title: 'Similar Image Search',
    description: 'ML application that searches for the top 6 visually similar images using an HNSW database.',
    image: `${BASE}hnsw.png`,
    link: 'https://github.com/jeffreyl45/Similar-Image-Search',
    tags: ['Python', 'ML', 'HNSW'],
  },
  {
    title: 'TLDR Roger Ebert Reviews',
    description: "ML project that summarizes articles from Roger Ebert's website.",
    image: `${BASE}roger.jpg`,
    link: 'https://github.com/jeffreyl45/TLDR-Roger-Ebert-Reviews',
    tags: ['Python', 'NLP', 'ML'],
  },
  {
    title: 'DrumKit Keyboard',
    description: 'Play different drum sounds by pressing keys on your keyboard.',
    image: `${BASE}drumkit.png`,
    link: 'https://github.com/jeffreyl45/DrumKit-Keyboard',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Hocus Focus',
    description: 'Program that notifies you when distracted using facial tracking and OpenCV.',
    image: `${BASE}hocusFocus.png`,
    link: 'https://github.com/jeffreyl45/HocusFocus',
    tags: ['Python', 'OpenCV'],
  },
  {
    title: 'Hangman',
    description: 'Classic Hangman game implemented in Java.',
    image: `${BASE}hangman.png`,
    link: 'https://github.com/jeffreyl45/Java-Hangman',
    tags: ['Java'],
  },
  {
    title: 'You Got Rocked!',
    description: 'Turn-based rock picking game where the last player to take a rock loses.',
    image: `${BASE}rocks.jpg`,
    link: 'https://github.com/jeffreyl45/YouGotRocked',
    tags: ['Python'],
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? projects : projects.slice(0, 6)

  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center py-32 px-6 lg:px-[15%]">
      <div className="w-full">
        <div className="animate-fade-in">
          <SectionHeading title="Projects" subtitle="Interesting Things I've Built." />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
          {visible.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className="h-44 bg-dark-700/60 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-cyan-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={p.image}
                  alt={p.title}
                  className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg text-white font-semibold group-hover:text-cyan-glow transition-colors duration-300">
                    {p.title}
                  </h3>
                  <FaGithub className="text-lg text-gray-600 group-hover:text-cyan-glow transition-colors duration-300 shrink-0 mt-1" />
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-4 line-clamp-2">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1.5 rounded-full bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-cyan-glow/50 hover:text-cyan-glow transition-all duration-300 cursor-pointer"
            >
              {expanded ? '↑ Show Less' : '↓ View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
