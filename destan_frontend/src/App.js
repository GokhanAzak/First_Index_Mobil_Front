// Bileşen importları
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Works from './components/Works';
import Reveal from './components/Reveal';
import FAQ from './components/FAQ';
import React from 'react';

function App() {
  return (
    <div>
      {/* Üst navigasyon menüsü */}
      <Navbar />

      {/* Scroll ile görünür olunca animasyonlu içerik (Reveal) */}
      <Reveal />

   
      <Hero />

      
      <About />


      <Services />

      
      <Works /> 

     
      <ContactForm />

    
      <FAQ />

    
      <Footer />
    </div>
  );
}

export default App;
