import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceProps } from "./types";

const ServicesSection: React.FC = () => {
  const services: ServiceProps[] = [
    {
      name: "System Repair",
      price: "10,000+",
      description:
        "Expert diagnostics and repairs for both hardware and software issues. We bring your system back from the dead.",
    },
    {
      name: "Update and OS installations",
      price: "15,000+",
      description:
        "Clean OS installations and system updates with zero downtime. Your system, evolved.",
    },
    {
      name: "Virus Removal and Recovery",
      price: "10,000+",
      description:
        "Advanced malware elimination and data recovery. We purge the infection, preserve your data.",
    },
    {
      name: "Maintenance and Optimizing",
      price: "10,000+",
      description:
        "Performance tuning and system optimization. Unlock your machine's true potential.",
    },
    {
      name: "Security Assessments",
      price: "20,000+",
      description:
        "Comprehensive security audits and vulnerability analysis. Know your weaknesses before others do.",
    },
    {
      name: "Pentests",
      price: "50,000+",
      description:
        "Professional penetration testing with detailed reports. We break in so others can't.",
    },
    {
      name: "OSINT Reports",
      price: "20,000+",
      description:
        "Deep-dive intelligence gathering and digital footprint analysis. See what the network sees.",
    },
    {
      name: "Web Hosting",
      price: "15,000+",
      description:
        "Secure, high-performance hosting with 99.9% uptime. Your digital fortress in the cloud.",
    },
    {
      name: "Website Building",
      price: "60,000+",
      description:
        "Custom website development with cutting-edge tech. Your vision, our execution.",
    },
    {
      name: "App Building",
      price: "60,000+",
      description:
        "Native and cross-platform app development. Transform your idea into digital reality.",
    },
    {
      name: "UI/UX",
      price: "30,000+",
      description:
        "Intuitive interface design and user experience optimization. Where form meets function.",
    },
  ];

  return (
    <section className="px-5 py-16 bg-zinc-900">
      <h2 className="relative mb-10 text-3xl text-center text-green-500">
        {" "}
        Services & Pricing{" "}
      </h2>
      <div
        id="features"
        className="grid gap-5 px-5 py-0 mx-auto my-0 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-[1200px] max-sm:grid-cols-[1fr]"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
