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

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-cyan-glow group-hover:text-purple-glow transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-base text-gray-500 uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-lg text-gray-300 hover:text-cyan-glow transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
