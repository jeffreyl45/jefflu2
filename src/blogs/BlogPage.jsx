import HomePlateLogo from '../components/HomePlateLogo'
import './BlogPage.css'

export default function BlogPage() {
  return (
    <div className="blog-wrapper">
      <a href="/" className="logo-homeplate blog-logo-link">
        <HomePlateLogo />
      </a>

      <main className="blog-content">
        <h1 className="blog-title">How I Built This Site</h1>
        <p className="blog-date">Published: May 16, 2025</p>

        <article className="blog-article">
          <p>
            This blog walks through how I planned, designed, and developed my personal portfolio website. I’ll cover my
            process from wireframing to choosing technologies and building responsive sections like About, Projects,
            Blogs, and Contact.
          </p>
          <p>
            The site is built with <strong>React + Vite</strong>, styled with custom CSS, and organized into clean
            sections with responsive design. Animations are added for polish and interactivity.
          </p>
          <p>
            One of my favorite parts is the <em>flip card animation</em> used in Experience and Education, and the
            clickable HomePlate logo in the navbar.
          </p>
        </article>
      </main>
    </div>
  )
}
