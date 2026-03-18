import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiCalendar } from 'react-icons/fi'
import ParticleBackground from '../components/ParticleBackground'

export default function Blog1() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-dark-900 text-white min-h-screen relative">
      <ParticleBackground />

      <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-glow text-lg transition-colors duration-300"
          >
            <FiArrowLeft />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <article className="glass-card rounded-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-gray-500 text-lg mb-4">
              <FiCalendar />
              <span>May 17, 2025</span>
              <span className="text-gray-700">&middot;</span>
              <span>Jeffrey Lu</span>
              <span className="text-gray-700">&middot;</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-linear-to-r from-cyan-glow via-purple-glow to-pink-glow bg-clip-text text-transparent">
                Hello World 2.0!
              </span>
            </h1>
            <div className="h-1 w-20 bg-linear-to-r from-cyan-glow to-purple-glow rounded-full mt-4" />
          </div>

          <div className="space-y-6 text-gray-300 text-xl leading-relaxed">
            <p>
              Hello internet! Welcome to my personal portfolio 2.0 made with{' '}
              <strong className="text-cyan-glow">React + Vite</strong>! If you've come from my{' '}
              <a
                href="https://jeffreyl45.github.io/jefflu/"
                className="text-cyan-glow hover:text-purple-glow underline underline-offset-2 transition-colors duration-300"
              >
                old webpage
              </a>{' '}
              then you probably know who I am, but in case you're new, my name is Jeffrey Lu and I
              just finished my third year of Computer Science at McMaster University. I'm currently
              taking a professional experience year working at Scotiabank as a Software Engineer starting
              from May 2025. My main interests lie in Software Development and Machine Learning/AI.
              Outside of school, I enjoy playing sports such as Softball and Badminton while also
              engaging in personal fitness.
            </p>
            <p>
              On a more serious note, it's a little bittersweet to be saying goodbye to my old
              webpage which was one of my very first front end development projects. I first deployed
              this project back in December 2023 with an HTML, CSS and JS stack. I definitely learned a
              lot about those tools while building that webpage, but as it continued to grow bigger and
              bigger with all of the new projects I wanted to post on it along with more blogs, it became
              somewhat messy and difficult to maintain. This motivated me to launch a completely new
              webpage that would be easier and cleaner to maintain and thus I decided to make it using{' '}
              <strong className="text-cyan-glow">React</strong> and{' '}
              <strong className="text-cyan-glow">Vite</strong> for its fast build times and limited
              configuration hassles.
            </p>
            <p>
              Nonetheless, I hope you enjoy exploring my new website, learning more about me and
              checking in on what I've been working on!
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}
