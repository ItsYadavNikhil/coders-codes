import React from 'react';

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        <span className="marquee-item">★ DSA MASTERY</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">FULL-STACK ENGINEERING</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">AI/ML PIPELINES</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">OPEN SOURCE</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">REAL PROJECTS</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">HACKATHONS</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">ELITE COMMUNITY</span>
        <span className="marquee-item marquee-dot">//</span>
        {/* duplicate for seamless loop */}
        <span className="marquee-item">★ DSA MASTERY</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">FULL-STACK ENGINEERING</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">AI/ML PIPELINES</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">OPEN SOURCE</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">REAL PROJECTS</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">HACKATHONS</span>
        <span className="marquee-item marquee-dot">//</span>
        <span className="marquee-item">ELITE COMMUNITY</span>
        <span className="marquee-item marquee-dot">//</span>
      </div>
    </div>
  );
}
