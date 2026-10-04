import { CAPABILITIES, PROJECTSAMPLE } from "@/constants";
import { Capability } from "@/interfaces";

const CapabilityArt: React.FC<{ art: Capability["art"] }> = ({ art }) => {
  switch (art) {
    case "frontend":
      return (
        <svg viewBox="0 0 240 200" fill="none" aria-hidden="true" className="capability-art">
          <g stroke="currentColor" strokeWidth="1.5">
            <rect x="23" y="28" width="193" height="139" rx="7" />
            <path d="M23 52h193M40 40h3m9 0h3m9 0h3M42 73h73m-73 9h48M42 125h85m-85 9h55" />
            <rect x="143" y="71" width="53" height="73" rx="3" fill="currentColor" opacity=".13" />
            <path d="m110 94 1 56 14-16 17 24 10-7-17-24 24-4-49-29Z" fill="var(--panel-paper)" />
          </g>
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 240 200" fill="none" aria-hidden="true" className="capability-art">
          <g stroke="currentColor" strokeWidth="1.5">
            <rect x="80" y="12" width="84" height="176" rx="14" />
            <path d="M108 24h28" strokeLinecap="round" />
            <rect x="92" y="40" width="60" height="38" rx="4" fill="currentColor" opacity=".13" />
            <path d="M92 92h60m-60 12h40m-40 24h60m-60 12h32" />
            <circle cx="122" cy="172" r="5" />
            <path d="M40 70c-12 18-12 42 0 60M200 70c12 18 12 42 0 60" strokeDasharray="3 5" />
          </g>
        </svg>
      );
    case "web3":
      return (
        <svg viewBox="0 0 240 200" fill="none" aria-hidden="true" className="capability-art">
          <g stroke="currentColor" strokeWidth="1.2">
            <ellipse cx="120" cy="100" rx="87" ry="38" transform="rotate(-30 120 100)" />
            <ellipse cx="120" cy="100" rx="87" ry="38" transform="rotate(30 120 100)" />
            <path d="m120 23 40 77-40 26-40-26 40-77Z M80 111l40 63 40-63-40 26-40-26Z" fill="var(--panel-paper)" />
            <path d="m120 23 0 103m-40-26 40-13 40 13m-40 37v37" />
            <circle cx="199" cy="64" r="4" fill="currentColor" />
          </g>
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 240 200" fill="none" aria-hidden="true" className="capability-art">
          <g stroke="currentColor" strokeWidth="1.2">
            <path d="M35 60 120 16l85 44-85 45-85-45Z M35 100l85 45 85-45 M35 140l85 45 85-45" />
            <path d="M35 60v80m85-35v80m85-125v80" strokeDasharray="3 5" />
            <path d="m35 100 85-44 85 44-85 45-85-45Z" />
            <circle cx="120" cy="105" r="6" fill="currentColor" />
          </g>
        </svg>
      );
  }
};

const About: React.FC = () => {
  return (
    <section id="about" className="section-shell about-section" aria-labelledby="about-title">
      <div className="section-kicker">
        <span>(01 — MORE THAN A JOB TITLE)</span>
        <span>WEB, MOBILE, ON-CHAIN.</span>
      </div>

      <div className="about-intro">
        <h2 id="about-title" className="about-headline" data-reveal>
          <span className="line-mask">
            <span>DEVELOPER.</span>
          </span>
          <span className="line-mask">
            <span>
              WITH <em>RANGE.</em>
            </span>
          </span>
        </h2>
        <div className="about-copy" data-reveal>
          <span className="micro-label">HEY, I’M DOLAPO.</span>
          <p>
            I build clean, intuitive, and interactive products across web, mobile, and on-chain. React, Next.js,
            React Native, and TypeScript on the front, backed by REST APIs on Node.js, Express, and PostgreSQL.
          </p>
          <p>
            On the blockchain side, I design and ship secure Solidity contracts with Foundry and Hardhat, trained at
            Web3Bridge. Currently expanding into Rust and the intersection of AI and Web3.
          </p>
          <a href="#experience" className="text-link">
            See where I’ve worked <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>

      <div className="capability-grid">
        {CAPABILITIES.map((cap, i) => (
          <article key={cap.title} className={`capability-panel capability-panel-${i}`} data-reveal>
            <div className="capability-surface">
              <div className="panel-top">
                <span>
                  0{i + 1} / {cap.kicker}
                </span>
                <span aria-hidden="true">↗</span>
              </div>
              <CapabilityArt art={cap.art} />
              <div className="panel-body">
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
                <ul className="tech-tags">
                  {cap.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="about-strip">
        <span>
          <strong>{String(PROJECTSAMPLE.length).padStart(2, "0")}</strong> selected projects
        </span>
        <span>INTERFACES. APPS. PROTOCOLS.</span>
        <span>Now exploring Rust + AI ↗</span>
      </div>
    </section>
  );
};

export default About;
