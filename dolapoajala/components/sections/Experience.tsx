import { useEffect, useRef, useState } from "react";
import Monogram from "@/components/common/Monogram";
import { EXPERIENCE } from "@/constants";

const DIAL_CIRCUMFERENCE = 917.345;

const Experience: React.FC = () => {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<(HTMLElement | null)[]>([]);

  // The step crossing the middle of the viewport drives the sticky dial.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.step));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const fraction = (active + 1) / EXPERIENCE.length;

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="section-shell">
        <div className="section-kicker">
          <span>(03 — THE ROAD SO FAR)</span>
          <span>LEARNING BY SHIPPING</span>
        </div>

        <h2 id="experience-title" className="statement-heading" data-reveal>
          <span className="line-mask">
            <span>Real teams.</span>
          </span>
          <span className="line-mask statement-indent">
            <span>
              Real <em>users.</em>
            </span>
          </span>
          <span className="line-mask">
            <span>
              Code that <em>ships.</em>
            </span>
          </span>
        </h2>

        <div className="process-story">
          <div className="process-sticky" aria-hidden="true">
            <span className="micro-label">FROM FIRST COMMIT TO PRODUCTION.</span>
            <div className="process-dial">
              <svg viewBox="0 0 320 320" fill="none" className="dial-rings">
                <circle cx="160" cy="160" r="146" stroke="currentColor" strokeOpacity=".15" />
                <circle
                  cx="160"
                  cy="160"
                  r="146"
                  stroke="var(--brand)"
                  strokeWidth="2"
                  className="dial-progress"
                  style={{ strokeDashoffset: DIAL_CIRCUMFERENCE * (1 - fraction) }}
                />
                <circle cx="160" cy="160" r="118" stroke="currentColor" strokeOpacity=".15" strokeDasharray="1 8" />
                <g className="dial-orbit" style={{ transform: `rotate(${fraction * 360}deg)` }}>
                  <circle cx="160" cy="14" r="6" fill="var(--brand)" />
                </g>
              </svg>
              <div className="dial-center">
                <Monogram />
                <div className="dial-numbers">
                  {EXPERIENCE.map((_, i) => (
                    <span key={i} className={i === active ? "is-active" : i < active ? "is-before" : undefined}>
                      0{i + 1}
                    </span>
                  ))}
                </div>
                <span className="micro-label">ROLE {active + 1} OF {EXPERIENCE.length}</span>
              </div>
            </div>
            <span className="process-caption">
              {EXPERIENCE.length} roles.
              <br />
              <em>One direction.</em>
            </span>
          </div>

          <div className="process-steps">
            {EXPERIENCE.map((exp, i) => (
              <article
                key={exp.role + exp.company}
                className="process-step"
                data-step={i}
                ref={(el) => {
                  stepsRef.current[i] = el;
                }}
              >
                <div className="process-step-top">
                  <span>
                    0{i + 1} / {exp.date}
                  </span>
                  <span aria-hidden="true">↘</span>
                </div>
                <h3>{exp.role}</h3>
                <p className="process-company">
                  {exp.company} <span>· {exp.location}</span>
                </p>
                <ul>
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
