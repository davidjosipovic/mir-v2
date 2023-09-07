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
    const [currentCategory, setCurrentCategory] = useState('All categories');
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const filteredImages = currentCategory === 'All categories'
        ? images
        : images.filter(image => image.category === currentCategory);

    const categories = ['All categories', ...Array.from(new Set(images.map(image => image.category)))];

    const openLightbox = (imageUrl: string) => {
        setLightboxImage(imageUrl);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <div className="flex flex-col items-center justify-center py-4 md:py-8">
        <div className="flex items-center justify-center flex-wrap">
            {categories.map((category, index) => (
            <button
                key={index}
                type="button"
                className={`${
                category === currentCategory
                    ? 'bg-blue-700 text-white hover:bg-blue-800'
                    : 'bg-white text-blue-700 hover:text-white hover:bg-blue-700'
                } border border-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800`}
                onClick={() => setCurrentCategory(category)}
            >
                {category}
            </button>
            ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
            <div
                key={index}
                className="flex justify-center items-center"
                onClick={() => openLightbox(image.imageUrl)} // Open the lightbox when the image is clicked
            >
                <div className="h-64 max-w-full">
                <Image
                    className="w-full h-full rounded-lg cursor-pointer"
                    src={image.imageUrl}
                    alt={`Image ${index + 1}`}
                    width={700}
                    height={700}
                />
                </div>
            </div>
            ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
            <Lightbox imageUrl={lightboxImage} onClose={closeLightbox} />
        )}
        </div>
    );
    };

    export default Gallery;
