import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images - Update these with actual project images
  const galleryImages = [
    {
      id: 1,
      src: '/hero-1.png',
      title: 'Residential Construction',
      category: 'Residential'
    },
    {
      id: 2,
      src: '/interiorpainting.png',
      title: 'Interior Remodeling',
      category: 'Residential'
    },
    {
      id: 3,
      src: '/exteriorpainting.png',
      title: 'Exterior Stucco',
      category: 'Exterior'
    },
    {
      id: 4,
      src: '/commericalpainting.png',
      title: 'Commercial Build-Out',
      category: 'Commercial'
    },
    {
      id: 5,
      src: '/cabinetpainting.png',
      title: 'Kitchen Remodel',
      category: 'Residential'
    },
    {
      id: 6,
      src: '/pressurewashing.png',
      title: 'Exterior Finishing',
      category: 'Exterior'
    },
    {
      id: 7,
      src: '/wallpaper.png',
      title: 'Interior Design',
      category: 'Residential'
    },
    {
      id: 8,
      src: '/aboutus.png',
      title: 'Project Completion',
      category: 'Commercial'
    },
    {
      id: 9,
      src: '/hero-1.png',
      title: 'New Construction',
      category: 'Residential'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Exterior'];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">GALLERY</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Our Project Gallery
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our completed projects showcasing quality craftsmanship, attention to detail, and beautiful results across residential and commercial construction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImage(null);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "aspect-square overflow-hidden bg-gray-200 flex items-center justify-center";
                      parent.innerHTML = '<div class="text-gray-400 text-center p-8"><svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><p>Image Coming Soon</p></div>';
                    }
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold mb-1">{filteredImages[selectedImage].title}</h3>
                <p className="text-gray-300">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us today for a free estimate.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Get Free Estimate
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;

