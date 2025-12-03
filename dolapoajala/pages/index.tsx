import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiExpo,
} from "react-icons/si";

import Image from "next/image";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import { PROJECTSAMPLE } from "@/constants";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === PROJECTSAMPLE.length - 1 ? 0 : prev + 1));
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex-col md:flex pt-26">
        <div className="flex flex-col items-center md:h-screen md:top-30 md:left-0 md:fixed w-full md:w-[40%] gap-2">
          <div>
            <Image
              src="/images/avatar.jpg"
              alt="avatar"
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
          </div>
          <div>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start md:ml-[40%] w-full md:w-[60%] py-4 overflow-y-auto ">
          <div className="w-[95%] md:w-[80%]">
            <div className="flex flex-col items-center md:items-start ">
              <h1 className="text-4xl">Dolapo Ajala</h1>
              <h2 className="text-2xl">Frontend Developer</h2>
              <nav className="mt-6">
                <ul className="flex gap-4">
                  <a
                    className="flex items-center gap-2 py-1 px-2 text-sm border border-gray-700 rounded-full"
                    href="https://x.com/dp7954"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <FaTwitter size={18} />
                    <p className="hidden md:block">X</p>
                  </a>
                  <a
                    className="flex items-center gap-2 py-1 px-2 text-sm border border-gray-700  rounded-full"
                    href="https://github.com/Dydex"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <FaGithub size={18} />
                    <p className="hidden md:block">GitHub</p>
                  </a>
                  <a
                    className="flex items-center gap-2 py-1 px-2 text-sm border border-gray-700 rounded-full"
                    href="https://www.linkedin.com/in/ajala-dolapo-756394281/"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <FaLinkedin size={18} />
                    <p className="hidden md:block">LinkedIn</p>
                  </a>
                  <a
                    className="flex items-center gap-2 py-1 px-2 text-sm border border-gray-700  rounded-full"
                    href="https://gmail.google.com/gmail/?view=cm&fs=1&to=supremeajala@gmail.com"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <FaEnvelope size={18} />
                    <p className="hidden md:block">Gmail</p>
                  </a>
                </ul>
              </nav>
            </div>

            <p className=" mt-10">
              Dolapo is a frontend developer who loves building clean,
              intuitive, and interactive digital experiences. He blends design
              and technology to turn complex ideas into elegant, user-friendly
              interfaces.
            </p>

            <h1 className="text-4xl mt-14">Recent Projects</h1>

            <div>
              <Card
                title={PROJECTSAMPLE[index].title}
                description={PROJECTSAMPLE[index].description}
                image={PROJECTSAMPLE[index].image}
              />
            </div>

            <div className="flex justify-center mt-10 ">
              <Button
                className="text-black bg-white py-2 px-4 rounded-full"
                label="View all projects"
                onClick={() => {
                  // Show Project
                }}
              />
            </div>

            <div className=" mt-8">
              <div className="flex justify-center md:justify-start">
                <h1 className="text-4xl">Certifications</h1>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div>
                  <h6 className="text-xl">Alx Acacdemy</h6>
                  <p className="text-sm">Intro to Software Engineering</p>
                </div>

                <div>
                  <h6 className="text-xl">Alx Academy</h6>
                  <p className="text-sm">ProDev Frontend </p>
                </div>

                <div>
                  <h6 className="text-xl">Alx Academy</h6>
                  <p className="text-sm">Professional Foundations</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-center md:justify-start">
                <h1 className="text-4xl ">My Tools </h1>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 mt-6">
                <div className="flex items-center gap-2">
                  <SiNextdotjs className="text-black dark:text-white text-4xl" />
                  <p className="text-lg">Next Js</p>
                </div>

                <div className="flex items-center gap-2">
                  <SiReact className="text-blue-500 animate-spin-slow text-4xl" />
                  <p className="text-lg">React Js</p>
                </div>

                <div className="flex items-center gap-2">
                  <SiJavascript className="text-yellow-400 text-4xl" />
                  <p className="text-lg">Javascript</p>
                </div>

                <div className="flex items-center gap-2">
                  <SiTypescript className="text-blue-600 text-4xl" />
                  <p className="text-lg">Typescript</p>
                </div>

                <div className="flex items-center gap-2">
                  <SiExpo className="text-black-600 text-4xl" />
                  <p className="text-lg">Expo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
