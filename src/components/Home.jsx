import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Marquee from './Marquee';
import About from './About';
import Tracks from './Tracks';
import HowItWorks from './HowItWorks';
import Stats from './Stats';
import Testimonials from './Testimonials';
import Cta from './Cta';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Tracks />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;