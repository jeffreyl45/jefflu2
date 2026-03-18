import SectionHeading from '../components/SectionHeading'

const experience = [
  {
    title: 'Software Engineer',
    company: 'TELUS',
    period: 'Jan 2026 – Present',
    description: 'Building the AI Factory Team Platform.',
    tech: ['Python', 'Typescript', 'AI/ML', 'Cloud'],
    current: true,
  },
  {
    title: 'Software Engineer',
    company: 'Scotiabank',
    period: 'May 2025 – Dec 2025',
    description:
      'Deployed and configured Terraform modules on Dynatrace to monitor SSL certificates.',
    tech: ['Terraform', 'Dynatrace'],
  },
  {
    title: 'Assistant Health & Safety Analyst',
    company: 'Toronto Transit Commission',
    period: 'May 2024 – Aug 2024',
    description:
      'Analyzed trends in construction safety reports in the Safety and Security Team.',
    tech: ['Data Analysis', 'Automation'],
  },
  {
    title: 'AI Software Developer',
    company: 'SequoiaDB',
    period: 'May 2023 – Aug 2023',
    description:
      'Researched and demonstrated ML methods and algorithms as a member of the Smart Jira Project Team.',
    tech: ['Python', 'AI/ML', 'Research'],
  },
]

export default function Experience() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center py-32 px-6 lg:px-[15%]">
      <div className="w-full">
        <div className="animate-fade-in">
          <SectionHeading title="Work Experience" subtitle="Below are the Roles I've Worked in and my Achievements." />
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
          {experience.map((exp, i) => {
            const isLeft = i % 2 === 0

            const card = (
              <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-base text-cyan-glow font-mono">{exp.period}</span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      Now
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mt-2">{exp.title}</h3>
                <p className="text-purple-glow text-lg mb-3">{exp.company}</p>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-sm px-3 py-1.5 rounded-full bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/20">{t}</span>
                  ))}
                </div>
              </div>
            )

            return (
              <div key={i} className="mb-12">
                {/* Desktop */}
                <div className="hidden md:grid md:grid-cols-[1fr_40px_1fr] md:items-center">
                  <div className={isLeft ? 'pr-6' : ''}>{isLeft && card}</div>
                  <div className="flex items-center justify-center relative self-stretch">
                    <div className="w-0.5 h-full bg-linear-to-b from-cyan-glow/30 via-purple-glow/30 to-pink-glow/30 absolute inset-y-0" />
                    <div className="w-4 h-4 rounded-full bg-dark-900 border-2 border-cyan-glow z-10 animate-pulse-glow shrink-0" />
                  </div>
                  <div className={!isLeft ? 'pl-6' : ''}>{!isLeft && card}</div>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                  {card}
                </div>
              </div>
            )
          })}
        </div>

        {/* Education */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white">McMaster University</h4>
            <p className="text-purple-glow text-lg mt-1">Computer Science Co-op, B.A.Sc.</p>
            <p className="text-base text-cyan-glow font-mono mt-2">2022 – Expected 2027</p>
            <p className="text-gray-400 text-lg leading-relaxed mt-3">
              Relevant courses in Machine Learning, Statistics, Software Development,
              Algorithms, and Compilers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
