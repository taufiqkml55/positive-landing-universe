
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The team at Positivus helped us increase our online presence and drive more qualified leads to our website. Their expertise in digital marketing is unparalleled.",
      author: "John Smith",
      position: "Marketing Director at Company A"
    },
    {
      id: 2,
      text: "Working with Positivus has been a game-changer for our business. Their strategic approach to SEO and content marketing has helped us establish ourselves as industry leaders.",
      author: "Sarah Johnson",
      position: "CEO at Company B"
    },
    {
      id: 3,
      text: "Positivus understood our vision and translated it into a successful digital strategy. Their creativity and technical expertise make them a valuable partner.",
      author: "Michael Chen",
      position: "Founder at Company C"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-positivus-black text-white">
      <div className="section-container">
        <h2 className="section-title text-white">Testimonials</h2>
        
        <div className="relative">
          <div className="bg-positivus-darkgray p-8 md:p-12 rounded-3xl">
            <div className="mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 25H7.5L15 10H10L2.5 25V35H17.5V25Z" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M37.5 25H27.5L35 10H30L22.5 25V35H37.5V25Z" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <p className="text-xl md:text-2xl mb-8">
              {testimonials[currentIndex].text}
            </p>
            
            <div>
              <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
              <p className="text-gray-400">{testimonials[currentIndex].position}</p>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <div className="flex items-center">
              <span className="mr-2 text-white">{currentIndex + 1}/{testimonials.length}</span>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2 w-8 rounded-full ${index === currentIndex ? 'bg-positivus-green' : 'bg-white bg-opacity-30'}`}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-positivus-green hover:text-positivus-black hover:border-transparent transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-positivus-green hover:text-positivus-black hover:border-transparent transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
