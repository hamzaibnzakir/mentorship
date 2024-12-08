import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Metrics } from './components/home/Metrics';
import { Pricing } from './components/home/Pricing';
import { Testimonials } from './components/home/Testimonials';
import { FAQ } from './components/home/FAQ';
import { ForumPreview } from './components/home/ForumPreview';
import { Contact } from './components/home/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Metrics />
        <Testimonials />
        <Pricing />
        <ForumPreview />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App;
