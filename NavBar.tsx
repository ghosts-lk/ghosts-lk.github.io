import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="flex justify-between items-center p-5 border-b-2 border-solid border-b-green-500 max-sm:flex-col max-sm:gap-4">
      <h1 className="text-2xl text-green-500">GHOST PROTOCOL</h1>
      <div className="flex gap-5 max-sm:hidden max-sm:flex-col max-sm:items-center">
        <a className="text-white no-underline" href="#about">
          About
        </a>
        <a className="text-white no-underline" href="#features">
          Features
        </a>
        <a className="text-white no-underline" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
