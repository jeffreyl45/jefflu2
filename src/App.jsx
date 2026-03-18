import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Blogs from './sections/Blogs'
import Contact from './sections/Contact'
import Blog1 from './blogs/Blog1'

function Layout() {
  return (
    <div className="bg-dark-900 text-white min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/blogs/blog1" element={<Blog1 />} />
      </Routes>
    </>
  )
}

export default App