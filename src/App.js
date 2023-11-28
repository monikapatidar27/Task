import React from 'react';

import About from './components/About';
import Header from './components/Header';
import Menus from './components/Menus';
import Hero from './components/Hero';
import EventAndNewsLetter from './components/EventAndNewsLetter';
import ContctSection from './components/ContactSection';
import Testimonial from './components/Testimonial';
import Review from './components/Review'

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Hero />
      <About/>
      <Testimonial/>
      <Menus />
      <Review/>
      <EventAndNewsLetter />
      <ContctSection />
    </div>
  );
}

export default App;
