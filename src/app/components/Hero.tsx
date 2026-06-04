export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-vignette" />

      <div className="hud hud-tr">
        <div><span className="k">STATUS</span> · OPEN TO WORK</div>
        <div>INTERNSHIP — 6 MONTHS</div>
        <div>WINDOW · SEP–OCT 2026</div>
      </div>
      <div className="hud hud-br">
        <div><span className="k">VEHICLE</span> · CONCEPT-01</div>
        <div>STRUCT / PROP / FLUIDS</div>
        <div>ALL SYSTEMS NOMINAL</div>
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Aerospace Engineer · MSc</span>
          <h1>
            <span className="lo">Designing for</span>
            <span className="accent-text">flight &amp; orbit.</span>
          </h1>
          <p className="role">
            Structures &amp; mechanical · propulsion · <b>cryogenic fluid systems</b>
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="/cv/ALEXANDRE BERNARD CV.pdf" download="Alexandre_Bernard_CV.pdf">
              Download CV <span className="arr">↓</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hud hud-bl">
        <div className="scrollcue">
          <div className="bar" />
        </div>
        <div>SCROLL · 44.84°N 0.58°W — BORDEAUX</div>
      </div>
    </header>
  );
}
