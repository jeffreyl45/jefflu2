import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'

const contactInfo = [
  { icon: <FaEnvelope />, label: 'Email', value: 'jefflu288@gmail.com', href: 'mailto:jefflu288@gmail.com' },
  { icon: <FaGithub />, label: 'GitHub', value: 'jeffreyl45', href: 'https://github.com/jeffreyl45', external: true },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'Jeffrey Lu', href: 'https://linkedin.com/in/jeffrey-lu-2b5367204', external: true },
]

export default function Contact() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col pt-32 pb-16 px-6 lg:px-[15%]">
      <div className="w-full">
        <div className="animate-fade-in">
          <SectionHeading title="Get In Touch" subtitle="I'm always open to meeting new people." />
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.15s' }}>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Let's Connect!</h3>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 text-center">
              Feel free to reach out to me for collaborations or opportunities!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl glass-card hover:border-cyan-glow/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-glow/10 flex items-center justify-center text-2xl text-cyan-glow group-hover:text-purple-glow group-hover:bg-purple-glow/10 transition-colors duration-300 mb-3">
                    {info.icon}
                  </div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">{info.label}</p>
                  <p className="text-base text-gray-300 group-hover:text-cyan-glow transition-colors duration-300">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
