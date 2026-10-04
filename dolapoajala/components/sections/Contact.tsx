import { useState } from "react";
import { EMAIL } from "@/constants";

const BUILD_OPTIONS = ["A website", "A mobile app", "A Web3 project"];
const SCOPES = ["A focused build", "A few connected features", "A full product"];
const FOCUS_OPTIONS = ["Frontend & UI", "Mobile (React Native)", "Smart contracts", "Full-stack (API + UI)"];

const Contact: React.FC = () => {
  const [building, setBuilding] = useState(BUILD_OPTIONS[0]);
  const [scope, setScope] = useState(1);
  const [focus, setFocus] = useState(FOCUS_OPTIONS[0]);

  const summary = `${building}. ${SCOPES[scope]}. ${focus}.`;
  const subject = `Let's build: ${building.toLowerCase()}`;
  const body = [
    "Hi Dolapo,",
    "",
    "I'd like to discuss a project.",
    "",
    `Project: ${building}`,
    `Scope: ${SCOPES[scope]}`,
    `Focus: ${focus}`,
    "",
    "A little more about the idea:",
    "",
    "My ideal timeline:",
    "",
    "Thanks!",
  ].join("\n");
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="section-shell">
        <div className="section-kicker">
          <span>(05 — SOMETHING GOOD STARTS HERE)</span>
          <span>
            <i className="status-dot" />
            OPEN TO CONVERSATIONS
          </span>
        </div>

        <div className="contact-heading">
          <h2 id="contact-title" data-reveal>
            <span className="line-mask">
              <span>Got an idea</span>
            </span>
            <span className="line-mask">
              <em>worth building?</em>
            </span>
          </h2>
          <a href={`mailto:${EMAIL}`} className="contact-orbit" aria-label="Email Dolapo">
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="project-brief" data-reveal>
          <div className="brief-heading">
            <span className="micro-label">LET’S FIND A STARTING POINT</span>
            <span className="micro-label">YOUR NEXT GOOD IDEA ↙</span>
          </div>

          <div className="brief-controls">
            <fieldset>
              <legend>01 / I’m building</legend>
              <div className="brief-options">
                {BUILD_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={building === option}
                    onClick={() => setBuilding(option)}
                  >
                    {option}
                    <span aria-hidden="true">{building === option ? "↗" : "+"}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="brief-scope">
              <label htmlFor="project-scope">02 / The scope</label>
              <p>{SCOPES[scope]}</p>
              <input
                id="project-scope"
                type="range"
                min={0}
                max={SCOPES.length - 1}
                step={1}
                value={scope}
                aria-valuetext={SCOPES[scope]}
                onChange={(e) => setScope(Number(e.target.value))}
              />
              <div className="range-labels">
                <span>FOCUSED</span>
                <span>FULL EXPERIENCE</span>
              </div>
            </div>

            <div className="brief-focus">
              <label htmlFor="project-priority">03 / Where you need me</label>
              <select id="project-priority" value={focus} onChange={(e) => setFocus(e.target.value)}>
                {FOCUS_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <p>From a rough idea to the finer details, let’s figure it out together.</p>
            </div>
          </div>

          <div className="brief-result">
            <p aria-live="polite">{summary}</p>
            <a href={mailto} className="brief-send">
              Let&apos;s build this <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="brief-note">
            Opens your email app with a starting brief. Add your details and send when you’re ready.
          </p>
        </div>

        <div className="contact-bottom">
          <a href={`mailto:${EMAIL}`}>{EMAIL} ↗</a>
          <span>Freelance &amp; full-time opportunities</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
