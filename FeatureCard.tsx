import React from "react";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
  altText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  description,
  altText,
}) => {
  return (
    <article className="p-5 text-center">
      <img
        alt={altText}
        src={iconSrc}
        className="object-contain overflow-hidden w-full aspect-square"
      />
      <h3 className="mt-5 text-green-500">{title}</h3>
      <p className="mt-2.5 text-sm">{description}</p>
    </article>
  );
};

export default FeatureCard;
