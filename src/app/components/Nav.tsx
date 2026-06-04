"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
      </div>
    </nav>
  );
}
