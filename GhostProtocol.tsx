"use client";

import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const GhostProtocol: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-zinc-900">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default GhostProtocol;
