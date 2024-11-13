import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Guarantees } from './components/Guarantees';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Testimonials />
      <Guarantees />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}

export default App;