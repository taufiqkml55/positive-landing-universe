
import React from 'react';

const Clients = () => {
  const clients = [
    { id: 1, name: 'Google' },
    { id: 2, name: 'Slack' },
    { id: 3, name: 'Notion' },
    { id: 4, name: 'Monday' },
    { id: 5, name: 'Intercom' },
    { id: 6, name: 'Spotify' },
  ];

  return (
    <section className="section-padding bg-positivus-black text-white">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Trusted by leading brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.id} className="text-xl md:text-2xl font-bold text-white opacity-80 hover:opacity-100 hover:text-positivus-green transition-all duration-300">
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
