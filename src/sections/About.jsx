import { FiCode, FiServer, FiDatabase, FiSmartphone } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const skills = [
  { icon: <FiCode />, title: 'Languages', items: ['JavaScript', 'Python', 'Java', 'C', 'SQL'] },
  { icon: <FiServer />, title: 'Frameworks', items: ['React', 'Terraform', 'Springboot'] },
  { icon: <FiDatabase />, title: 'Tools', items: ['Git', 'Splunk', 'Dynatrace', 'Docker'] },
  { icon: <FiSmartphone />, title: 'Interests', items: ['Machine Learning', 'AI', 'Full-Stack', 'Cloud'] },
]

export default function About() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center py-32 px-6 lg:px-[15%]">
      <div className="w-full">
        <div className="animate-fade-in">
          <SectionHeading title="About Me" subtitle="I'm a Software Engineer with a Thirst for Learning." />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                I'm a Computer Science student at McMaster University
                with experience in Automation, Data Management, Machine Learning, Software Development and Research.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed mb-4">
                I specialize in full-stack development with a deep interest and understanding in Machine Learning.
                I love exploring new technologies and developing impactful products.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Outside of coding and learning new technology, you can find me playing Softball, working on Personal Fitness or
                trying new food!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { number: '2+', label: 'Years Exp' }
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-cyan-glow text-glow">{stat.number}</div>
                  <div className="text-base text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {skills.map((skill) => (
              <div key={skill.title} className="glass-card rounded-xl p-6 group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl text-cyan-glow mb-3 group-hover:text-purple-glow transition-colors">{skill.icon}</div>
                <h3 className="text-lg text-white font-semibold mb-3">{skill.title}</h3>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li key={item} className="text-lg text-gray-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
