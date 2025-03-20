import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center p-16 h-full max-sm:p-8 max-sm:text-center">
      <h2 className="relative mb-5 text-4xl text-green-500">
        Secure. Stealthy. Digital.
      </h2>
      <p className="mb-8 text-base leading-relaxed">
        Enter the digital realm where security meets style.
      </p>
    </section>
  );
};

export default HeroSection;
