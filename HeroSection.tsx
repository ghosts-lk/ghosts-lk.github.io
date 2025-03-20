import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex gap-5 max-md:flex-col">
      <div className="w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col justify-center p-16 h-full max-sm:p-8 max-sm:text-center">
          <h2 className="relative mb-5 text-4xl text-green-500">
            Secure. Stealthy. Digital.
          </h2>
          <p className="mb-8 text-base leading-relaxed">
            Enter the digital realm where security meets style.
          </p>
          <button className="px-8 py-4 text-sm text-black bg-green-500 cursor-pointer border-[none]">
            START MISSION
          </button>
        </div>
      </div>

      <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="relative p-5 bg-zinc-900">
          <img
            alt="Ghost Protocol Hero Image"
            src="https://placehold.co/600x600"
            className="object-cover overflow-hidden w-full mix-blend-luminosity brightness-110 aspect-square contrast-[1.2]"
          />
          <div className="absolute px-5 py-2.5 text-xs text-black bg-green-500 -rotate-2 bottom-[30px] right-[30px] shadow-[3px_3px_0_#000] z-[2]">
            CLASSIFIED
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
