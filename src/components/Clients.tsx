
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
        
        {/* Static display on medium and larger screens */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.slice(0, 10).map((client) => (
            <div 
              key={client.id} 
              className="text-xl md:text-2xl font-bold text-white opacity-80 hover:opacity-100 hover:text-positivus-green transition-all duration-300 py-3"
            >
              {client.name}
            </div>
          ))}
        </div>
        
        {/* Scrolling banner only on mobile */}
        <div className="md:hidden">
          <ScrollingBanner items={clients} direction="left" speed={35} />
        </div>
        
        {/* Hidden on small screens, shown on medium+ */}
        <div className="hidden md:block mt-16">
          <ScrollingBanner items={clients} direction="left" speed={25} className="opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
