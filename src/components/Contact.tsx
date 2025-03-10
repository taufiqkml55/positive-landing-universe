
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: {
      seo: false,
      ppc: false,
      social: false,
      email: false,
      content: false,
      analytics: false
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      services: {
        seo: false,
        ppc: false,
        social: false,
        email: false,
        content: false,
        analytics: false
      }
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="bg-positivus-green rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Get in touch with us</h3>
              <p className="text-lg mb-8">Reach out to us through the contact form or visit our office.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full border-2 border-positivus-black mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#191A23"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Email us</h4>
                    <p>info@positivus.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full border-2 border-positivus-black mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#191A23"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Call us</h4>
                    <p>+1 (555) 000-0000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full border-2 border-positivus-black mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#191A23"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Visit us</h4>
                    <p>123 Business Avenue, NY</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-2 border-positivus-black rounded-lg focus:outline-none focus:ring-2 focus:ring-positivus-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-2 border-positivus-black rounded-lg focus:outline-none focus:ring-2 focus:ring-positivus-black"
                  />
                </div>
                
                <div>
                  <label className="block font-bold mb-2">What services are you interested in?</label>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="seo"
                        name="seo"
                        checked={formData.services.seo}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 mr-2"
                      />
                      <label htmlFor="seo">SEO</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="ppc"
                        name="ppc"
                        checked={formData.services.ppc}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 mr-2"
                      />
                      <label htmlFor="ppc">PPC</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="social"
                        name="social"
                        checked={formData.services.social}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 mr-2"
                      />
                      <label htmlFor="social">Social Media</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="email"
                        name="email"
                        checked={formData.services.email}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 mr-2"
                      />
                      <label htmlFor="email">Email Marketing</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="content"
                        name="content"
                        checked={formData.services.content}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 mr-2"
                      />
                      <label htmlFor="content">Content Creation</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="analytics"
                        name="analytics"
                        checked={formData.services.analytics}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 mr-2"
                      />
                      <label htmlFor="analytics">Analytics</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border-2 border-positivus-black rounded-lg focus:outline-none focus:ring-2 focus:ring-positivus-black"
                  ></textarea>
                </div>
                
                <button type="submit" className="custom-button-black w-full md:w-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
