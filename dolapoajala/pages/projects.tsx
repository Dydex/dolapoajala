import Head from "next/head";
import Link from "next/link";
import Card from "@/components/common/Card";
import { PROJECTSAMPLE } from "@/constants";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projects — Dolapo Ajala</title>
      </Head>
      <div className="section-shell projects-page">
        <div className="section-kicker">
          <span>(THE COMPLETE INDEX)</span>
          <span>{String(PROJECTSAMPLE.length).padStart(2, "0")} PROJECTS / ALWAYS BUILDING</span>
        </div>

        <div className="projects-page-heading">
          <h1 className="display-heading">
            Everything I’ve
            <br />
            <em>put out there.</em>
          </h1>
          <Link href="/" className="text-link">
            Back to home <span aria-hidden="true">↖</span>
          </Link>
        </div>

        <div className="projects-grid">
          {PROJECTSAMPLE.map((project, i) => (
            <div key={project.name} data-reveal>
              <Card {...project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
