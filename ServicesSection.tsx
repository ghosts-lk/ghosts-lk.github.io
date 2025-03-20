import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "Repair",
    price: "10,000+",
  },
  {
    name: "Update and OS installations",
    price: "15,000+",
  },
  {
    name: "Virus Removal and Recovery",
    price: "10,000+",
  },
  {
    name: "Maintenance and Optimizing",
    price: "10,000+",
  },
  {
    name: "Security Assessments",
    price: "20,000+",
  },
  {
    name: "Pentests",
    price: "50,000+",
  },
  {
    name: "OSINT Reports",
    price: "20,000+",
  },
  {
    name: "Web Hosting",
    price: "15,000+",
  },
  {
    name: "Website Building",
    price: "60,000+",
  },
  {
    name: "App Building",
    price: "60,000+",
  },
  {
    name: "UI/UX",
    price: "30,000+",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="px-5 py-16 bg-zinc-900">
      <h2 className="relative mb-10 text-3xl text-center text-green-500">
        Services & Pricing
      </h2>
      <div
        id="contact"
        className="grid gap-5 px-5 py-0 mx-auto my-0 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-[1200px] max-sm:grid-cols-[1fr]"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} name={service.name} price={service.price} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
