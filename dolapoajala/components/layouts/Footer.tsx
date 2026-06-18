import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white/40 dark:bg-slate-950/40 border-t border-slate-200/50 dark:border-slate-800/50 py-8 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Dolapo Ajala. All rights reserved.
        </p>

        <ul className="flex gap-4 items-center">
          <li>
            <a
              href="https://x.com/dp7954"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 inline-flex items-center justify-center rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={15} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Dydex"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 inline-flex items-center justify-center rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ajala-dolapo-756394281/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 inline-flex items-center justify-center rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={15} />
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=supremeajala@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 inline-flex items-center justify-center rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={15} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
