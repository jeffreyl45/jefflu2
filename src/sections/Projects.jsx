import { useState } from 'react'
import './Cards.css'
const BASE = import.meta.env.BASE_URL;

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'New Personal Portfolio website made using React Vite',
    image: `${BASE}icon.png`,
    link: 'https://github.com/jeffreyl45/jefflu2'
  },
  {
    title: 'Old Personal Portfolio Website',
    description: "My old personal portfolio website made using HTML, CSS, JS",
    image: `${BASE}personalPortfolio.png`,
    link: 'https://github.com/jeffreyl45/jefflu'
  },
  {
    title: 'MultiChat',
    description: 'Mock Social Media Direct Messaging Full Stack Web Application in React and Python.',
    image: `${BASE}multichatLogo.png`,
    link: 'https://github.com/jeffreyl45/multichat'
  },
  {
    title: 'Similar Image Search',
    description: "A machine learning application that searches for the top 6 visually similar images in an HNSW database to an input.",
    image: `${BASE}hnsw.png`,
    link: 'https://github.com/jeffreyl45/Similar-Image-Search'
  },
  {
    title: 'tAI',
    description: 'A classroom website using Cohere API to provide customized chatboxes, offering instant and personalized assistance.',
    image: `${BASE}tai.png`,
    link: 'https://github.com/deltahacks-tai/backend'
  },
  {
    title: 'TLDR Roger Ebert Reviews',
    description: "A machine learning project that summarizes an article from Roger Ebert's Website",
    image: `${BASE}roger.jpg`,
    link: 'https://github.com/jeffreyl45/TLDR-Roger-Ebert-Reviews'
  },
  {
    title: 'DrumKit Keyboard',
    description: 'Play different drum sounds by pressing the keys on your keyboard!',
    image: `${BASE}drumkit.png`,
    link: 'https://github.com/jeffreyl45/DrumKit-Keyboard'
  },
  {
    title: 'Hocus Focus',
    description: 'A program that notifies you when you are distracted based on facial tracking using OpenCV library and Python.',
    image: `${BASE}hocusFocus.png`,
    link: 'https://github.com/jeffreyl45/HocusFocus'
  },
  {
    title: 'Hangman',
    description: 'Hangman Game Implemented in Java',
    image: `${BASE}hangman.png`,
    link: 'https://github.com/jeffreyl45/Java-Hangman'
  },
  {
    title: 'You Got Rocked!',
    description: 'Players take turns picking rocks, the player that takes the last rock is the loser! Made using Python.',
    image: `${BASE}rocks.jpg`,
    link: 'https://github.com/jeffreyl45/YouGotRocked'
  }
];


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
