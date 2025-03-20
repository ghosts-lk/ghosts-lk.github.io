import React from "react";

interface ServiceCardProps {
  name: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, price }) => {
  return (
    <article className="relative p-5 border border-green-500 border-solid transition-transform bg-neutral-800 duration-[0.3s] ease-[ease]">
      <h3 className="mb-2.5 text-lg text-green-500">{name}</h3>
      <p className="text-2xl text-white font-bold">
        <span>LKR </span>
        <span>{price}</span>
      </p>
    </article>
  );
};

export default ServiceCard;
