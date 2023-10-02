import React from 'react';

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-600 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mir Građevinarstvo D.O.O.</p>
      </footer>
    );
  };

export default Footer;


