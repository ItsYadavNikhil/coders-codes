import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-logo">{"</> CODERS_CODES"}</div>
          <p className="footer-tagline">
            An elite developer community for those who build first and ask questions later. DSA · Full-Stack · AI/ML.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Tracks</div>
          <ul className="footer-links">
            <li><a href="#">DSA Mastery</a></li>
            <li><a href="#">Full-Stack</a></li>
            <li><a href="#">AI/ML Systems</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Community</div>
          <ul className="footer-links">
            <li><a href="https://discord.gg/E8TN26MPy">Discord Server</a></li>
            <li><a href="#">Weekly Sessions</a></li>
            <li><a href="https://coders.codes/">Hackathons</a></li>
            <li><a href="https://winner.coders.codes/">Leaderboard</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Links</div>
          <ul className="footer-links">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Apply Now</a></li>
            <li><a href="#">Manifesto</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 CODERS_CODES // ALL RIGHTS RESERVED // BUILD OR DIE</span>
        <div className="footer-socials">
          <a href="https://github.com/ItsYadavNikhil/coders-codes/" className="social-pill">GitHub</a>
          <a href="https://discord.gg/E8TN26MPy" className="social-pill">Discord</a>
          <a href="#" className="social-pill">LinkedIn</a>
          <a href="#" className="social-pill">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
