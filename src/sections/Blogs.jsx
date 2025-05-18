import { useState } from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'
const BASE = import.meta.env.BASE_URL;


const blogs = [
  {
    title: 'How I Built This Site',
    description: 'A deep dive into the design and development of my portfolio site.',
    image: `${BASE}icon.png`, 
    link: '/blogs/blog1'
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
