import Image from "next/image";

const languages = [
  { code: "FR", name: "French",  level: "Native",     highlight: "native",  diploma: undefined },
  { code: "EN", name: "English", level: "Proficient", highlight: "native",  diploma: "TOEIC 985 / 990" },
  { code: "ES", name: "Spanish", level: "Notions",    highlight: "native",  diploma: undefined },
  { code: "DE", name: "German",  level: "Notions",    highlight: "native",  diploma: undefined },
];

export default function Profile() {
  return (
    <section className="section-pad" id="intro">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Alexandre Bernard</h2>
          <span className="section-index">[ 01 / MY PROFILE ]</span>
        </div>
        <div className="intro-grid">

          {/* ── Left — portrait + languages ── */}
          <div className="portrait-frame reveal">
            <div className="portrait">
              <Image
                src="/img/me.jpg"
                alt="Alexandre Bernard"
                fill
                style={{ objectFit: "cover", objectPosition: "center top", filter: "saturate(1.02) contrast(1.02)" }}
                sizes="320px"
                priority
              />
            </div>

            <div className="lang-block">
              <p className="lang-heading">Languages</p>
              {languages.map(({ code, name, level, highlight, diploma }) => (
                <div key={code} className="lang-row">
                  <div className="lang-row-main">
                    <span className="lang-name">{name}</span>
                    <span className={`lang-level lang-level--${highlight}`}>{level}</span>
                  </div>
                  {diploma && <div className="lang-diploma">{diploma}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — intro + stats ── */}
          <div>
            <p className="intro-lead reveal">
              Hi, I&rsquo;m Alexandre. I am an aerospace engineering student with{" "}
              <span className="hl">hands-on experience designing cryogenic fluid systems</span>{" "}
              for aircraft propulsion at Safran. I also have a strong background in CAD,
              mechanical design, and multidisciplinary projects.
            </p>
          
          </div>

        </div>
      </div>
      <div className="profile-scroll-cue">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M7 13l11 11 11-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
