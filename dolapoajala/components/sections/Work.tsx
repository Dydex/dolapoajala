import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Card from "@/components/common/Card";
import { PROJECTSAMPLE } from "@/constants";

const FEATURED = PROJECTSAMPLE.filter((p) => p.featured);

const Work: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setProgress(max > 0 ? track.scrollLeft / max : 1);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(".featured-project");
    if (!track || !card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + 28), behavior: "smooth" });
  };

  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="section-shell work-heading">
        <div>
          <span className="micro-label">(02 — SELECTED WORK)</span>
          <h2 id="work-title" className="display-heading" data-reveal>
            Things I’ve <em>shipped.</em>
          </h2>
        </div>
        <div className="gallery-hint">
          <span>A FEW THINGS I’VE PUT INTO THE WORLD</span>
          <div className="gallery-controls">
            <button type="button" onClick={() => scrollByCard(-1)} disabled={progress <= 0.01} aria-label="Previous project">
              ←
            </button>
            <button type="button" onClick={() => scrollByCard(1)} disabled={progress >= 0.99} aria-label="Next project">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="gallery-track" ref={trackRef}>
        {FEATURED.map((project, i) => (
          <Card key={project.name} {...project} index={i} />
        ))}
      </div>

      <div className="gallery-progress section-shell" aria-hidden="true">
        <span>01</span>
        <div>
          <i style={{ transform: `scaleX(${Math.max(progress, 1 / FEATURED.length)})` }} />
        </div>
        <span>{String(FEATURED.length).padStart(2, "0")}</span>
      </div>

      <div className="section-shell project-index">
        <div className="section-kicker">
          <span>THE COMPLETE PROJECT INDEX</span>
          <span>{String(PROJECTSAMPLE.length).padStart(2, "0")} PROJECTS / ALWAYS BUILDING</span>
        </div>
        {PROJECTSAMPLE.map((project, i) => (
          <a key={project.name} className="project-row" href={project.url} target="_blank" rel="noopener noreferrer">
            <span className="project-number">{String(i + 1).padStart(2, "0")}</span>
            <h3>{project.name}</h3>
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.platform}</span>
            <span className="project-row-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
        <div className="project-index-footer">
          <Link href="/projects" className="text-link">
            Every project, in detail <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
