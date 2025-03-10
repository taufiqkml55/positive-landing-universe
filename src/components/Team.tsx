
import React from 'react';

const TeamMember = ({ name, position, index }: { name: string; position: string; index: number }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-full aspect-square rounded-3xl mb-6 ${index % 2 === 0 ? 'bg-positivus-green' : 'bg-positivus-black'} flex items-center justify-center`}>
        <div className="text-5xl font-bold text-center p-4 text-white">
          {name.charAt(0)}
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
      <p className="text-lg text-gray-600">{position}</p>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'John Smith', position: 'CEO & Founder' },
    { id: 2, name: 'Jane Cooper', position: 'COO' },
    { id: 3, name: 'Eleanor Pena', position: 'CMO' },
    { id: 4, name: 'Robert Fox', position: 'CTO' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-title">Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.id}
              name={member.name}
              position={member.position}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
