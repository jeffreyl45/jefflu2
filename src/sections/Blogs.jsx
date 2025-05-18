import { useState } from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'

const blogs = [
  {
    title: 'How I Built This Site',
    description: 'A deep dive into the design and development of my portfolio site.',
    image: '/blog1.jpg',
    link: '/blogs/blog1'
  },
  {
    title: 'Intro to Language Parsing',
    description: 'What I learned building a tool that parses and teaches grammar.',
    image: '/blog2.jpg',
    link: '/blogs/language-parser'
  },
  {
    title: 'Machine Learning Project Tips',
    description: 'Some advice from working on ML projects at school and co-ops.',
    image: '/blog3.jpg',
    link: '/blogs/ml-project-tips'
  },
  {
    title: 'Extra Blog 1',
    description: 'An insightful read on design systems.',
    image: '/blog4.jpg',
    link: '/blogs/design-systems'
  },
  {
    title: 'Extra Blog 2',
    description: 'Thoughts on effective study habits.',
    image: '/blog5.jpg',
    link: '/blogs/study-habits'
  }
]

export default function Blogs() {
  const [expanded, setExpanded] = useState(false)

  const visibleBlogs = expanded ? blogs : blogs.slice(0, 3)

  return (
    <section className="blogs-section">
      <h2 className="section-title">Blogs</h2>
      <div className="blogs-grid">
        {visibleBlogs.map((blog, idx) => (
          <Link to={blog.link} key={idx} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <button className="toggle-button" onClick={() => setExpanded(prev => !prev)}>
        {expanded ? 'See Less' : 'See More'}
      </button>
    </section>
  )
}
