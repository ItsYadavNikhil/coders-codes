//Old Code

// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Marquee from './components/Marquee';
// import About from './components/About';
// import Tracks from './components/Tracks';
// import HowItWorks from './components/HowItWorks';
// import Stats from './components/Stats';
// import Testimonials from './components/Testimonials';
// import Cta from './components/Cta';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Marquee />
//       <About />
//       <Tracks />
//       <HowItWorks />
//       <Stats />
//       <Testimonials />
//       <Cta />
//       <Footer />
//     </>
//   );
// }

// export default App;

// New Code For Routing


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ApplyForm from './components/ApplyForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyForm />} />
      </Routes>
    </Router>
  );
}

export default App;