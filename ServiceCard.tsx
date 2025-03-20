"use client";

import React from "react";
import { ServiceProps } from "./types";

const ServiceCard: React.FC<ServiceProps> = ({ name, price, description }) => {
  return (
    <article className="service-card glitch-hover relative p-9 rounded-lg border border-solid transition-all ease-in-out backdrop-blur-[10px] bg-neutral-800 bg-opacity-90 border-green-500 border-opacity-20 duration-[0.4s]">
      <h3 className="mb-5 text-2xl font-bold tracking-wide text-green-500 duration-[0.3s] ease-[ease] transition-[color]">
        {name}
      </h3>
      <p className="mb-5 text-sm leading-relaxed min-h-11 text-neutral-400">
        {description}
      </p>
      <div className="flex justify-between items-center mt-auto">
        <p className="flex gap-1 items-baseline text-2xl font-extrabold tracking-wide text-white">
          <span className="text-sm text-stone-500">LKR</span>
          <span>{price}</span>
        </p>
        <a
          className="flex justify-center items-center no-underline rounded-full border border-solid transition-all ease-in-out cursor-pointer border-green-500 border-opacity-30 duration-[0.4s] h-[45px] w-[45px]"
          href="tel:+94710555055"
          aria-label="Call for service"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#33ff33"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
