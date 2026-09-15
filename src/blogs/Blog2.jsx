import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiCalendar } from 'react-icons/fi'
import ParticleBackground from '../components/ParticleBackground'

export default function Blog2() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-dark-900 text-white min-h-screen relative">
      <ParticleBackground />

      <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link
            to="/blogs"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-glow text-lg transition-colors duration-300"
          >
            <FiArrowLeft />
            Back
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <article className="glass-card rounded-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-gray-500 text-lg mb-4">
              <FiCalendar />
              <span>September 15, 2026</span>
              <span className="text-gray-700">&middot;</span>
              <span>Jeffrey Lu</span>
              <span className="text-gray-700">&middot;</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span>
                How big a deal is it to set up our own website?
              </span>
            </h1>
            <div className="h-1 w-20 bg-linear-to-r from-cyan-glow to-purple-glow rounded-full mt-4" />
          </div>

          <div className="space-y-6 text-gray-300 text-xl leading-relaxed">
            <p>
              Those words were said to me in April 2026 right before my softball season began and completely shifted my 
              perspective on project building. 
              Every summer, I enjoy playing softball and one of my leagues had just learned their website of over
              20 years was suddenly being decommissioned a month before the season began. The commissioner of our league 
              loves keeping track of player statistics and game results throughout the season so he asked if I could come up
              with a custom solution so he could continue doing so this year and beyond. 
            </p>
            <p>
              I wrote a <a
                href="https://www.linkedin.com/posts/jeffreylu45_webdevelopment-react-supabase-share-7500419246527725568-LS4S/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQFuukBmPklPR7BIm50Fk6uUTl-2fpyRJ8"
                className="text-cyan-glow hover:text-purple-glow underline underline-offset-2 transition-colors duration-300"
              >
                LinkedIn post
              </a>{' '}
              about this a while back, framing it mostly as a door into freelance work. But it taught me something bigger and more personal, 
              a shift in how I think about every personal project I start from now on.
            </p>
            <p>
              For years, I built personal projects to learn frameworks and languages, following tutorials or courses.
              Those projects were useful but the question I kept asking was <strong className="text-cyan-glow">"what will I learn from this?"</strong> and{' '} never       
              {' '}<strong className="text-cyan-glow">"who needs this?"</strong> Of all things, a softball league had me finally asking the latter.
            </p>
            <p>
             The website was the first project I built using <strong className="text-cyan-glow">Next.js</strong> paired with 
             {' '}<strong className="text-cyan-glow">Supabase</strong> for the database, authentication and backend. I probably
             would have picked up this stack eventually for the sole purpose of learning how they worked.
            </p>
            <p>
             This time was different, every decision I made was shaped by <strong className="text-cyan-glow">feedback</strong> {' '}
             instead of <strong className="text-cyan-glow">documentation</strong>. The critique of my project didn't come from a textbook,
             it came from the players and the commissioner who wanted a website that would be fast and save time for stat entries. When a page 
             was confusing or a functionality wasn't working properly, I heard about it immediately because someone was depending on it.
             The website was a success all season long, averaging 170 visits per week for our ~55 player, 4 team league and it cut the commissioner's
             data entry time by 50%.        
            </p>
            <p>
             Getting hired by a client who saw what I was capable of, and later receiving the brant Snow Commitment Trophy, were both 
             incredible accomplishments. But its really the impact I had within my community that sticks to me the most, something building 
             or following tutorial projects could never really give me.
            </p>
            <p>
             I'll always build projects for fun and I'll always learn from that. But I carry a different question into every 
             project now: who is this actually for? What problem does it solve for them?
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}
