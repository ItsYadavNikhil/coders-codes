import React, { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        nav.style.borderBottomColor = 'var(--green)';
        nav.style.background = window.scrollY > 50 ? 'rgba(8,8,8,0.97)' : 'var(--black)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a href="#" className="nav-logo">
        &lt;/&gt;&nbsp;CODERS_CODES<span className="cursor"></span>
      </a>
      <ul className="nav-links">
        <li><a href="#tracks">Tracks</a></li>
        <li><a href="#how">Process</a></li>
        <li><a href="#testimonials">Community</a></li>
        <li><a href="#cta" className="nav-cta">Sign In →</a></li>
      </ul>
    </nav>
  );
}
