import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="grid-bg">
      <div className="hero-inner">
        <span className="hero-label">▶ Elite Dev Community · Est. 2026</span>
        <h1 className="hero-h1">
          <span className="glitch" data-text="CODE.">CODE.</span><br />
          <span className="accent">BUILD.</span><br />
          <span className="glitch" data-text="DOMINATE.">DOMINATE.</span>
        </h1>
        <p className="hero-sub">
          Not a bootcamp. Not a course.<br />
          A <span>war room</span> for developers who refuse to settle.<br />
          DSA · Full-Stack · AI/ML — all under one roof.
        </p>
        <div className="hero-ctas">
          <a href="#cta" className="btn-primary">Apply Now →</a>
          <a href="#tracks" className="btn-ghost">Explore Tracks</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">1,200+</span>
            <span className="hero-stat-label">Active Members</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">300+</span>
            <span className="hero-stat-label">Problems Solved</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">3</span>
            <span className="hero-stat-label">Expert Tracks</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">24h</span>
            <span className="hero-stat-label">Response Time</span>
          </div>
        </div>
      </div>
      <div className="corner-tag">CODERS_CODES // V1.0 // 2026</div>
    </section>
  );
}
