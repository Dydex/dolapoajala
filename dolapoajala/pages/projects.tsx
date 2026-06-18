import React from "react";
import { PROJECTSAMPLE } from "@/constants";
import Card from "@/components/common/Card";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const ProjectsPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 bg-grid-pattern overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full min-h-screen py-24 px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-12">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-full hover:border-indigo-500/30 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-sm font-semibold cursor-pointer"
          >
            <FaArrowLeft /> Back to Home
          </button>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">All Projects</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 w-full mt-4">
          {PROJECTSAMPLE.map((project, idx) => (
            <Card
              key={idx}
              name={project.name}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
