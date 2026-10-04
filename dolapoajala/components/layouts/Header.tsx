import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Monogram from "@/components/common/Monogram";
import ThemeToggle from "@/components/common/ThemeToggle";
import { NAV_LINKS } from "@/constants";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("hashChangeStart", close);
    router.events.on("routeChangeStart", close);
    return () => {
      router.events.off("hashChangeStart", close);
      router.events.off("routeChangeStart", close);
    };
  }, [router.events]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="Dolapo Ajala — home">
          <Monogram />
          <span>
            dolapo<span className="wordmark-dot">.</span>
            <small>AJALA</small>
          </span>
        </Link>

        <div className="desktop-links">
          {NAV_LINKS.map((link, i) => (
            <Link key={link.href} className="nav-link" href={link.href}>
              <sup>0{i + 1}</sup>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <Link className="nav-contact" href="/#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">+</span>
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" className="mobile-navigation" hidden={!open}>
        {[...NAV_LINKS, { label: "Let’s talk", href: "/#contact" }].map((link, i) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            <span>0{i + 1}</span>
            {link.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
