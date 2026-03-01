import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <CustomCursor />
      <Hero />
      {/* <Stats /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;