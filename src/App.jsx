import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Blogs from './sections/Blogs'
import Contact from './sections/Contact'

import BlogHowIBuiltThis from './blogs/BlogHowIBuiltThis'
import BlogLanguageParser from './blogs/BlogLanguageParser'
import BlogMLTips from './blogs/BlogMLTips'
import BlogDesignSystems from './blogs/BlogDesignSystems'
import BlogStudyHabits from './blogs/BlogStudyHabits'

import './App.css'

function App() {
  const location = useLocation()

  return (
    <Routes>
      {/* Blog Pages */}
      <Route path="/blogs/blog1" element={<BlogHowIBuiltThis />} />
      
      {/*
        <Route path="/blogs/language-parser" element={<BlogLanguageParser />} />
        <Route path="/blogs/ml-project-tips" element={<BlogMLTips />} />
        <Route path="/blogs/design-systems" element={<BlogDesignSystems />} />
        <Route path="/blogs/study-habits" element={<BlogStudyHabits />} />
      */}

      {/* Main Portfolio Site */}
      <Route
        path="/"
        element={
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
        }
      />
    </Routes>
  )
}

export default App