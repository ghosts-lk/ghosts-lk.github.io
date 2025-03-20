import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="px-5 py-16 border-t-2 border-solid bg-zinc-900 border-t-green-500">
      <h2 className="relative mb-10 text-3xl text-center text-green-500">
        Contact Us
      </h2>
      <div className="flex relative flex-col gap-5 items-center p-8 mx-auto my-0 border border-green-500 border-solid bg-neutral-800 max-w-[600px]">
        <div className="flex gap-2.5 items-center text-base text-green-500 max-sm:flex-col max-sm:text-center">
          <span className="font-bold">Email:</span>
          <a
            className="text-white no-underline"
            href="mailto:ghosts.lk@proton.me"
          >
            ghosts.lk@proton.me
          </a>
        </div>
        <div className="flex gap-2.5 items-center text-base text-green-500 max-sm:flex-col max-sm:text-center">
          <span className="font-bold">Phone:</span>
          <a className="text-white no-underline" href="tel:+94710555055">
            +94 710 555 055
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
