import { 
  FaTwitter, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaHardHat, 
  FaHammer,
  FaMapMarkerAlt,
  FaAward,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaBriefcase,
  FaCalendarAlt
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiExpo,
  SiTailwindcss,
  SiRedux,
  SiSolidity,
  SiEthers,
  SiWalletconnect,
  SiSupabase,
  SiGit,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import Image from "next/image";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import { PROJECTSAMPLE } from "@/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const HomePage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev === PROJECTSAMPLE.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 200);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? PROJECTSAMPLE.length - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === PROJECTSAMPLE.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  const handleSelect = (idx: number) => {
    if (idx === index) return;
    setFade(false);
    setTimeout(() => {
      setIndex(idx);
      setFade(true);
    }, 200);
  };

  return (
    <div className="relative min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 bg-grid-pattern overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        
        {/* Sidebar Profile Card */}
        <aside className="w-full lg:w-[35%] lg:sticky lg:top-28 lg:h-fit z-10">
          <div className="flex flex-col items-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl rounded-3xl p-6 md:p-8 text-center gap-6 group hover:border-indigo-500/20 transition-all duration-300">
            
            {/* Profile Pic Container */}
            <div className="relative">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/avatar.jpg"
                  alt="Dolapo Ajala"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-3.5 w-full flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for work
              </div>

              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Dolapo Ajala
                </h1>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mt-1">
                  Frontend & Blockchain Developer
                </p>
              </div>

              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-semibold bg-slate-100/80 dark:bg-slate-800/80 py-1.5 px-3 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full border-t border-slate-200/60 dark:border-slate-800/60" />

            {/* Brief bio/intro */}
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
              I am a Frontend and Blockchain Developer who builds clean, intuitive, and interactive digital experiences. I specialize in crafting modern web applications using React, Next.js, and TypeScript with a strong eye for design and user experience. On the blockchain side, I design and deploy secure smart contracts in Solidity, integrating them seamlessly with frontend interfaces using industry standard tools like Foundry and Hardhat. With advanced training from Web3Bridge, I have a deep understanding of contract architecture, gas optimization, and security best practices. Currently expanding into Rust, backend systems, and the growing intersection of AI and Web3 
            </p>

            {/* Social Links */}
            <nav className="w-full">
              <ul className="flex flex-wrap gap-2 justify-center">
                <a
                  className="flex items-center gap-1.5 py-1.5 px-3 text-xs font-semibold border border-slate-200 dark:border-slate-800 hover:border-sky-500/30 hover:bg-sky-500/5 hover:text-sky-500 rounded-full transition-all duration-300"
                  href="https://x.com/dp7954"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={13} />
                  <span>X</span>
                </a>
                <a
                  className="flex items-center gap-1.5 py-1.5 px-3 text-xs font-semibold border border-slate-200 dark:border-slate-800 hover:border-slate-900/30 hover:bg-slate-900/5 dark:hover:border-white/30 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white rounded-full transition-all duration-300"
                  href="https://github.com/Dydex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={13} />
                  <span>GitHub</span>
                </a>
                <a
                  className="flex items-center gap-1.5 py-1.5 px-3 text-xs font-semibold border border-slate-200 dark:border-slate-800 hover:border-blue-600/30 hover:bg-blue-600/5 hover:text-blue-600 rounded-full transition-all duration-300"
                  href="https://www.linkedin.com/in/ajala-dolapo-756394281/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={13} />
                  <span>LinkedIn</span>
                </a>
                <a
                  className="flex items-center gap-1.5 py-1.5 px-3 text-xs font-semibold border border-slate-200 dark:border-slate-800 hover:border-red-500/30 hover:bg-red-500/5 hover:text-red-500 rounded-full transition-all duration-300"
                  href="https://gmail.google.com/gmail/?view=cm&fs=1&to=supremeajala@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={13} />
                  <span>Email</span>
                </a>
              </ul>
            </nav>

            {/* Direct Contact Button */}
            <a
              href="mailto:supremeajala@gmail.com"
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20"
            >
              <FaEnvelope />
              <span>Get In Touch</span>
            </a>

          </div>
        </aside>

        {/* Main Content Column */}
        <main className="w-full lg:w-[65%] space-y-12 z-10">
          
          {/* Recent Projects Showcase */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
              <div className="flex items-center gap-2.5">
                <FaCode className="text-indigo-500 text-2xl animate-pulse" />
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Recent Projects
                </h2>
              </div>

              {/* Carousel controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  aria-label="Previous Project"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  aria-label="Next Project"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Project Card Container with smooth fade transition */}
            <div className={`transition-all duration-200 transform ${fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-99'}`}>
              <Card
                name={PROJECTSAMPLE[index].name}
                title={PROJECTSAMPLE[index].title}
                description={PROJECTSAMPLE[index].description}
                image={PROJECTSAMPLE[index].image}
                tags={PROJECTSAMPLE[index].tags}
              />
            </div>

            {/* Progress indicators / Dots */}
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
                {PROJECTSAMPLE.map((proj, idx) => (
                  <button
                    key={proj.name}
                    onClick={() => handleSelect(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === index ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-300 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-700'
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>

              <Button
                className="text-xs font-semibold px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all cursor-pointer"
                label="View all projects"
                onClick={() => {
                  router.push("/projects");
                }}
              />
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
              <FaBriefcase className="text-indigo-500 text-2xl" />
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Experience
              </h2>
            </div>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-4 space-y-8 py-2">
              {[
                {
                  role: "Open Source Contributor",
                  company: "Stellar Drips Wave",
                  location: "Remote",
                  date: "03/2026",
                  bullets: [
                    "Contributed across multiple repositories, implementing and refining smart contract components as well as developing front-end integrations to improve functionality and user experience.",
                    "Collaborated effectively within a distributed team environment, engaging in code reviews, debugging, and feature development, while contributing to discussions on protocol design, usability, and security.",
                    "Enhanced proficiency in open-source collaboration, version control practices, and building scalable, secure blockchain applications."
                  ]
                },
                {
                  role: "Solidity Developer Intern",
                  company: "Web3bridge Africa",
                  location: "On-site / Lagos",
                  date: "01/2026 - 05/2026",
                  bullets: [
                    "Gained hands-on experience in smart contract development using Solidity, focusing on building secure, efficient, and scalable decentralized applications, with a strong understanding of Ethereum architecture, EVM, gas optimization, and security practices.",
                    "Worked extensively with development tools such as Foundry and Hardhat for testing, deployment, debugging, and coverage analysis, applying both unit and integration testing techniques.",
                    "Integrated smart contracts with React/Next.js frontend applications, handling wallet connections, transaction flows, and contract interaction using ethers.js.",
                    "Analyzed contract attack surfaces and implemented secure patterns against common vulnerabilities (reentrancy, access control, DoS, unsafe external calls, signature replay).",
                    "Explored upgradeable contract patterns, including Diamonds (EIP-2535 Diamond Standard), proxy designs, and modular protocol architectures."
                  ]
                },
                {
                  role: "FrontEnd Engineer",
                  company: "Web3Unilag",
                  location: "Lagos",
                  date: "10/2025 - Date",
                  bullets: [
                    "Voluntarily contributed to the Web3Unilag website, building responsive, accessible, and user-centric interfaces using React, implementing reusable UI components, and applying a scalable component architecture.",
                    "Optimized page performance via lazy loading and efficient state management, improving load times across multiple devices and screen sizes.",
                    "Collaborated closely with cross-functional team members to ensure seamless data flow, high responsiveness, and reliable functionality while actively debugging and optimizing UI/UX."
                  ]
                },
                {
                  role: "Frontend Engineer Intern",
                  company: "ALX",
                  location: "Remote / Lagos",
                  date: "07/2025 - 12/2025",
                  bullets: [
                    "Built and deployed responsive web applications using React and Next.js, and developed a mobile application using React Native, implementing navigation, state management, and Supabase integration (auth & real-time database).",
                    "Engineered an Airbnb clone, building dynamic UI components, handling data fetching, managing application state, and designing modular UI components to improve scalability and reuse.",
                    "Integrated RESTful APIs and managed asynchronous data flows with async/await, actively debugging and optimizing performance to improve responsiveness and page speed across different browsers."
                  ]
                }
              ].map((exp, idx) => (
                <div key={idx} className="relative pl-6 md:pl-8 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 group-hover:border-indigo-500 group-hover:bg-indigo-500/20 transition-all duration-300 z-10" />
                  
                  {/* Card Container */}
                  <div className="p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/20 hover:bg-white dark:hover:bg-slate-900/60 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-250">
                          {exp.role}
                        </h4>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mt-0.5">
                          {exp.company} <span className="text-slate-400 dark:text-slate-500 font-medium">• {exp.location}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/80 py-1.5 px-3 rounded-full border border-slate-200/50 dark:border-slate-700/50 self-start sm:self-center">
                        <FaCalendarAlt className="text-indigo-500" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-indigo-500 mt-1.5 text-[10px] select-none">✦</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
              <FaAward className="text-indigo-500 text-2xl" />
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all duration-300 group">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaAward className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Alx Academy</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Intro to Software Engineering</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all duration-300 group">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaAward className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Alx Academy</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">ProDev Frontend</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all duration-300 group">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaAward className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Alx Academy</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Professional Foundations</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all duration-300 group">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaAward className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Web3bridge Africa</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Solidity Smart Contract Development</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Stack Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
              <FaCode className="text-indigo-500 text-2xl" />
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Technical Stack
              </h2>
            </div>

            <div className="space-y-8">
              {/* Frontend Category */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3.5">Frontend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    { name: "Next Js", icon: <SiNextdotjs className="text-slate-950 dark:text-white text-2xl" />, hover: "group-hover:text-black dark:group-hover:text-white" },
                    { name: "React Js", icon: <SiReact className="text-sky-500 animate-[spin_8s_linear_infinite] text-2xl" />, hover: "group-hover:text-sky-400" },
                    { name: "React Native", icon: <TbBrandReactNative className="text-sky-400 text-2xl" />, hover: "group-hover:text-sky-300" },
                    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-2xl" />, hover: "group-hover:text-yellow-500" },
                    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-2xl" />, hover: "group-hover:text-blue-500" },
                    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-2xl" />, hover: "group-hover:text-cyan-400" },
                    { name: "Redux", icon: <SiRedux className="text-purple-600 text-2xl" />, hover: "group-hover:text-purple-500" },
                    { name: "Expo", icon: <SiExpo className="text-slate-800 dark:text-white text-2xl" />, hover: "group-hover:text-black dark:group-hover:text-white" }
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow"
                    >
                      <div className="transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className={`text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors duration-200 ${skill.hover}`}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blockchain Category */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3.5">Blockchain</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    { name: "Solidity", icon: <SiSolidity className="text-slate-600 dark:text-slate-400 text-2xl" />, hover: "group-hover:text-slate-500" },
                    { name: "Hardhat", icon: <FaHardHat className="text-yellow-500 text-2xl" />, hover: "group-hover:text-yellow-600" },
                    { name: "Foundry", icon: <FaHammer className="text-orange-500 text-2xl" />, hover: "group-hover:text-orange-600" },
                    { name: "Ether.js", icon: <SiEthers className="text-indigo-500 text-2xl" />, hover: "group-hover:text-indigo-400" },
                    { name: "Appkit reown", icon: <SiWalletconnect className="text-blue-400 text-2xl" />, hover: "group-hover:text-blue-400" }
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow"
                    >
                      <div className="transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className={`text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors duration-200 ${skill.hover}`}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database & Tools Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3.5">Database</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { name: "Supabase", icon: <SiSupabase className="text-emerald-500 text-2xl" />, hover: "group-hover:text-emerald-450" }
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow"
                      >
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          {skill.icon}
                        </div>
                        <span className={`text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors duration-200 ${skill.hover}`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3.5">Tools</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Git", icon: <SiGit className="text-orange-600 text-2xl" />, hover: "group-hover:text-orange-500" },
                      { name: "GitHub", icon: <SiGithub className="text-slate-950 dark:text-white text-2xl" />, hover: "group-hover:text-black dark:group-hover:text-white" },
                      { name: "Vercel", icon: <SiVercel className="text-slate-950 dark:text-white text-2xl" />, hover: "group-hover:text-black dark:group-hover:text-white" }
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow"
                      >
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          {skill.icon}
                        </div>
                        <span className={`text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors duration-200 ${skill.hover}`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default HomePage;
