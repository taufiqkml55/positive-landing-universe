
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Organic Marketing',
      description: 'Boosted organic traffic by 200% and improved conversion rates by 25% through targeted content strategy.',
      imagePosition: 'right'
    },
    {
      id: 2,
      title: 'E-Commerce Campaign',
      description: 'Increased sales by 80% and reduced cart abandonment by 40% through optimized user experience.',
      imagePosition: 'left'
    },
    {
      id: 3,
      title: 'Digital Transformation',
      description: 'Streamlined operations and improved customer satisfaction by 60% through digital process integration.',
      imagePosition: 'right'
    }
  ];

  return (
    <section id="cases" className="section-padding bg-positivus-lightgray">
      <div className="section-container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Case Studies</h2>
          <button className="custom-button-black hidden md:flex items-center">
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-16">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className={`grid md:grid-cols-2 gap-8 items-center ${
                study.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${study.imagePosition === 'left' ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h3>
                <p className="text-lg mb-6">{study.description}</p>
                <button className="flex items-center font-semibold hover:text-positivus-green transition-colors">
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className={`${study.imagePosition === 'left' ? 'md:order-1' : 'md:order-2'} bg-gray-200 rounded-2xl h-64 md:h-96`}>
                <div className="w-full h-full bg-positivus-black rounded-2xl flex items-center justify-center text-positivus-green p-8">
                  Case Study {study.id} Image
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
          <button className="custom-button-black w-full flex items-center justify-center">
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
