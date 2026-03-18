import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-6 px-6 lg:px-[15%]">
      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:items-center">
        <Link
          to="/"
          className="hover:opacity-80 transition-opacity md:justify-self-start"
        >
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="JL" className="h-16 w-16 md:h-20 md:w-20" />
        </Link>

        <div className="flex items-center justify-center gap-8">
          {[
            { icon: <FaEnvelope />, href: "mailto:jefflu288@gmail.com", label: "Email" },
            { icon: <FaGithub />, href: "https://github.com/jeffreyl45", label: "GitHub" },
            { icon: <FaLinkedin />, href: "https://linkedin.com/in/jeffrey-lu-2b5367204", label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={s.label}
              className="text-3xl text-gray-500 hover:text-cyan-glow transition-colors duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-sm md:text-base text-gray-600 md:justify-self-end">
          &copy; {new Date().getFullYear()} Jeffrey Lu
        </p>
      </div>
    </footer>
  );
}
