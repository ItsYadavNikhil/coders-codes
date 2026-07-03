import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


function ApplyForm() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top (0,0) on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form state structure
  const [formData, setFormData] = useState({
    name: '',
    email: location.state?.prefilledEmail || '',
    mobile: '',
    github: '',
    leetcode: ''
  });

  // Track focused fields for dynamic Neo-Brutalist border colors
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application Form Data:', formData);
    alert(
      `APPLICATION SUBMITTED SUCCESSFUL!\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Mobile: ${formData.mobile}\n` +
      `GitHub: github.com/${formData.github}\n` +
      `LeetCode: leetcode.com/${formData.leetcode}\n\n` +
      `Vetting protocol initiated. Check email within 48h.`
    );
  };

  // Styles (Neo-Brutalist Layout)
  const containerStyle = {
    background: 'var(--black)',
    minHeight: '100vh',
    color: 'var(--white)',
    fontFamily: 'var(--mono)',
    padding: '120px 20px 60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden'
  };

  const formWrapperStyle = {
    width: '100%',
    maxWidth: '650px',
    background: 'var(--black)',
    border: '3px solid var(--white)',
    boxShadow: '8px 8px 0px var(--white)',
    padding: '40px',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 2
  };

  const gridBgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 5px),
      linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 5px)
    `,
    backgroundSize: '60px 60px',
    animation: 'gridMove 12s linear infinite',
    pointerEvents: 'none',
    zIndex: 0
  };

  const radialMaskStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 30%, transparent 10%, var(--black) 80%)',
    pointerEvents: 'none',
    zIndex: 1
  };

  const titleStyle = {
    fontFamily: 'var(--display)',
    fontSize: '2.5rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: '8px',
    letterSpacing: '-0.02em',
    color: 'var(--white)'
  };

  const subtitleStyle = {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.4)',
    marginBottom: '32px',
    lineHeight: '1.6'
  };

  const formGroupStyle = {
    marginBottom: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const labelStyle = {
    fontFamily: 'var(--mono)',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--white)',
    fontWeight: '700'
  };

  const getBorderColor = (fieldName) => {
    if (focusedField === fieldName) {
      if (fieldName === 'name' || fieldName === 'github') return 'var(--green)';
      if (fieldName === 'email' || fieldName === 'leetcode') return 'var(--magenta)';
      if (fieldName === 'mobile') return 'var(--gold)';
    }
    return 'var(--white)';
  };

  const getInputStyle = (fieldName) => ({
    background: 'transparent',
    border: `3px solid ${getBorderColor(fieldName)}`,
    color: 'var(--white)',
    padding: '14px 18px',
    fontFamily: 'var(--mono)',
    fontSize: '0.85rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s ease',
    width: '100%'
  });

  const grid2ColStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '24px'
  };

  const submitBtnStyle = {
    background: 'var(--green)',
    color: 'var(--black)',
    border: '3px solid var(--black)',
    boxShadow: '4px 4px 0px var(--white)',
    padding: '16px 32px',
    fontFamily: 'var(--mono)',
    fontSize: '0.85rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    cursor: 'pointer',
    width: '100%',
    marginTop: '12px',
    boxSizing: 'border-box',
    transition: 'transform 0.1s ease, box-shadow 0.1s ease'
  };

  const returnBtnStyle = {
    background: 'transparent',
    color: 'var(--white)',
    border: '3px solid var(--white)',
    boxShadow: '4px 4px 0px rgba(255, 255, 255, 0.2)',
    padding: '14px 32px',
    fontFamily: 'var(--mono)',
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    cursor: 'pointer',
    width: '100%',
    marginTop: '16px',
    boxSizing: 'border-box',
    textAlign: 'center'
  };

  return (
    <>
      <Navbar />
      <style>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
      `}</style>
      <div style={containerStyle}>
        <div style={gridBgStyle}></div>
        <div style={radialMaskStyle}></div>
        <div style={formWrapperStyle}>
          <h2 style={titleStyle}>Become A Member</h2>
          <p style={subtitleStyle}>// Enter credentials to initialize membership application.</p>
          
          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('name')}
                placeholder="John Doe"
                required
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('email')}
                placeholder="your@email.com"
                required
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                onFocus={() => setFocusedField('mobile')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('mobile')}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>

            <div style={grid2ColStyle}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={labelStyle}>GitHub Username</label>
                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('github')}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle('github')}
                  placeholder="github-dev"
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={labelStyle}>LeetCode Username</label>
                <input
                  type="text"
                  name="leetcode"
                  value={formData.leetcode}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('leetcode')}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle('leetcode')}
                  placeholder="leetcode-pro"
                  required
                />
              </div>
            </div>

            <button type="submit" style={submitBtnStyle}>
              Submit →
            </button>
          </form>

          <button 
            type="button" 
            style={returnBtnStyle}
            onClick={() => navigate('/')}
          >
            ← Return to Base
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ApplyForm;