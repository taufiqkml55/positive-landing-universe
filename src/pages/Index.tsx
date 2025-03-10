
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import WorkingProcess from '../components/WorkingProcess';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Simple animation for sections as they scroll into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      // Cleanup observer when component unmounts
      document.querySelectorAll('section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
