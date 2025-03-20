"use client";

import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";

const GhostProtocol: React.FC = () => {
  return (
    <main className="min-h-screen text-white bg-zinc-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
};

export default GhostProtocol;
