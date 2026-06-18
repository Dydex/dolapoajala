import { FaUser, FaProjectDiagram } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className="flex justify-center py-4 fixed top-0 left-0 z-50 w-full bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 p-1.5 rounded-full shadow-inner">
        <Link 
          href="/" 
          className={`flex gap-2 items-center py-2 px-4 rounded-full text-xs font-semibold transition-all duration-300 ${
            currentPath === '/' 
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/15' 
              : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200/40 dark:hover:bg-slate-800/40'
          }`}
        >
          <FaUser size={12} />
          <span>About</span>
        </Link>

        <Link 
          href="/projects" 
          className={`flex gap-2 items-center py-2 px-4 rounded-full text-xs font-semibold transition-all duration-300 ${
            currentPath === '/projects' 
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/15' 
              : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200/40 dark:hover:bg-slate-800/40'
          }`}
        >
          <FaProjectDiagram size={12} />
          <span>Projects</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
