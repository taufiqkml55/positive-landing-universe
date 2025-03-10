
import React from 'react';
import ScrollingBanner from './ScrollingBanner';

const Clients = () => {
  const clients = [
    { id: 1, name: 'Google' },
    { id: 2, name: 'Slack' },
    { id: 3, name: 'Notion' },
    { id: 4, name: 'Monday' },
    { id: 5, name: 'Intercom' },
    { id: 6, name: 'Spotify' },
    { id: 7, name: 'Amazon' },
    { id: 8, name: 'Microsoft' },
    { id: 9, name: 'Adobe' },
    { id: 10, name: 'Airbnb' },
  ];

  return (
    <section className="section-padding bg-positivus-black text-white">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Trusted by leading brands
        </h2>
        
        {/* Single scrolling banner with continuous loop */}
        <ScrollingBanner items={clients} direction="left" speed={30} />
      </div>
    </section>
  );
};

export default Clients;
