import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Sparkles, Shield, Clock, ArrowRight, Phone, Award, Layers } from 'lucide-react';

const Reglazing: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#6D2235]" />,
      title: 'Like-New Finish',
      description: 'Professional reglazing restores your fixtures to their original glossy, beautiful appearance with a durable, high-quality finish.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#6D2235]" />,
      title: 'Expert Techniques',
      description: 'Our skilled professionals use proven reglazing methods and premium materials to ensure lasting, beautiful results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#6D2235]" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured professionals who ensure every project is completed with precision and care, protecting your investment.'
    },
    {
      icon: <Clock className="w-8 h-8 text-[#6D2235]" />,
      title: 'Fast Turnaround',
      description: 'Quick service with minimal disruption to your daily routine. Most reglazing projects are completed in just one day.'
    }
  ];

  const services = [
    'Bathtub reglazing',
    'Sink reglazing',
    'Tile reglazing',
    'Shower reglazing',
    'Porcelain fixture reglazing',
    'Acrylic surface reglazing',
    'Custom color matching',
    'High-gloss finishes'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#6D2235] font-bold tracking-wider text-sm uppercase">REGLAZING SERVICES</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Professional Reglazing That Restores Beauty
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform worn and outdated fixtures with professional reglazing services. We restore bathtubs, sinks, tiles, and more to their original glossy, beautiful condition at a fraction of replacement cost. Fast, efficient, and durable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-[#6D2235] hover:bg-[#5A1C2B] text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:12106278920" className="border-2 border-[#6D2235] text-[#6D2235] hover:bg-[#6D2235] hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl">
                <img 
                  src="/kitchens-bathrooms.png" 
                  alt="Professional Reglazing Services" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "overflow-hidden h-[500px] md:h-[600px] bg-gray-200 rounded-2xl flex items-center justify-center";
                      parent.innerHTML = '<div class="text-center text-gray-400"><svg class="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg><p class="text-lg">Reglazing Services</p></div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Professional Reglazing?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional reglazing offers a cost-effective way to restore your fixtures to like-new condition without the expense and hassle of replacement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-[#6D2235]/5 transition-colors duration-300 border border-gray-100"
              >
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="bg-gradient-to-br from-[#6D2235] to-[#5A1C2B] rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Reglazing Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process & Care Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Reglazing Process</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We follow a proven process to ensure your fixtures are reglazed to perfection with lasting results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Free estimate and consultation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Surface preparation and cleaning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Repair of any chips or cracks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Professional reglazing application</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Quality inspection and final touches</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Sets Us Apart</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our reglazing services deliver exceptional value and results that stand the test of time.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Cost-effective alternative to replacement</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Premium materials and expert techniques</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Fast service with minimal disruption</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#6D2235] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Durable, high-gloss finishes that last</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-[#6D2235]/5 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Restore Your Fixtures?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate. Let's restore your bathtubs, sinks, and tiles to like-new condition with professional reglazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-[#6D2235] hover:bg-[#5A1C2B] text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:12106278920" className="border-2 border-[#6D2235] text-[#6D2235] hover:bg-[#6D2235] hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reglazing;

