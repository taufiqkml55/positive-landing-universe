
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
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {clients.slice(0, 6).map((client) => (
            <div key={client.id} className="text-xl md:text-2xl font-bold text-white opacity-80 hover:opacity-100 hover:text-positivus-green transition-all duration-300">
              {client.name}
            </div>
          ))}
        </div>
        
        <div className="md:hidden">
          <ScrollingBanner items={clients.slice(0, 6)} direction="left" speed={30} />
        </div>
        
        <div className="hidden md:block mt-12">
          <ScrollingBanner items={clients} direction="left" speed={40} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
