import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('our-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[700px] md:h-[800px] bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/keil-hero.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Background Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0 z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          SAN ANTONIO'S PREMIER<br />
          <span className="inline-block font-black">
            HOME SERVICES
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md font-light">
          Professional resurfacing, reglazing, countertops, garages, floors, and more. Transform your home with craftsmanship and attention to detail. We deliver beautiful, durable results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center"
          >
            GET QUOTE
          </Link>
          <a 
            href="tel:12106278920"
            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center"
          >
            CALL TODAY
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;