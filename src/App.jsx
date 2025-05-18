import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Blogs from './sections/Blogs'
import Contact from './sections/Contact'
import BlogPage from './blogs/BlogPage'
import './App.css'

function App() {
  const location = useLocation()

  // If on a blog page, don't show full site layout
  if (location.pathname.startsWith('/blogs/')) {
    return <BlogPage />
  }

  return (
    <div className="scaled-wrapper">
      <Navbar />
      <main>
        <div id="about" className="anchor-wrapper">
          <About />
        </div>
        <div id="projects" className="anchor-wrapper">
          <Projects />
        </div>
        <div id="blogs" className="anchor-wrapper">
          <Blogs />
        </div>
        <div id="contact" className="anchor-wrapper">
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
