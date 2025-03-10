
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#cases' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="py-6 sticky top-0 bg-white z-50 shadow-sm">
      <div className="section-container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#B9FF66"/>
              <path d="M28.5714 17.1429H25.7143V14.2857C25.7143 13.4256 25.3728 12.6005 24.7655 11.9932C24.1581 11.3858 23.333 11.0443 22.4729 11.0443H17.5271C16.667 11.0443 15.8419 11.3858 15.2345 11.9932C14.6272 12.6005 14.2857 13.4256 14.2857 14.2857V25.7143C14.2857 26.5744 14.6272 27.3995 15.2345 28.0069C15.8419 28.6142 16.667 28.9557 17.5271 28.9557H28.5714C29.4315 28.9557 30.2566 28.6142 30.864 28.0069C31.4714 27.3995 31.8129 26.5744 31.8129 25.7143V20.3843C31.8129 19.5242 31.4714 18.6991 30.864 18.0917C30.2566 17.4844 29.4315 17.1429 28.5714 17.1429ZM17.5271 14.2857H22.4729V17.1429H17.5271V14.2857ZM20 25.7143C19.5732 25.7143 19.1566 25.5951 18.7975 25.3701C18.4385 25.145 18.1516 24.8232 17.9732 24.443C17.7947 24.0629 17.7327 23.6404 17.7939 23.2297C17.8551 22.8191 18.0372 22.4382 18.3181 22.1319C18.599 21.8256 18.9665 21.5979 19.3723 21.4731C19.778 21.3483 20.2044 21.33 20.6191 21.4208C21.0339 21.5117 21.4178 21.7084 21.7245 21.9908C22.0311 22.2732 22.2583 22.6308 22.3814 23.0286C22.5046 23.4264 22.5186 23.8468 22.4221 24.2524C22.3256 24.6581 22.1219 25.0342 21.8338 25.3338C21.5458 25.6334 21.184 25.8451 20.7859 25.95C20.3879 26.0549 19.97 26.0491 19.5743 25.9329C19.1786 25.8167 18.8221 25.5941 18.5414 25.2857C18.2607 24.9773 18.0643 24.5929 17.9714 24.1786C17.9029 23.877 17.8842 23.5659 17.9159 23.2586L17.9286 23.1429H20V25.7143Z" fill="#191A23"/>
            </svg>
            <span className="font-bold text-2xl">Positivus</span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base hover:text-positivus-green transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="custom-button-black">Contact us</button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-positivus-black focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="section-container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base py-2 hover:text-positivus-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="custom-button-black w-full md:w-auto">Contact us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
