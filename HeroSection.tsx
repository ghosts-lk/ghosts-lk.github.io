import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-start px-10 pt-24 pb-16 pb-20 mx-auto my-0 w-full max-w-[1200px] min-h-[90vh] max-sm:items-center max-sm:px-5 max-sm:pt-20 max-sm:pb-10 max-sm:text-center">
      <h2 className="relative mb-8 text-5xl tracking-wider leading-tight text-green-500 transition-all ease-in-out duration-[0.4s] max-sm:mb-5 max-sm:text-4xl">
        Secure. Stealthy. Digital.
      </h2>
      <p className="mb-10 text-lg leading-relaxed max-w-[600px] text-white text-opacity-90 max-sm:mb-8 max-sm:text-base">
        Enter the digital realm where security meets style. We are Sri Lanka's
        premier cybersecurity and digital solutions provider, offering
        enterprise-grade security with cutting-edge innovation.{" "}
      </p>
    </section>
  );
};

export default HeroSection;
