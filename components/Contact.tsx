import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className='mt-14'>
      <h1 className="text-2xl lg:text-4xl mb-3 text-center font-medium">KONTAKT</h1>
      <p className="text-gray-700 text-2xl lg:text-4xl font-bold text-center mb-6">Nazovite nas</p>
      
      <div className="container mx-auto">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <div className="text-container text-xl lg:text-2xl">
              <p>Možete nas nazvati ili nam poslati mail</p>
              <p className="list-none space-y-4 text-xl lg:text-2xl mt-4">
                <i className="fas fa-map-marker-alt"></i>
                City, Adress, Number
              </p>
               
              <ul className="list-none gap-4 text-xl lg:text-2xl mt-4 flex flex-col lg:flex-row">
                <li className="flex items-center">
                  <i className="fas fa-phone"></i>
                  <a href="tel:0911234567">091 123 4567</a>
                </li>
                <li className="flex items-center mt-2 lg:mt-0">
                  <i className="fas fa-phone"></i>
                  <a href="tel:0913217654">091 321 7654</a>
                </li>
                <li className="flex items-center mt-2 lg:mt-0">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:example.example@gmail.com">example.example@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
