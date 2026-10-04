import Link from "next/link";
import { EMAIL, SOCIALS } from "@/constants";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer section-shell" aria-label="Site footer">
      <div className="footer-top">
        <div className="footer-intro">
          <span className="footer-label">THANKS FOR STOPPING BY</span>
          <p>
            Clean code.
            <br />
            <em>Careful details.</em>
          </p>
          <span className="footer-location">SOFTWARE DEVELOPER · LAGOS, NIGERIA</span>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <span className="footer-label">TAKE ANOTHER LOOK</span>
          <Link href="/#work">
            Selected work <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/projects">
            All projects <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/#experience">
            Experience <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/#contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <div className="footer-socials">
          <span className="footer-label">ELSEWHERE ON THE INTERNET</span>
          {SOCIALS.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a href={`mailto:${EMAIL}`}>
            Email <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} DOLAPO AJALA</span>
        <span>WEB. MOBILE. ON-CHAIN.</span>
        <a href="#main" className="back-top">
          Back to the top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
