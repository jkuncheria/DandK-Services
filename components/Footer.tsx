import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4 group">
              <img 
                src="/dandklogo.png" 
                alt="D&K Services LLC" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Professional Home Services<br />
              Resurfacing, Reglazing, Countertops & More
            </p>
            <div className="text-sm text-gray-600 mb-4 space-y-1">
              <p><a href="tel:12106278920" className="hover:text-blue-900">(210) 627-8920</a> Office</p>
              <p><a href="mailto:greenc210@gmail.com" className="hover:text-blue-900">greenc210@gmail.com</a></p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-900 transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-blue-900 font-semibold">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-blue-900">
                  Resurfacing
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-blue-900">
                  Reglazing
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-blue-900">
                  Countertops
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-blue-900">
                  Garages
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-blue-900">
                  Floors
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="hover:text-blue-900">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-blue-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/financing" onClick={scrollToTop} className="hover:text-blue-900">
                  Financing
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-blue-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-blue-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

           {/* Hours */}
           <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Hours</h4>
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Available</p>
              <p>Monday - Sunday</p>
              <div className="pt-2 space-y-1">
                <p>By Appointment</p>
                <p className="text-xs text-gray-500 mt-2">We work around your schedule. Call for availability.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 D&K Services. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;