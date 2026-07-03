import React, { useEffect, useRef } from 'react';

export default function Cta() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals || reveals.length === 0) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section id="cta" ref={sectionRef}>
      <div className="cta-bg"></div>
      <div className="cta-inner">
        <span className="section-label reveal">// ready?</span>
        <h2 className="cta-h2 reveal">
          LEVEL<br />THE <span>F*CK</span><br />UP.
        </h2>
        <div className="reveal">
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input className="cta-input" type="email" placeholder="your@email.com" autoComplete="off" />
            <button className="cta-submit">Request Access →</button>
          </form>
          <p className="cta-fine">// No spam. Just signal. Reviewed within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}
