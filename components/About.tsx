import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="image-container">
              <img
                className="max-h-700 rounded-lg shadow-lg"
                src="about.jpg"
                alt="Our Team"
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="text-container">
              <h2 className="text-4xl font-semibold mb-4">O NAMA</h2>
              <p className="text-gray-700 leading-relaxed text-center">
                Sa jasnom i kvalitetnom vizijom naše poduzeće usposobljeno je za
                izvedbu i izvršavanje svih građevinskih radova te izgradnju
                obiteljskih kuća te drugih objekata. Na području Rovinja te cijele Istarske županije izvršavamo sve
                potrebne građevinske projekte povezane sa građevinskim radovima po
                principu "ključ u ruke". Unutar spektra tih radova opremiti ćemo
                cijelu vašu kuću, stan ili neki drugi objekt od temelja pa do krova.
                Zidarski radovi, krovopokrivački radovi te svi završni građevinski
                radovi biti će izvršeni od strane eksperta sa mnoštvom iskustva.
              </p>
              <ul className="list-disc list-inside mt-4 text-center">
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

              <div className="mt-8">
                <div className="flex justify-between">
                  <div className="text-center">
                    <div className="text-3xl font-semibold text-blue-600">
                      <span className="counter-value" data-count="9.4">0</span>
                    </div>
                    <div className="text-gray-700">Odlična ocjena</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-semibold text-blue-600">
                      <span className="counter-value" data-count="23">0</span>
                    </div>
                    <div className="text-gray-700">Godina Tradicije</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
