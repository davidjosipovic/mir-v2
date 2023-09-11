"use client"
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGoTopButton, setShowGoTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 100) {
        setShowGoTopButton(true);
      } else {
        setShowGoTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `bg-blue-500 p-2 fixed right-0 left-0 transition-all duration-300 ${
    scrolled ? 'bg-opacity-100' : 'bg-opacity-0'
  } z-10`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuButtonClasses = 'lg:hidden cursor-pointer text-white text-3xl';
  const menuClasses = `${menuOpen ? 'block' : 'hidden'} lg:block lg:flex text-lg lg:text-xl space-x-4 font-bold mt-4 lg:mt-0`;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const textMarginClasses = `mt-10 lg:mt-0 transition-all duration-300 ${
    menuOpen ? 'lg:my-1' : ''
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-0 lg:my-7">
          <div className="text-white text-2xl lg:text-4xl font-bold">MIR</div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className={menuButtonClasses}>
              &#9776; {/* Hamburger icon */}
            </button>
          </div>
          <ul className={menuClasses}>
            <li className={`text-white ${textMarginClasses}`}>POČETNA</li>
            <li className={`text-white ${textMarginClasses}`}>OPĆENITO</li>
            <li className={`text-white ${textMarginClasses}`}>USLUGE</li>
            <li className={`text-white ${textMarginClasses}`}>PROJEKTI</li>
            <li className={`text-white ${textMarginClasses}`}>O NAMA</li>
            <li className={`text-white ${textMarginClasses}`}>KONTAKT</li>
          </ul>
        </div>
      </div>
      {showGoTopButton && (
        <div className="fixed bottom-4 right-4 p-4  rounded-full bg-gray-300">
          <button onClick={scrollToTop} className="focus:outline-none">
            <img src="/up-arrow.png" alt="Go Back to Top" className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
