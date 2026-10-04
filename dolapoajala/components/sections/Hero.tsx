import Image from "next/image";
import { EMAIL } from "@/constants";

const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-topline" data-hero-detail>
        <span>
          <i className="status-dot" />
          Available for work
        </span>
        <span>Software developer · Lagos, Nigeria</span>
        <span>Portfolio / {new Date().getFullYear()}</span>
      </div>

      <h1 id="hero-title" className="hero-title" aria-label="Software developer">
        <span className="line-mask">
          <span data-hero-line>SOFTWARE</span>
        </span>
        <span className="line-mask">
          <span data-hero-line>
            DEVELOPER<span className="hero-period">.</span>
          </span>
        </span>
      </h1>

      <div className="hero-orbit" aria-hidden="true">
        <span>CLEAN CODE · CAREFUL DESIGN</span>
        <i />
      </div>

      <div className="hero-portrait" data-hero-portrait>
        <Image
          src="/images/portrait.jpg"
          alt="Dolapo Ajala, software developer"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 560px"
          className="portrait-image"
        />
      </div>

      <div className="hero-side hero-side-left" data-hero-detail>
        <span className="micro-label">Web. Mobile. On-chain.</span>
        <p>
          I build clean, intuitive
          <br />
          products that <em>just work.</em>
        </p>
        <a href="#work" className="text-link">
          Explore my work <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="hero-side hero-side-right" data-hero-detail>
        <span className="crosshair" aria-hidden="true">
          ✳
        </span>
        <p>
          From the smart contract
          <br />
          to the last pixel.
        </p>
        <span className="micro-label">Frontend / Mobile / Web3</span>
      </div>

      <div className="hero-bottom" data-hero-detail>
        <span>
          DOLAPO AJALA
          <br />
          <span className="hero-bottom-muted">Builder of interfaces, apps and protocols.</span>
        </span>
        <a href="#about" className="scroll-cue" aria-label="Scroll to about">
          <span aria-hidden="true">↓</span>
          SCROLL TO EXPLORE
        </a>
        <a href={`mailto:${EMAIL}`} className="hero-email">
          Have an idea? Let&apos;s build it ↗
        </a>
      </div>
    </section>
  );
};

export default Hero;
