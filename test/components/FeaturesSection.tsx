import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      iconSrc: "https://placehold.co/100x100",
      title: "Enhanced Security",
      description: "State-of-the-art protection",
      altText: "Security Feature Icon",
    },
    {
      iconSrc: "https://placehold.co/100x100",
      title: "Lightning Fast",
      description: "Optimized performance",
      altText: "Speed Feature Icon",
    },
    {
      iconSrc: "https://placehold.co/100x100",
      title: "Cloud Sync",
      description: "Seamless integration",
      altText: "Sync Feature Icon",
    },
  ];

  return (
    <section className="px-5 py-16 bg-neutral-800">
      <div className="flex gap-5 max-sm:flex-col">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${
              index > 0 ? "ml-5 " : ""
            }w-[33%] max-sm:ml-0 max-sm:w-full`}
          >
            <FeatureCard
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
              altText={feature.altText}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
