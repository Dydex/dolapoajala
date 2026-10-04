import { CERTIFICATIONS, STACK } from "@/constants";

const Toolkit: React.FC = () => {
  return (
    <section id="toolkit" className="section-shell toolkit-section" aria-labelledby="toolkit-title">
      <div className="toolkit-heading">
        <div>
          <span className="micro-label">(04 — THE TOOLKIT)</span>
          <h2 id="toolkit-title" className="display-heading" data-reveal>
            Tools I
            <br />
            <em>reach for.</em>
          </h2>
        </div>
        <div className="toolkit-intro">
          <p>
            Practiced daily, certified where it counts.
            <br />
            Always adding to the list.
          </p>
          <a className="text-link" href="#contact">
            Need one of these? <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="stack-list">
        {STACK.map((group, i) => (
          <div key={group.label} className="stack-row" data-reveal>
            <span className="project-number">{String(i + 1).padStart(2, "0")}</span>
            <h3>{group.label}</h3>
            <ul className="stack-tools">
              {group.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="section-kicker cert-heading">
        <span>CERTIFICATIONS</span>
        <span>{String(CERTIFICATIONS.length).padStart(2, "0")} AND COUNTING</span>
      </div>

      <div className="cert-grid">
        {CERTIFICATIONS.map((cert, i) => (
          <article key={cert.title} className="cert-card" data-reveal>
            <div className="cert-cover">
              <div className="cert-meta">
                <span>CERTIFICATE / 0{i + 1}</span>
                <span>✳</span>
              </div>
              <svg viewBox="0 0 200 120" className="cert-art" fill="none" aria-hidden="true">
                <g stroke="currentColor" strokeWidth="1.5">
                  <circle cx="100" cy="52" r="38" />
                  <circle cx="100" cy="52" r="28" strokeDasharray="2 6" />
                  <path d="m84 52 11 11 22-22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m78 84-10 32 18-8 10 12 4-28m24-8 10 32-18-8-10 12-4-28" />
                </g>
              </svg>
              <h3>{cert.title}</h3>
              <div className="cert-foot">
                <span>ISSUED BY {cert.issuer}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Toolkit;
