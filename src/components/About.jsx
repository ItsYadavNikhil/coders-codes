import React, { useEffect, useRef } from 'react';

export default function About() {
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
    <section id="about" ref={containerRef}>
      <div className="section-max">
        <span className="section-label reveal">// about us</span>
        <h2 className="section-title reveal">Who We Are</h2>
        <div className="about-grid">
          <div className="about-statement reveal">
            Not a bootcamp.<br />Not a course.<br />A <em>war room</em> for devs who build real things, ship fast, and never stop growing.
          </div>
          <div className="about-stats reveal">
            <div className="about-stat-box">
              <span className="about-stat-n">1.2K</span>
              <span className="about-stat-t">Members worldwide</span>
            </div>
            <div className="about-stat-box">
              <span className="about-stat-n">300+</span>
              <span className="about-stat-t">Curated problems</span>
            </div>
            <div className="about-stat-box">
              <span className="about-stat-n">3</span>
              <span className="about-stat-t">Core tracks</span>
            </div>
            <div className="about-stat-box">
              <span className="about-stat-n">150+</span>
              <span className="about-stat-t">Projects shipped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
