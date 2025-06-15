import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // ✅ Reuse exact same styles as Projects

const BASE = import.meta.env.BASE_URL;

const blogs = [
  {
    title: 'Hello World 2.0!',
    description: 'Welcome to my New Website!',
    image: `${BASE}icon.png`,
    link: '/blogs/blog1',
  }
  // Add more blogs as needed
];

export default function Blogs() {
  const [expanded, setExpanded] = useState(false);
  const visibleBlogs = expanded ? blogs : blogs.slice(0, 3);

  return (
    <section className="projects-section blogs-section" id="blogs">
      <h2 className="projects-title blogs-title">Blogs</h2>

      <div className="projects-grid">
        {visibleBlogs.map((blog, idx) => (
          <Link to={blog.link} key={idx} className="project-card">
            <img src={blog.image} alt={blog.title} className="project-image" />
            <div className="project-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {blogs.length > 3 && (
        <button className="toggle-button" onClick={() => setExpanded(prev => !prev)}>
          {expanded ? 'See Less' : 'See More'}
        </button>
      )}
    </section>
  );
}
