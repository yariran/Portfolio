import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      id: 1,
      src: '/photography/photo-1.jpg',
      
    },
    {
      id: 2,
      src: '/photography/photo-2.jpg',
      
    },
    {
      id: 3,
      src: '/photography/photo-3.jpg',
     
    },
    {
      id: 4,
      src: '/photography/photo-4.jpg',
  
    },
    {
      id: 5,
      src: '/photography/photo-5.jpg',
      
    },
    {
      id: 6,
      src: '/photography/photo-6.jpg',
      
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(photos[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

  return (
    <section id="photography" className="py-20 bg-white dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900 dark:text-primary-50">
            Photography
          </h2>
          <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            A collection of moments captured through my lens, exploring the beauty of minimalism in black and white.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-xl bg-primary-100 dark:bg-primary-800 cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl mb-2">{photo.title}</h3>
                <p className="text-gray-200 text-sm">{photo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
              onClick={closeLightbox}
            >
              <FaTimes className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 text-white hover:text-primary-400 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <FaChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              className="absolute right-4 text-white hover:text-primary-400 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <FaChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Photography;
