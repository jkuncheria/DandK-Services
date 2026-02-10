import React from 'react';

const ClientBanner: React.FC = () => {
  // Client logos from past-clients folder
  const clients = [
    {
      name: 'Carnova',
      logo: '/past-clients/carnova-logo.png',
      alt: 'Carnova'
    },
    {
      name: 'Clayco',
      logo: '/past-clients/clayco.png',
      alt: 'Clayco'
    },
    {
      name: 'Extra Space Storage',
      logo: '/past-clients/extra-space.webp',
      alt: 'Extra Space Storage'
    },
    {
      name: 'Five Guys',
      logo: '/past-clients/five-guys.png',
      alt: 'Five Guys'
    },
    {
      name: 'Old Chicago',
      logo: '/past-clients/old-chicago.jpg',
      alt: 'Old Chicago'
    },
    {
      name: 'Pima',
      logo: '/past-clients/pima.webp',
      alt: 'Pima'
    },
    {
      name: 'UEI',
      logo: '/past-clients/uei-logo.webp',
      alt: 'UEI'
    },
    {
      name: 'Wendy\'s',
      logo: '/past-clients/wendys.svg',
      alt: 'Wendy\'s'
    }
  ];

  return (
    <section className="bg-gray-50 py-10 md:py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-8">
          <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">
            Trusted Partners
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 font-bold">
            Companies We've Worked With
          </h3>
        </div>
        
        {/* Client Logos - Horizontal Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 md:gap-16 items-center justify-center animate-scroll">
            {/* Duplicate set for seamless loop */}
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center h-12 md:h-16 px-4"
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-full max-w-[120px] md:max-w-[180px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          will-change: transform;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientBanner;

