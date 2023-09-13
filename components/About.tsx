import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className=" py-8 lg:py-16 my-40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 sm:mx-auto">
            <div className="image-container md:mt-40 xl:mt-0  mx-auto w-full lg:mx-0">
              <Image
                src="/about.jpg" // Replace with the correct path to your image
                alt="Our Team"
                width={620} // Adjust the width as needed
                height={475} // Adjust the height as needed
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 xl:mt-10 lg:ml-6">
            <div className="text-container text-center lg:text-left">
              <h1 className="text-xl  mb-3 text-center font-medium">O NAMA</h1>
              <p className="text-gray-700 text-3xl font-bold text-center px-4 lg:px-0 leading-tight mb-6">
                Sa jasnom i kvalitetnom vizijom naše poduzeće usposobljeno je za
                izvedbu i izvršavanje svih građevinskih radova te izgradnju
                obiteljskih kuća te drugih objekata.
              </p>
              <p className='text-xl lg:leading-relaxed px-4 lg:px-0'>
                Na području Rovinja te cijele Istarske županije izvršavamo sve
                potrebne građevinske projekte povezane sa građevinskim radovima po
                principu &quot;ključ u ruke&quot;. Unutar spektra tih radova opremiti ćemo
                cijelu vašu kuću, stan ili neki drugi objekt od temelja pa do krova.
                Zidarski radovi, krovopokrivački radovi te svi završni građevinski
                radovi biti će izvršeni od strane eksperta sa mnoštvom iskustva.
              </p>
              <ul className="list-disc list-inside mt-4 text-xl lg:leading-relaxed">
                <li className="text-gray-700">
                  Za izvedbu naših radova koristimo samo najkvalitetnije materijale
                  te najsuvremeniju mehanizaciju, koja nam omogućava izvedbu svih
                  projekata u korektnim rokovima.
                </li>
                <li className="text-gray-700">
                  Uz visokogradnju nudimo vam također i uređenje okoliša i dvorišta
                  te ujedno i izgradnju bazena.
                </li>
              </ul>
              <ul className='flex mt-6 lg:mt-10 px-4 lg:px-0'>
                <li className='text-5xl font-bold pr-4 '>9.4</li>
                <li className='pr-7 text-base lg:text-lg'>Odlična<br/>ocjena</li>
                <li className='text-5xl font-bold pr-4 '>24</li>
                <li className='text-base lg:text-lg'>Godina<br/>tradicije</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
