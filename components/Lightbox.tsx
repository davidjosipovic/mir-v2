import React from 'react';
import Image from 'next/image';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-80">
      <div className="w-full max-w-screen-lg mx-4 lg:mx-auto">
        <div className="relative">
          <Image
            src={imageUrl}
            alt="Enlarged Image"
            layout="responsive"
            width={500} // Adjust the width as needed
            height={500} // Adjust the height as needed
            className="w-full h-full rounded-lg"
          />
          <button
            className="absolute top-2 right-2 p-2 text-white rounded-full bg-gray-600 hover:bg-gray-800 focus:outline-none"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
