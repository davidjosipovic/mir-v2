"use client"
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `bg-blue-500 p- fixed right-0 left-0 transition-all duration-300 ${
    scrolled ? 'bg-opacity-100' : 'bg-opacity-0'
  } z-10`; // Added z-10 to set a higher z-index

  const textMarginClasses = `${scrolled ? 'my-1' : 'mt-10'} transition-all duration-300`;

  return (
    <nav className={navbarClasses}>
      <div className="flex justify-between items-center mx-28 my-8 z-20"> {/* Added z-20 to set a higher z-index */}
        <div className="text-white text-2xl font-bold">MIR</div>
        <ul className={`flex text-l space-x-4 font-bold ${textMarginClasses}`}>
          <li className="text-white">POČETNA</li>
          <li className="text-white">OPĆENITO</li>
          <li className="text-white">USLUGE</li>
          <li className="text-white">PROJEKTI</li>
          <li className="text-white">O NAMA</li>
          <li className="text-white">KONTAKT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
