import React, { useEffect, useRef } from 'react';

export default function HowItWorks() {
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
    <section id="how" ref={containerRef}>
      <div className="section-max">
        <span className="section-label reveal">// the process</span>
        <h2 className="section-title reveal">How It Works</h2>
        <div className="steps-row">
          <div className="step reveal">
            <span className="step-num">01</span>
            <div className="step-icon">⚡</div>
            <h3 className="step-title">Apply & Get Vetted</h3>
            <p className="step-desc">
              No tourists. We review every application. Tell us where you are, where you're going. Serious devs only — no judgment on level, just on intent.
            </p>
          </div>
          <div className="step reveal">
            <span className="step-num">02</span>
            <div className="step-icon" style={{ background: 'var(--magenta)' }}>🛠</div>
            <h3 className="step-title">Pick Your Track</h3>
            <p className="step-desc">
              Choose DSA, Full-Stack, or AI/ML. Get access to structured content, live sessions, peer accountability groups, and a curated problem set.
            </p>
          </div>
          <div className="step reveal">
            <span className="step-num">03</span>
            <div className="step-icon" style={{ background: 'var(--gold)', color: 'var(--black)' }}>🚀</div>
            <h3 className="step-title">Ship & Dominate</h3>
            <p className="step-desc">
              Collaborate on real builds. Compete in hackathons. Land offers. Every member who ships a project gets featured. No fluff — just proof of work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
