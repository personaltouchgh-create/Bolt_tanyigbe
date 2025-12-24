import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/476224992_1170021084697450_390316064744204993_n.jpg', alt: 'Tanyigbe Community', category: 'Community' },
  { id: 2, src: '/475764112_1168645144835044_4633959021770456733_n.jpg', alt: 'TAYAFEST Celebration', category: 'Festivals' },
  { id: 3, src: '/476316223_1169596868073205_3511019283656705740_n.jpg', alt: 'Traditional Ceremony', category: 'Culture' },
  { id: 4, src: '/476610156_1170020774697481_3737999403323565257_n.jpg', alt: 'Community Gathering', category: 'Community' },
  { id: 5, src: '/480937541_1187395832959975_5640828220721013428_n.jpg', alt: 'Cultural Event', category: 'Culture' },
  { id: 6, src: '/491354591_1229152408784317_3726456993382028091_n.jpg', alt: 'Traditional Dance', category: 'Festivals' },
  { id: 7, src: '/491399177_1229152465450978_4812860042655025826_n.jpg', alt: 'Community Members', category: 'Community' },
  { id: 8, src: '/493059710_1229153082117583_6095061872545654825_n.jpg', alt: 'Cultural Celebration', category: 'Culture' },
  { id: 9, src: '/533048130_1314207883612102_7986478633305916107_n.jpg', alt: 'Festival Performance', category: 'Festivals' },
  { id: 10, src: '/1.jpg', alt: 'Tanyigbe Landscape', category: 'Landscape' },
  { id: 11, src: '/2.jpg', alt: 'Community Scene', category: 'Community' },
  { id: 12, src: '/6.jpg', alt: 'Cultural Heritage', category: 'Culture' },
  { id: 13, src: '/8.jpg', alt: 'Traditional Setting', category: 'Culture' },
  { id: 14, src: '/20.jpg', alt: 'Community Life', category: 'Community' },
  { id: 15, src: '/24.jpg', alt: 'Local Scene', category: 'Landscape' },
  { id: 16, src: '/36.jpg', alt: 'Tanyigbe View', category: 'Landscape' },
  { id: 17, src: '/48.jpg', alt: 'Community Event', category: 'Community' },
  { id: 18, src: '/93.jpg', alt: 'Cultural Practice', category: 'Culture' },
];

const categories = ['All', 'Community', 'Culture', 'Festivals', 'Landscape'];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[previousIndex]);
  };

  const goToNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#E2A201] to-[#4C7000]">
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center mb-4">
            <ImageIcon size={64} className="text-white opacity-90" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl md:text-2xl">Capturing the Spirit of Tanyigbe</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Our Visual Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore moments from our festivals, cultural celebrations, and daily life in the Tanyigbe community.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#E2A201] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm mb-1">{image.alt}</p>
                    <span className="inline-block bg-[#E2A201] text-white text-xs px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#E2A201] transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-[#E2A201] transition-colors p-2 bg-black bg-opacity-50 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-[#E2A201] transition-colors p-2 bg-black bg-opacity-50 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          <div
            className="max-w-7xl max-h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6 bg-black bg-opacity-70 px-6 py-4 rounded-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.alt}</h3>
              <span className="inline-block bg-[#E2A201] text-white text-sm px-4 py-2 rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
