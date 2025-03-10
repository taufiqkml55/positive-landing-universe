
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="section-container grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            A Digital Product Agency
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
            Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="custom-button-black">
              Contact Now
            </button>
            <button className="custom-button-outline flex items-center">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 bg-positivus-lightgray rounded-3xl p-8 md:p-12">
          <svg width="100%" height="100%" viewBox="0 0 482 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="482" height="350" rx="12" fill="#F3F3F3"/>
            <circle cx="91" cy="175" r="60" fill="#B9FF66"/>
            <circle cx="390" cy="175" r="60" fill="#B9FF66"/>
            <path d="M91 115C57.9 115 31 141.9 31 175C31 208.1 57.9 235 91 235C124.1 235 151 208.1 151 175C151 141.9 124.1 115 91 115ZM91 225C63.4 225 41 202.6 41 175C41 147.4 63.4 125 91 125C118.6 125 141 147.4 141 175C141 202.6 118.6 225 91 225Z" fill="#191A23"/>
            <path d="M91 145C80.5 145 72 153.5 72 164V186C72 196.5 80.5 205 91 205C101.5 205 110 196.5 110 186V164C110 153.5 101.5 145 91 145ZM100 186C100 191 96 195 91 195C86 195 82 191 82 186V164C82 159 86 155 91 155C96 155 100 159 100 164V186Z" fill="#191A23"/>
            <path d="M390 115C356.9 115 330 141.9 330 175C330 208.1 356.9 235 390 235C423.1 235 450 208.1 450 175C450 141.9 423.1 115 390 115ZM390 225C362.4 225 340 202.6 340 175C340 147.4 362.4 125 390 125C417.6 125 440 147.4 440 175C440 202.6 417.6 225 390 225Z" fill="#191A23"/>
            <path d="M390 145C379.5 145 371 153.5 371 164V186C371 196.5 379.5 205 390 205C400.5 205 409 196.5 409 186V164C409 153.5 400.5 145 390 145ZM399 186C399 191 395 195 390 195C385 195 381 191 381 186V164C381 159 385 155 390 155C395 155 399 159 399 164V186Z" fill="#191A23"/>
            <path d="M271 120H211C205.5 120 201 124.5 201 130V219C201 224.5 205.5 229 211 229H271C276.5 229 281 224.5 281 219V130C281 124.5 276.5 120 271 120ZM271 219H211V130H271V219Z" fill="#191A23"/>
            <path d="M241 144C230.5 144 222 152.5 222 163C222 173.5 230.5 182 241 182C251.5 182 260 173.5 260 163C260 152.5 251.5 144 241 144ZM241 172C236 172 232 168 232 163C232 158 236 154 241 154C246 154 250 158 250 163C250 168 246 172 241 172Z" fill="#191A23"/>
            <path d="M236 192H216C213.8 192 212 193.8 212 196V219H222V196H236V192Z" fill="#191A23"/>
            <path d="M266 192H246V196H260V219H270V196C270 193.8 268.2 192 266 192Z" fill="#191A23"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
