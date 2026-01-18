import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Programs from './components/Programs';
import Labs from './components/Labs';
import Testimonials from './components/Testimonials';
import Registration from './components/Registration';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-navy text-white overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <WhyUs />
          <Stats />
          <Programs />
          <Labs />
          <Testimonials />
          <Registration />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;