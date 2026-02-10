import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Sparkles, Layers, UtensilsCrossed, Car, Square } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Resurfacing',
      description: 'Transform worn and outdated surfaces with professional resurfacing services. We restore bathtubs, sinks, tiles, and more to like-new condition at a fraction of replacement cost.',
      features: [
        'Bathtub and sink resurfacing',
        'Tile and wall resurfacing',
        'Durable, long-lasting finishes'
      ],
      cta: 'Restore your surfaces. Get a free estimate.',
      icon: <Sparkles className="w-8 h-8 text-[#6D2235]" />
    },
    {
      number: '02',
      title: 'Reglazing',
      description: 'Professional reglazing services that restore the original beauty of your fixtures. Perfect for bathtubs, sinks, and tiles that need a fresh, glossy finish.',
      features: [
        'Bathtub and sink reglazing',
        'Tile reglazing',
        'High-gloss, durable finishes'
      ],
      cta: 'Refresh your fixtures. Book a consultation.',
      icon: <Layers className="w-8 h-8 text-[#6D2235]" />
    },
    {
      number: '03',
      title: 'Countertops',
      description: 'Expert countertop resurfacing and refinishing services. Give your kitchen or bathroom countertops a brand new look without the cost of replacement.',
      features: [
        'Kitchen countertop resurfacing',
        'Bathroom vanity resurfacing',
        'Custom color and finish options'
      ],
      cta: 'Transform your countertops. Request a quote.',
      icon: <UtensilsCrossed className="w-8 h-8 text-[#6D2235]" />
    },
    {
      number: '04',
      title: 'Garages',
      description: 'Professional garage floor coating and resurfacing services. Protect and enhance your garage with durable, attractive floor finishes.',
      features: [
        'Garage floor epoxy coating',
        'Garage floor resurfacing',
        'Decorative and protective finishes'
      ],
      cta: 'Upgrade your garage floor. Schedule a consultation.',
      icon: <Car className="w-8 h-8 text-[#6D2235]" />
    },
    {
      number: '05',
      title: 'Floors',
      description: 'Comprehensive floor resurfacing and refinishing services for all types of flooring. Restore the beauty and durability of your floors.',
      features: [
        'Floor resurfacing and refinishing',
        'Epoxy and protective coatings',
        'Decorative floor finishes'
      ],
      cta: 'Renew your floors. Get started today.',
      icon: <Square className="w-8 h-8 text-[#6D2235]" />
    }
  ];

  const mainServices = [
    {
      title: 'Our Services',
      description: 'D&K Services specializes in professional resurfacing, reglazing, countertops, garages, and floor services. We transform worn surfaces into beautiful, like-new finishes.',
      subDescription: 'From bathtub resurfacing to garage floor coatings, we deliver quality craftsmanship with clear communication and transparent pricing.',
      features: [
        'Resurfacing and reglazing',
        'Countertops and floors',
        'Garage floor coatings'
      ],
      cta: 'View All Services',
      link: '/services'
    },
    {
      title: 'Why Choose Us',
      description: 'At D&K Services, we provide cost-effective alternatives to replacement that deliver exceptional results. Our expert techniques and premium materials ensure lasting beauty.',
      subDescription: 'We combine skilled craftsmanship with fast, efficient service to minimize disruption to your daily routine while delivering professional-grade finishes.',
      features: [
        'Affordable solutions',
        'Expert craftsmanship',
        'Fast turnaround times'
      ],
      cta: 'Learn More',
      link: '/about'
    }
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#6D2235] font-bold tracking-wider text-sm uppercase">OUR SERVICES</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Professional Home Services
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your home with professional resurfacing, reglazing, countertops, garages, and floor services. Quality craftsmanship, affordable solutions, and fast turnaround times. Licensed & insured professionals delivering beautiful, durable results.
          </p>
        </div>

        {/* Numbered Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 md:p-10 hover:bg-gray-100 transition-all duration-300 border border-gray-100 hover:border-[#6D2235] hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-[#6D2235] text-white text-2xl font-black w-16 h-16 rounded-xl flex items-center justify-center">
                    {service.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#6D2235] font-semibold text-sm mb-4">
                    {service.cta}
                  </p>
                  <Link 
                    to={service.title.toLowerCase() === 'reglazing' ? '/reglazing' : '/contact'}
                    className="inline-flex items-center gap-2 text-[#6D2235] font-bold hover:text-[#8B2D47] transition-colors group"
                  >
                    {service.title.toLowerCase() === 'reglazing' ? 'Learn More' : 'Get Started'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-[#6D2235] to-[#5A1C2B] rounded-2xl p-8 md:p-10 text-white"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg text-white/90 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-base text-white/80 mb-6 leading-relaxed">
                {service.subDescription}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to={service.link}
                className="inline-flex items-center gap-2 bg-white text-[#6D2235] hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg group"
              >
                {service.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate. Let's discuss your home service needs and create a plan that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-[#6D2235] hover:bg-[#5A1C2B] text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:12106278920" 
              className="border-2 border-[#6D2235] text-[#6D2235] hover:bg-[#6D2235] hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;

