"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const General: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/Preview/IMG_5775.JPG',
    '/Preview/IMG_6075.JPG',
    '/Preview/IMG_8017.JPG',
    '/Preview/IMG_8258.JPG',
    '/Preview/IMG_8339.JPG',
  ];

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds (2000 milliseconds)

    return () => clearInterval(imageChangeInterval);
  }, []);

  const renderImages = () => {
    return images.map((src, index) => (
      <Image
        key={index}
        width={500}
        height={200}
        className={`mySlides w-full ${index === currentImageIndex ? 'block' : 'hidden'}`}
        src={src}
        alt={`Slide ${index + 1}`}
      />
    ));
  };

  return (
    <div className="container mx-auto py-8 my-20">
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <div className="text-container mr-20">
            
            <h1 className="text-xl mb-3 text-left font-medium">OPĆENITO</h1>
            <p className="text-gray-700 text-4xl font-bold text-left mb-6"> Uvjerite se u kvalitetu naših raznolikih djelatnosti te nas angažirajte za izgradnju svojega objekta.</p>
            <p className="text-gray-600 text-xl">
              Stojimo vam na usluzi za sve radove visokogradnje, završnih građevinskih radova i uređenja okoliša.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="images-container">
            <div className="images" style={{ maxWidth: '800px' }}>
              {renderImages()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
