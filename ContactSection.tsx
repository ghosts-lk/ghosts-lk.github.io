import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="px-5 py-16 border-t-2 border-solid bg-zinc-900 border-t-green-500"
    >
      <h2 className="relative mb-10 text-3xl text-center text-green-500">
        {" "}
        Contact Us{" "}
      </h2>
      <div className="flex relative flex-col gap-5 items-center p-9 mx-auto my-0 border border-solid transition-all ease-in-out backdrop-blur-[10px] bg-neutral-800 bg-opacity-90 border-green-500 border-opacity-20 duration-[0.4s] max-w-[600px]">
        <div className="flex gap-2.5 items-center text-base text-green-500 max-sm:flex-col max-sm:text-center">
          <span className="font-[bold]"> Email: </span>
          <a
            className="text-white no-underline hover:text-green-400 transition-colors duration-300"
            href="mailto:ghosts.lk@proton.me"
          >
            {" "}
            ghosts.lk@proton.me{" "}
          </a>
        </div>
        <div className="flex gap-2.5 items-center text-base text-green-500 max-sm:flex-col max-sm:text-center">
          <span className="font-[bold]"> Phone: </span>
          <a
            className="text-white no-underline hover:text-green-400 transition-colors duration-300"
            href="tel:+94710555055"
          >
            {" "}
            +94 710 555 055{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
