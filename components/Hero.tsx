import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src="/hero.jpg"
        alt="Hero Image"
        layout="responsive"
        width={5000}
        height={1}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-0"> {/* Changed z-1 to z-0 */}
        <h1 className="text-7xl font-bold mb-4">GRAĐEVINSKI RADOVI</h1>
        <p className="text-2xl mb-8 font-bold">MIR GRAĐEVINARSTVO D.O.O.</p>
      </div>
    </div>
  );
};

export default Hero;
