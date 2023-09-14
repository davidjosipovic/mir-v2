'use client'
import React, { useState } from 'react';
import Lightbox from './Lightbox'; // Import the Lightbox component
import Image from 'next/image';

interface GalleryProps {
  images: {
    category: string;
    imageUrl: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentCategory, setCurrentCategory] = useState('POKAŽI SVE');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = currentCategory === 'POKAŽI SVE' ? images : images.filter(image => image.category === currentCategory);

  const categories = ['POKAŽI SVE', ...Array.from(new Set(images.map(image => image.category)))];

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className='my-40' id='projekti'>
      <h1 className="text-xl mb-3 text-center text-orange-400 font-medium">PROJEKTI</h1>
      <p className="text-gray-700 text-2xl lg:text-4xl font-bold text-center mb-6">Naši radovi</p>
      <div className="flex flex-col items-center justify-center py-4 md:py-8 mb-8 lg:mb-12">
        <div className="flex flex-wrap justify-center mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className={`${
                category === currentCategory
                  ? 'bg-orange-400 text-white  transition duration-300 font-bold'
                  : 'bg-gray-100 text-gray-500 hover:text-white hover:bg-orange-400 transition duration-300 '
              } border font-bold  rounded-full text-base  px-5 py-2.5 text-center mr-3 mb-3    dark:bg-gray-900 `}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center transition duration-300 transform hover:scale-105"
              onClick={() => openLightbox(image.imageUrl)} // Open the lightbox when the image is clicked
            >
              <div className="w-full  h-64 sm:h-48 md:h-48 lg:h-64 max-w-full">
                <Image
                  className="w-full h-full cursor-pointer"
                  src={image.imageUrl}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={700}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && <Lightbox imageUrl={lightboxImage} onClose={closeLightbox} />}
      </div>
    </div>
  );
};

export default Gallery;
