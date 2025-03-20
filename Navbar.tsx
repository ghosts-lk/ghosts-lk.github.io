"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="flex justify-between items-center p-5 border-b-2 border-solid border-b-green-500 max-sm:flex-col max-sm:gap-4">
      <h1 className="text-2xl text-green-500">GHOST PROTOCOL</h1>

      <nav className="flex gap-5 max-sm:flex-col max-sm:items-center">
        <a className="text-white no-underline" href="#about">
          About
        </a>
        <a className="text-white no-underline" href="#features">
          Features
        </a>
        <a className="text-white no-underline" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
