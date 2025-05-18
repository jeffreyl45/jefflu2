import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal site to showcase skills and projects.',
    image: '/portfolio.png',
    link: 'https://github.com/jeffreylu7/portfolio-site'
  },
  {
    title: 'Language Learning Tool',
    description: 'App for parsing and learning grammar from video transcripts.',
    image: '/language.png',
    link: 'https://github.com/jeffreylu7/language-tool'
  },
  {
    title: 'Baseball Stats Tool',
    description: 'Editable tool to generate baseball stat tables in HTML.',
    image: '/baseball.png',
    link: 'https://github.com/jeffreylu7/baseball-stats-tool'
  },
  {
    title: 'Extra Project 1',
    description: 'Another cool project to showcase.',
    image: '/extra1.png',
    link: '#'
  },
  {
    title: 'Extra Project 2',
    description: 'Yet another one worth seeing.',
    image: '/extra2.png',
    link: '#'
  }
]

export default function Projects() {
  const [expanded, setExpanded] = useState(false)

  const visibleProjects = expanded ? projects : projects.slice(0, 3)

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {visibleProjects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={proj.image} alt={proj.title} className="project-image" />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </a>
        ))}
      </div>

      <button className="toggle-button" onClick={() => setExpanded(prev => !prev)}>
        {expanded ? 'See Less' : 'See More'}
      </button>
    </div>
  )
}
