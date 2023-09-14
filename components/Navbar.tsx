"use client"
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGoTopButton, setShowGoTopButton] = useState(false);

  const navItems = [
    { label: 'POČETNA', id: 'pocetna' },
    { label: 'OPĆENITO', id: 'opcenito' },
    { label: 'USLUGE', id: 'usluge' },
    { label: 'PROJEKTI', id: 'projekti' },
    { label: 'O NAMA', id: 'onama' },
    { label: 'KONTAKT', id: 'kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 300) {
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

  const navbarClasses = `  bg-gray-600 p-2 fixed w-full transition-all duration-300 ${
    scrolled ? 'lg:bg-opacity-100' : 'lg:bg-opacity-0 lg:mt-8'
  } z-10`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToId = (id:string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 100; // Adjust this value as needed
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const menuButtonClasses = 'lg:hidden cursor-pointer text-white text-3xl ';
  const menuIconContainerClasses = `lg:hidden flex self-start  z-20 ${
    menuOpen ? 'lg:hidden' : 'lg:block'
  } transition-opacity duration-300`;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const textMarginClasses = ` ml-4  mt-4 lg:mt-0 transition-all duration-300 ${
    menuOpen ? 'lg:my-1' : ''
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container lg:flex mx-auto">
        <div className="flex lg:flex-none justify-between items-center my-2 lg:my-4">
          <div className="text-orange-400 text-2xl lg:text-4xl font-bold self-start"><a href="#pocetna">MIR</a></div>
          
          <div className={menuIconContainerClasses}>
            <button onClick={toggleMenu} className={menuButtonClasses}>
              &#9776; {/* Hamburger icon */}
            </button>
          </div>

        </div>
        <ul className={`lg:flex lg:mt-6 lg:ml-auto text-lg lg:text-xl float-right space-x-4 font-bold  ${menuOpen ? 'block' : 'hidden relative'}`}>
            {navItems.map((item, index) => (
              <li key={index} className={`text-white hover:text-orange-400 hover:cursor-pointer ${textMarginClasses}`}>
                <a  onClick={() => scrollToId(item.id)}>{item.label}</a>
              </li>
            ))}
          </ul>
      </div>
      {showGoTopButton && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={scrollToTop}
            className="focus:outline-none bg-gradient-to-r from-white to-orange-400 hover:from-white hover:to-gray-500 rounded-full p-3"
          >
            <img
              src="/up-arrow.png"
              alt="Go Back to Top"
              className="w-8 h-8 text-white"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
