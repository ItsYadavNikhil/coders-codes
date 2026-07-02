import React, { useEffect, useRef } from 'react';
import { tracks } from '../data';

export default function Tracks() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const reveals = containerRef.current.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="tracks" ref={containerRef}>
      <div className="section-max">
        <span className="section-label reveal">// our tracks</span>
        <h2 className="section-title reveal">Pick Your War.</h2>
        <div className="tracks-grid reveal">
          {tracks.map((track) => (
            <div className="track-card" key={track.id}>
              <span className="track-icon">{track.icon}</span>
              <span className="track-num">{track.id}</span>
              <h3 className="track-name" dangerouslySetInnerHTML={{ __html: track.name }} />
              <p className="track-desc">{track.desc}</p>
              <div className="track-tags">
                {track.tags.map((tag, idx) => (
                  <span className="track-tag" key={idx}>{tag}</span>
                ))}
              </div>
              <a href={track.ctaLink} className="track-cta" style={{ color: track.ctaColor }}>
                {track.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
