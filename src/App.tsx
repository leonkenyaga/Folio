import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Features from './components/Features.js';
import Testimonial from './components/Testimonial.js';
import CallToAction from './components/CallToAction.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
