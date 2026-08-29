import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Services from './components/Services';
import Reflections from './components/Reflections';
import Atmosphere from './components/Atmosphere';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import Linktree from './components/Linktree';

export default function App() {
  // Roteamento simples baseado em pathname — sem biblioteca extra
  const isLinktree = window.location.pathname === '/links';

  if (isLinktree) {
    return <Linktree />;
  }

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Manifesto />
        <About />
        <Services />
        <Reflections />
        <Atmosphere />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
