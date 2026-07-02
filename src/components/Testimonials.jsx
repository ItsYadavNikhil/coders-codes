import React, { useEffect, useRef } from 'react';
import { testimonials } from '../data';

export default function Testimonials() {
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
    <section id="testimonials" ref={containerRef}>
      <div className="section-max">
        <span className="section-label reveal">// community signals</span>
        <h2 className="section-title reveal">From the<br />War Room</h2>
        <div className="testi-grid" style={{ marginTop: '60px' }}>
          {testimonials.map((testi, idx) => (
            <div className="testi-card reveal" key={idx}>
              <p className="testi-quote">{testi.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar">{testi.initials}</div>
                <div>
                  <div className="testi-name">{testi.name}</div>
                  <div className="testi-role">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
