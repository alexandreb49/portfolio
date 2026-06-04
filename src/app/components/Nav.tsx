"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div />

        <div className="links">
          <Link href="/#intro">[ 01 ] Profile</Link>
          <Link href="/#career">[ 02 ] Career</Link>
          <Link href="/#education">[ 03 ] Education</Link>
          <Link href="/#projects">[ 04 ] Projects</Link>
          <Link href="/#skills">[ 05 ] Skills</Link>
        </div>

        <div className="nav-right">
          <Link className="cta" href="/#contact">
            Get in touch ↗
          </Link>
          <button
            className={`nav-burger${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-overlay" onClick={close}>
          <nav className="nav-mobile-menu" onClick={(e) => e.stopPropagation()}>
            <Link href="/#intro" onClick={close}>[ 01 ] Profile</Link>
            <Link href="/#career" onClick={close}>[ 02 ] Career</Link>
            <Link href="/#education" onClick={close}>[ 03 ] Education</Link>
            <Link href="/#projects" onClick={close}>[ 04 ] Projects</Link>
            <Link href="/#skills" onClick={close}>[ 05 ] Skills</Link>
            <Link href="/#contact" className="btn btn-primary" onClick={close}>
              Get in touch ↗
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
