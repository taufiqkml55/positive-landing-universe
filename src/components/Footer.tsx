
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="section-container">
        <div className="border-b border-gray-300 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#B9FF66"/>
                  <path d="M28.5714 17.1429H25.7143V14.2857C25.7143 13.4256 25.3728 12.6005 24.7655 11.9932C24.1581 11.3858 23.333 11.0443 22.4729 11.0443H17.5271C16.667 11.0443 15.8419 11.3858 15.2345 11.9932C14.6272 12.6005 14.2857 13.4256 14.2857 14.2857V25.7143C14.2857 26.5744 14.6272 27.3995 15.2345 28.0069C15.8419 28.6142 16.667 28.9557 17.5271 28.9557H28.5714C29.4315 28.9557 30.2566 28.6142 30.864 28.0069C31.4714 27.3995 31.8129 26.5744 31.8129 25.7143V20.3843C31.8129 19.5242 31.4714 18.6991 30.864 18.0917C30.2566 17.4844 29.4315 17.1429 28.5714 17.1429ZM17.5271 14.2857H22.4729V17.1429H17.5271V14.2857ZM20 25.7143C19.5732 25.7143 19.1566 25.5951 18.7975 25.3701C18.4385 25.145 18.1516 24.8232 17.9732 24.443C17.7947 24.0629 17.7327 23.6404 17.7939 23.2297C17.8551 22.8191 18.0372 22.4382 18.3181 22.1319C18.599 21.8256 18.9665 21.5979 19.3723 21.4731C19.778 21.3483 20.2044 21.33 20.6191 21.4208C21.0339 21.5117 21.4178 21.7084 21.7245 21.9908C22.0311 22.2732 22.2583 22.6308 22.3814 23.0286C22.5046 23.4264 22.5186 23.8468 22.4221 24.2524C22.3256 24.6581 22.1219 25.0342 21.8338 25.3338C21.5458 25.6334 21.184 25.8451 20.7859 25.95C20.3879 26.0549 19.97 26.0491 19.5743 25.9329C19.1786 25.8167 18.8221 25.5941 18.5414 25.2857C18.2607 24.9773 18.0643 24.5929 17.9714 24.1786C17.9029 23.877 17.8842 23.5659 17.9159 23.2586L17.9286 23.1429H20V25.7143Z" fill="#191A23"/>
                </svg>
                <span className="font-bold text-2xl">Positivus</span>
              </div>
              <p className="text-gray-600 mb-6">
                Leading digital agency with solid design and development expertise. We focus on building readymade websites, mobile applications, and optimized online business services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-positivus-black flex items-center justify-center hover:bg-positivus-green hover:text-positivus-black transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-positivus-black flex items-center justify-center hover:bg-positivus-green hover:text-positivus-black transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-positivus-black flex items-center justify-center hover:bg-positivus-green hover:text-positivus-black transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.8 8.7 6 7.9 6 7C6 6.1 6.8 5.3 7.7 5.3C8.6 5.3 9.4 6.1 9.4 7C9.4 7.9 8.6 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.7 14.8 12 14 12C13.2 12 12.5 12.7 12.5 13.5V17H10V10H12.5V11.3C12.8 10.5 13.8 10 14.9 10C16.7 10 18 11.3 18 13.2V17Z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-positivus-green transition-colors">About</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">How we work</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-positivus-green transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">Pay-per-Click</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">Email Marketing</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">Content Creation</a></li>
                <li><a href="#" className="hover:text-positivus-green transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Newsletter</h3>
              <p className="mb-4 text-gray-600">Subscribe to our newsletter to stay up to date on the latest marketing, sales, and service tips.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow p-3 border-2 border-r-0 border-positivus-black rounded-l-lg focus:outline-none"
                />
                <button className="bg-positivus-black text-white p-3 rounded-r-lg hover:bg-positivus-green hover:text-positivus-black transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; 2023 Positivus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
