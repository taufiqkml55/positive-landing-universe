
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon, index }: { title: string; description: string; icon: string; index: number }) => {
  return (
    <div className={`p-6 md:p-8 rounded-3xl border-2 border-positivus-black ${index % 2 === 0 ? 'bg-white' : 'bg-positivus-green'} transition-transform duration-300 hover:scale-105`}>
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <div className="bg-white p-2 rounded-full border-2 border-positivus-black">
          {icon === 'search' && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {icon === 'chart' && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 20V10" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 20V4" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 20V14" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {icon === 'code' && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 18L22 12L16 6" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 6L2 12L8 18" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {icon === 'megaphone' && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1401 5C20.1401 5.4 20.9401 6.2 21.3401 7.2C21.7401 8.2 21.7401 9.3 21.3401 10.4L20.3401 13.4C19.9401 14.4 19.1401 15.2 18.1401 15.6C17.1401 16 16.0401 16 15.0401 15.6" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.04 15.6L6.15003 19.54C5.37003 19.9 4.44003 19.8 3.75003 19.22C3.06003 18.64 2.75003 17.74 2.93003 16.87L3.73003 12.67L4.13003 10.47C4.33003 9.35 5.08003 8.43 6.15003 8.07L15.04 4.92C15.04 4.92 18.89 7.67 18.89 10.26C18.89 12.85 15.04 15.6 15.04 15.6Z" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 11.5V12.5" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {icon === 'social' && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2H7C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2Z" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.5 11.2001H15.51" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 11.2001H8.51" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.51 11.2C15.51 12.14 15.11 13.04 14.41 13.69C13.72 14.35 12.78 14.7 11.8 14.63C10.83 14.56 9.93 14.07 9.32 13.29C8.71 12.51 8.42 11.51 8.51 10.51" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {icon === 'app' && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 18V15" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>
      <p className="text-base md:text-lg mb-8">{description}</p>
      <button className="flex items-center font-semibold hover:text-positivus-green transition-colors">
        Learn more <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Search Engine Optimization',
      description: 'Boost your website visibility on search engines to drive organic traffic and improve ranking.',
      icon: 'search'
    },
    {
      id: 2,
      title: 'Pay-per-Click Advertising',
      description: 'Strategic PPC campaigns that deliver targeted traffic and maximize ROI through data analysis.',
      icon: 'chart'
    },
    {
      id: 3,
      title: 'Social Media Marketing',
      description: 'Strategic social media solutions to enhance brand awareness and engage with your audience.',
      icon: 'social'
    },
    {
      id: 4,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads, boost sales, and strengthen customer relationships.',
      icon: 'megaphone'
    },
    {
      id: 5,
      title: 'Content Creation',
      description: 'Compelling content that resonates with your audience and establishes thought leadership.',
      icon: 'code'
    },
    {
      id: 6,
      title: 'Analytics and Tracking',
      description: 'Comprehensive analytics to track performance and make data-driven marketing decisions.',
      icon: 'app'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
