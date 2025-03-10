
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
        
        {/* Scrolling banner for all screen sizes */}
        <ScrollingBanner items={clients} direction="left" speed={30} className="mb-8" />
        
        {/* Secondary scrolling banner going in the opposite direction */}
        <ScrollingBanner items={[...clients].reverse()} direction="right" speed={25} className="opacity-80" />
      </div>
    </section>
  );
};

export default Clients;
