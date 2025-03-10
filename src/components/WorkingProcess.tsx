
import React from 'react';

const ProcessStep = ({ number, title, description }: { number: number; title: string; description: string }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="bg-positivus-green text-positivus-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

const WorkingProcess = () => {
  const steps = [
    {
      number: 1,
      title: 'Research',
      description: 'We dive deep into your industry, competitors, and target audience to craft a winning strategy.'
    },
    {
      number: 2,
      title: 'Strategy',
      description: 'Based on our research, we develop a comprehensive marketing plan tailored to your goals.'
    },
    {
      number: 3,
      title: 'Implementation',
      description: 'Our team of experts executes the strategy with precision and attention to detail.'
    },
    {
      number: 4,
      title: 'Analysis and Optimization',
      description: 'We continuously monitor performance metrics and make data-driven adjustments to maximize results.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-title">Working Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {steps.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
