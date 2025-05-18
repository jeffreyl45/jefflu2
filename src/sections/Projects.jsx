import { useState } from 'react'
import './Projects.css'

const projects = [
   {
    title: 'Personal Portfolio Website',
    description: (
    <>
      Old Personal Portfolio Website Hosted {' '}
      <a href="https://jeffreyl45.github.io/jefflu/" id="personal Portfolio website" target="_blank" rel="noopener noreferrer">
        here
      </a>{'.'}
    </>
    ),
    image: '/icon.png',
    link: 'https://github.com/jeffreyl45/jefflu2'
  },  
  {
    title: 'Old Personal Portfolio Website',
    description: (
    <>
      Old Personal Portfolio Website Hosted {' '}
      <a href="https://jeffreyl45.github.io/jefflu/" id="personal Portfolio website" target="_blank" rel="noopener noreferrer">
        here
      </a>{'.'}
    </>
    ),
    image: '/personalPortfolio.png',
    link: 'https://github.com/jeffreyl45/jefflu'
  },
  {
    title: 'MultiChat',
    description: 'Mock Social Media Direct Messaging Full Stack Web Application in React and Python.',
    image: '/multichatLogo.png',
    link: 'https://github.com/jeffreyl45/multichat'
  },
  {
    title: 'Similar Image Search',
    description: "A machine learning application that searches for the top 6 visually similar images in an HNSW database to an input.",
    image: '/hnsw.png',
    link: 'https://github.com/jeffreyl45/Similar-Image-Search'
  },
  {
    title: 'tAI',
    description: 'A classroom website using Cohere API to provide customized chatboxes, offering instant and personalized assistance.',
    image: '/tai.png',
    link: 'https://github.com/deltahacks-tai/backend'
  },
  {
    title: 'TLDR Roger Ebert Reviews',
    description: (
    <>
      A machine learning Python project that will summarize a{' '}
      <a href="https://www.rogerebert.com/" id="ebert" target="_blank" rel="noopener noreferrer">
        Roger Ebert
      </a>{' '}
      review in 4 lines!
    </>
    ),
    image: '/roger.jpg',
    link: 'https://github.com/jeffreyl45/TLDR-Roger-Ebert-Reviews'
  },
  {
    title: 'DrumKit Keyboard',
    description: 'Play different drum sounds by pressing the keys on your keyboard!',
    image: '/drumkit.png',
    link: 'https://github.com/jeffreyl45/DrumKit-Keyboard'
  },
  {
    title: 'Hocus Focus',
    description: 'A program that notifies you when you are distracted based on facial tracking using OpenCV library and Python.',
    image: '/hocusFocus.png',
    link: 'https://github.com/jeffreyl45/HocusFocus'
  },
  {
    title: 'Hangman',
    description: 'Hangman Game Implemented in Java',
    image: '/hangman.png',
    link: 'https://github.com/jeffreyl45/Java-Hangman'
  },
  {
    title: 'You Got Rocked!',
    description: 'Players take turns picking rocks, the player that takes the last rock is the loser! Made using Python.',
    image: '/rocks.jpg',
    link: 'https://github.com/jeffreyl45/YouGotRocked'
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
