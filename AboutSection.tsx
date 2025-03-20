import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="px-5 py-16 mx-auto my-0 bg-neutral-800 bg-opacity-90 max-w-[1200px]"
    >
      <h3 className="mb-5 text-2xl text-center text-green-500">
        About Ghost Protocol
      </h3>
      <div className="p-8 mx-auto my-0 rounded-lg border border-solid bg-neutral-800 bg-opacity-90 border-green-500 border-opacity-20 max-w-[800px]">
        <p className="mb-5 text-base leading-relaxed text-white">
          Founded in 2024, Ghost Protocol has emerged as a leading force in
          digital security and technology solutions. Our team of certified
          security experts and developers brings over 15 years of combined
          experience in cybersecurity, system administration, and software
          development.
        </p>
        <ul
          className="p-0 mx-0 my-5 text-white"
          aria-label="Our certifications and services"
        >
          <li className="flex gap-2.5 items-center mb-4">
            <span className="text-green-500" aria-hidden="true">
              ✓
            </span>
            <span> ISO 27001 Certified Security Practices </span>
          </li>
          <li className="flex gap-2.5 items-center mb-4">
            <span className="text-green-500" aria-hidden="true">
              ✓
            </span>
            <span> 24/7 Emergency Response Team </span>
          </li>
          <li className="flex gap-2.5 items-center mb-4">
            <span className="text-green-500" aria-hidden="true">
              ✓
            </span>
            <span> End-to-End Encrypted Communications </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
