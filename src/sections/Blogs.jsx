import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const blogs = [
  {
    title: 'Hello World 2.0!',
    description: 'Welcome to my new website!',
    date: 'May 2025',
    readTime: '5 min read',
    link: '/blogs/blog1',
  },
]

export default function Blogs() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? blogs : blogs.slice(0, 3)

  return (
    <section className="relative z-10 min-h-screen flex flex-col pt-32 pb-16 px-6 lg:px-[15%]">
      <div className="w-full">
        <div className="animate-fade-in">
          <SectionHeading title="Blog" subtitle="My Thoughts and Experiences." />
        </div>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
          {visible.map((blog, i) => (
            <Link
              key={i}
              to={blog.link}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 w-full max-w-md"
            >
              <div className="h-2 bg-linear-to-r from-cyan-glow via-purple-glow to-pink-glow" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-base mb-3">
                  <FiCalendar />
                  <span>{blog.date}</span>
                  <span className="text-gray-700">&middot;</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-glow transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  {blog.description}
                </p>
                <div className="flex items-center gap-2 text-cyan-glow text-lg font-medium">
                  Read More
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {blogs.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-cyan-glow/50 hover:text-cyan-glow transition-all duration-300 cursor-pointer"
            >
              {expanded ? '↑ Show Less' : '↓ View All Posts'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
