import { useState } from 'react'
import './About.css'
const BASE = import.meta.env.BASE_URL

export default function About() {
  const [flippedCards, setFlippedCards] = useState({})

  const handleCardClick = (type, index) => {
    setFlippedCards(prev => ({
      ...prev,
      [`${type}-${index}`]: !prev[`${type}-${index}`]
    }))
  }

  const experience = [
    {
      title: 'Scotiabank',
      role: 'Software Engineer',
      date: 'May 2025 – Present',
      description: 'Developing Monitoring Tools on Dynatrace and Splunk 🛠️.'
    },
    {
      title: 'Toronto Transit Commission',
      role: 'Assistant Health & Safety Analyst',
      date: 'May 2024 – Aug 2024',
      description: 'Analyzed Trends in Construction Safety Reports in the Safety and Security Team.'
    },
    {
      title: 'SequoiaDB',
      role: 'AI Software Developer',
      date: 'May 2023 – Aug 2023',
      description: 'Researched and Demonstrated Machine Learning Methods and Algorithms as a Member of the Smart Jira Project Team.'
    }
  ]

  const education = [
    {
      title: 'McMaster University',
      role: 'Computer Science Co-op',
      date: '2022 – Expected 2027',
      description: 'Relevant Courses in Machine Learning, Statistics, Software Development, Algorithms, Compilers.'
    }
  ]

  return (
    <div className="about-container">
      <h1 className="about-main-title">About Me</h1>

      <div className="profile-image-wrapper">
        <img src={`${BASE}jeffrey.jpeg`} alt="Jeffrey" className="profile-image" />
      </div>

      <h2 className="about-greeting">Hi, I'm Jeffrey 👋</h2>

      <div className="about-text">
        <p>
          I'm a CS student and a current SWE intern at Scotiabank. I'm passionate about
          Software Development, Machine Learning and Data.
        </p>
        <div className="about-buttons">
          <a href="https://docs.google.com/document/d/1kTR1VcFTvhjtDSgaaszizKWorqkxX08jvwGrWrufyFk/edit?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/jeffrey-lu-2b5367204/" className="btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="about-section">
        <h2>Experience</h2>
        <div className="card-grid">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className={`flip-card ${flippedCards[`exp-${idx}`] ? 'flipped' : ''}`}
              onClick={() => handleCardClick('exp', idx)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>{job.title}</h3>
                  <p><strong>{job.role}</strong></p>
                  <p>{job.date}</p>
                </div>
                <div className="flip-card-back">
                  <p>{job.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>Education</h2>
        <div className="card-grid">
          {education.map((school, idx) => (
            <div
              key={idx}
              className={`flip-card ${flippedCards[`edu-${idx}`] ? 'flipped' : ''}`}
              onClick={() => handleCardClick('edu', idx)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>{school.title}</h3>
                  <p><strong>{school.role}</strong></p>
                  <p>{school.date}</p>
                </div>
                <div className="flip-card-back">
                  <p>{school.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>C</span>
          <span>CSS</span>
          <span>HTML</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>React</span>
          <span>SQL</span>
        </div>
      </div>
    </div>
  )
}