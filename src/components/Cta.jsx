// Old Code

// import React, { useEffect, useRef } from 'react';

// export default function Cta() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const reveals = sectionRef.current?.querySelectorAll('.reveal');
//     if (!reveals || reveals.length === 0) return;

//     const io = new IntersectionObserver((entries) => {
//       entries.forEach(e => {
//         if (e.isIntersecting) {
//           e.target.classList.add('visible');
//           io.unobserve(e.target);
//         }
//       });
//     }, { threshold: 0.1 });

//     reveals.forEach(el => io.observe(el));

//     return () => {
//       io.disconnect();
//     };
//   }, []);

//   return (
//     <section id="cta" ref={sectionRef}>
//       <div className="cta-bg"></div>
//       <div className="cta-inner">
//         <span className="section-label reveal">// ready?</span>
//         <h2 className="cta-h2 reveal">
//           LEVEL<br />THE <span>F*CK</span><br />UP.
//         </h2>
//         <div className="reveal">
//           <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
//             <input className="cta-input" type="email" placeholder="your@email.com" autoComplete="off" />
//             <button className="cta-submit">Request Access →</button>
//           </form>
//           <p className="cta-fine">// No spam. Just signal. Reviewed within 24 hours.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// New Code

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cta() {
  const sectionRef = useRef(null);
  
  // State for email and hook for routing
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Custom scroll reveal animation (Untouched)
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

  // Form submission handler
  const handleApply = (e) => {
    e.preventDefault();
    if (email.trim() === '') return;
    
    // Routing to /apply page and passing the email in background state
    navigate('/apply', { state: { prefilledEmail: email } });
  };

  return (
    <section id="cta" ref={sectionRef}>
      <div className="cta-bg"></div>
      <div className="cta-inner">
        <span className="section-label reveal">// ready?</span>
        <h2 className="cta-h2 reveal">
          LEVEL<br />THE <span>F*CK</span><br />UP.
        </h2>
        <div className="reveal">
          <form className="cta-form" onSubmit={handleApply}>
            <input 
              className="cta-input" 
              type="email" 
              placeholder="your@email.com" 
              autoComplete="off" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="cta-submit">Request Access →</button>
          </form>
          <p className="cta-fine">// No spam. Just signal. Reviewed within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}