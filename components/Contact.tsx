import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className='mt-14'>
      <h1 className="text-xl mb-3 text-center font-medium">KONTAKT</h1>
      <p className="text-gray-700 text-4xl font-bold text-center mb-6">Nazovite nas</p>
      
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container text-xl">
              <p>Možete nas nazvati ili nam poslati mail</p>
              <p className="list-none space-y-4 text-xl ">
                <i className="fas fa-map-marker-alt"></i>
                City, Adress, Number</p>
               
              <ul className="list-none gap-10 text-xl flex">
                <li className="flex items-center">
                  <i className="fas fa-phone"></i>
                  <a href="tel:003024630820">091 123 4567</a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone"></i>
                  <a href="tel:003024630820">091 321 7654</a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:office@aria.com">example.example@gmail.com</a>
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
