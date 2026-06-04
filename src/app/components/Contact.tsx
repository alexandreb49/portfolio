export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-inner">
        <span className="eyebrow reveal">Let&rsquo;s talk · [ 02 ]</span>
        <h2 className="reveal" style={{ marginTop: 18 }}>
          Open to an
          <br />
          internship
          <br />
          <a className="mailto" href="mailto:alexandre.bernard.chaillou@gmail.com">
            — Get in touch ↗
          </a>
        </h2>
        <div className="contact-row reveal">
          <div className="contact-links">
            <a className="chip" href="mailto:alexandre.bernard.chaillou@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Email
            </a>
            <a className="chip" href="https://www.linkedin.com/in/alexandre-bernard-chaillou/" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21H9z" />
              </svg>
              LinkedIn
            </a>
            <a className="chip" href="/cv/ALEXANDRE BERNARD CV.pdf" download="Alexandre_Bernard_CV.pdf">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
