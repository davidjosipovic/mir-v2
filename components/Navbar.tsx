import React from 'react';
import 'https://www.w3schools.com/w3css/4/w3.css'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">My Website</div>
          <ul className="flex space-x-4">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Services</li>
            <li className="text-white">Contact</li>
          </ul>
          <i className="fa fa-home"></i>
            <i className="fa fa-search"></i>
            <i className="fa fa-cloud"></i>
            <i className="fa fa-trash"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
