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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3500);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 500); // Show text after 1 second

    return () => {
      clearInterval(textChangeInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="relative" id='pocetna'>
      <Image
        src="/hero1.jpg"
        alt="Hero Image"
        width={1920}
        height={1080}
        layout="responsive"
        priority={true}
      />
      <div className={`absolute inset-0 flex justify-center items-center text-white text-center z-0 bg-opacity-50 bg-black `}>
        <div className={`${loading ? 'opacity-0' : ''}`}>
          <h1 className='text-2xl  lg:text-6xl font-bold '>
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
        <p className="text-l lg:text-2xl mb-8 font-bold mt-36 lg:mt-48">
          MIR GRAĐEVINARSTVO D.O.O.
        </p>
        </div>
        
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
        
        .text-transition:nth-child(${currentTextIndex + 1}) {
          transition-delay: 0.${currentTextIndex + 5}s; /* Adjust the delay time */
        }
      `}</style>
    </div>
  );
};

export default Hero;
