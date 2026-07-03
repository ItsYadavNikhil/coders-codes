import React, { useEffect, useRef } from 'react';

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const counters = containerRef.current.querySelectorAll('.stat-num[data-target]');
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = +el.getAttribute('data-target');
          const suffix = target >= 1000 ? '+' : (target === 48 ? 'h' : '+');
          let start = 0;
          const end = target >= 1000 ? target / 1000 : target;
          const step = end / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              el.textContent = (target >= 1000 ? end.toFixed(1) + 'K' : end) + suffix;
              clearInterval(timer);
            } else {
              el.textContent = (target >= 1000 ? start.toFixed(1) + 'K' : Math.floor(start)) + suffix;
            }
          }, 16);
          countIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => countIO.observe(el));
    return () => countIO.disconnect();
  }, []);

  return (
    <div id="stats-bar" ref={containerRef}>
      <div className="stats-inner">
        <div className="stat-cell">
          <span className="stat-num" data-target="1200">0</span>
          <span className="stat-lbl">Members &amp; Growing</span>
        </div>
        <div className="stat-cell">
          <span className="stat-num" data-target="300">0</span>
          <span className="stat-lbl">Curated Problems</span>
        </div>
        <div className="stat-cell">
          <span className="stat-num" data-target="150">0</span>
          <span className="stat-lbl">Projects Shipped</span>
        </div>
        <div className="stat-cell">
          <span className="stat-num" data-target="24">0</span>
          <span className="stat-lbl">Hours Avg Response</span>
        </div>
      </div>
    </div>
  );
}
