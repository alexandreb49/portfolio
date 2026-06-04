export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-inner">
        <div className="site-footer-brand">
          <div className="site-footer-name">Alexandre Bernard</div>
          <div className="site-footer-title">Aerospace Engineer · MSc</div>
        </div>

        <div className="site-footer-links">
          <a href="#intro">Profile</a>
          <a href="#career">Career</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>

        <div className="site-footer-copy">© {new Date().getFullYear()} Alexandre Bernard</div>
      </div>
    </footer>
  );
}
