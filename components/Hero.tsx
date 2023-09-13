'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const rotatingTexts = [
    'GRAĐEVINSKI RADOVI',
    'NOVOGRADNJA',
    'SISTEM-KLJUČ U RUKE',
    'ZIDARSKI RADOVI',
    'ROHBAU',
    'ADAPTACIJE STANA/KUĆE',
    'KROVOVI',
    'FASADERSKI RADOVI',
    'OBNOVE',
    'SANACIJE',
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Image
        src="/hero.jpg"
        alt="Hero Image"
        width={1920}
        height={1080}
        layout="responsive"
      />
      <div className="absolute inset-0 flex justify-center items-center text-white text-center z-0 bg-opacity-50 bg-black">
        <h1 className="text-4xl  lg:text-7xl font-bold">
          {rotatingTexts.map((text, index) => (
            <span
              key={text}
              className={`text-transition ${
                index === currentTextIndex ? 'active' : ''
              }`}
            >
              {text}
            </span>
          ))}
        </h1>
        <p className="text-xl lg:text-2xl mb-8 font-bold mt-36 lg:mt-48">
          MIR GRAĐEVINARSTVO D.O.O.
        </p>
      </div>
      <style jsx>{`
        .text-transition {
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .text-transition.active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Hero;
