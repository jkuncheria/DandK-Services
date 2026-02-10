import React from 'react';
import { Award, Heart, Shield, Users, Clock, Home, DollarSign, CheckCircle, Wrench } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: <DollarSign className="w-8 h-8 text-blue-900" />,
      title: 'Transparent Pricing',
      description: 'We provide upfront, transparent pricing with no hidden fees. Get a free estimate and know exactly what you\'ll pay before we start.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured professionals who ensure every project is built to last with precision and care, protecting your investment.'
    },
    {
      icon: <Home className="w-8 h-8 text-blue-900" />,
      title: 'Home Services',
      description: 'We specialize in professional resurfacing, reglazing, countertops, garages, and floors for residential properties.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'On-Time Delivery',
      description: 'Clear timelines and transparent pricing ensure your project stays on schedule and within budget.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-900" />,
      title: 'Quality Craftsmanship',
      description: 'We deliver quality resurfacing and reglazing services with expert techniques and premium materials. Craftsmanship you can see.'
    }
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            All About D&K Services
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          {/* Tagline */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              QUALITY. SAFETY. CLEAR COMMUNICATION.
            </p>
          </div>

          {/* Main About Content */}
          <div className="max-w-4xl mx-auto text-left mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              D&K Services is a trusted team delivering professional home services with craftsmanship you can count on. We specialize in resurfacing, reglazing, countertops, garages, and floors. We focus on quality workmanship, transparent pricing, and fast turnaround times.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We provide cost-effective alternatives to replacement that deliver exceptional results. Our expert resurfacing and reglazing techniques restore the beauty of your surfaces while saving you time and money. Licensed & insured professionals, clear timelines, and transparent pricing—on time and on budget.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our primary goal is to exceed our customer's expectations! We know that you will be happy with your decision as we deliver quality home services that stand the test of time.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Story Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-24 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Transforming Homes with Quality and Craftsmanship
            </h3>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6">
              D&K Services has become a trusted home services company delivering professional resurfacing, reglazing, countertops, garages, and floor services with craftsmanship you can count on. Our team is ready for every job, managing projects with the skill and experience our clients have come to expect. We want our customers to be satisfied with our work, which is why we provide open communication channels throughout the duration of each project.
            </p>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              We provide transparent pricing with no hidden fees, fully licensed and insured professionals, and quality resurfacing and reglazing techniques. We specialize in cost-effective alternatives to replacement, handling everything from bathtub resurfacing to garage floor coatings. We guarantee your satisfaction—once you see the quality of our work, you will not want to go anywhere else for all your home service needs!
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose D&K Services?</h3>
            <div className="space-y-4">
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Clear Communication</h4>
                  <p className="text-gray-600">We provide open communication channels throughout the duration of each project, ensuring you're always informed and satisfied.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Experienced Professionals</h4>
                  <p className="text-gray-600">Our team manages projects with the skill and experience our clients have come to expect. We treat your property with the same level of care we would use in our own homes.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Quality Craftsmanship</h4>
                  <p className="text-gray-600">We use premium materials and expert resurfacing and reglazing techniques, ensuring your surfaces are restored to like-new condition with precision and care.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">On-Time & On-Budget</h4>
                  <p className="text-gray-600">Clear timelines and transparent pricing ensure your project stays on schedule and within budget. We deliver what we promise.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Exceed Expectations</h4>
                  <p className="text-gray-600">Our primary goal is to exceed our customer's expectations. We know that you will be happy with your decision!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;


