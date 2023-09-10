import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src="/hero.jpg"
        alt="Hero Image"
        width={1920}
        height={1080}
        layout="responsive"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-0 bg-opacity-50 bg-black">
        <h1 className="text-4xl lg:text-7xl font-bold mb-4">GRAĐEVINSKI RADOVI</h1>
        <p className="text-xl lg:text-2xl mb-8 font-bold">MIR GRAĐEVINARSTVO D.O.O.</p>
      </div>
    </div>
  );
};

export default Hero;
