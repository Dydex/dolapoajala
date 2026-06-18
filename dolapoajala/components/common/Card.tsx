import { CardProps } from "@/interfaces";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card: React.FC<CardProps> = ({ name, description, image, title, tags }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-5 items-stretch bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-md hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 group">
      {/* Image Container */}
      <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-800/60 aspect-video lg:aspect-auto min-h-[220px] bg-slate-100/30 dark:bg-slate-950/30">
        {/* Blurred background image to fill the space without letterboxing */}
        <Image
          src={image}
          alt=""
          fill
          className="object-cover blur-xl opacity-35 dark:opacity-25 scale-105 pointer-events-none"
          sizes="(max-w-768px) 100vw, 50vw"
        />
        {/* Subtle shadow overlay for depth behind the main image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none z-10" />
        
        {/* Main sharp image, fully visible and centered */}
        <div className="absolute inset-0 flex items-center justify-center p-3 z-20">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-w-768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between py-1 min-h-[200px]">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-250">
            {name}
          </h3>
          
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
        
        <div>
          <a
            href={title}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-all duration-200 shadow-sm group/btn cursor-pointer"
          >
            Live Demo
            <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
