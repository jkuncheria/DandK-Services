import React from 'react';
import { Link } from 'react-router-dom';

const AboutHome: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/aboutus.png" 
                alt="D&K Services - Professional Home Services" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[#6D2235] font-bold tracking-wider text-sm uppercase">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              We deliver quality resurfacing and reglazing services with expert craftsmanship every project, every time.
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              D&K Services is a trusted team delivering professional home services with craftsmanship you can count on. We focus on quality workmanship, transparent pricing, and fast turnaround times. From resurfacing to reglazing, we transform worn surfaces into beautiful, like-new finishes.
            </p>
            
            <div className="bg-[#6D2235]/10 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-[#6D2235] mb-2">What we do best</h3>
              <p className="text-gray-700 text-sm">
                We specialize in cost-effective alternatives to replacement. Our expert resurfacing and reglazing techniques restore the beauty of your surfaces while saving you time and money. Licensed & insured professionals, clear timelines, and transparent pricing—on time and on budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="bg-[#6D2235] hover:bg-[#5A1C2B] text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Learn More About Us
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-[#6D2235] text-[#6D2235] hover:bg-[#6D2235] hover:text-white font-bold py-4 px-8 rounded-lg transition-all text-center"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;

