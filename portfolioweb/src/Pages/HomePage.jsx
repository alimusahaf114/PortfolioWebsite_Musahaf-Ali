import { useState } from 'react';
import Navigation from '../components/Navigate';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Blog from '../Components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <>
      <Navigation scrollToSection={scrollToSection} activeSection={activeSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}