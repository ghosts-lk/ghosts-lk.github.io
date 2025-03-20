"use client";

import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <nav className="flex fixed inset-x-0 top-0 justify-between items-center px-10 py-5 border-b-2 border-solid backdrop-blur-[10px] bg-zinc-900 bg-opacity-90 border-b-green-500 z-[1000] max-sm:flex-col max-sm:gap-4">
        <h1 className="text-2xl text-green-500">GHOST PROTOCOL</h1>
        <div className="flex gap-8 items-center max-sm:hidden max-sm:flex-col max-sm:items-center">
          <a
            className="relative px-0 py-2 text-white no-underline transition-all duration-[0.3s] ease-[ease] hover:text-green-500"
            href="#about"
          >
            About
          </a>
          <a
            className="text-white no-underline hover:text-green-500 transition-colors duration-300"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-white no-underline hover:text-green-500 transition-colors duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
