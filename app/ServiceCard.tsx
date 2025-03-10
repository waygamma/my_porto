import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex-1 p-8 rounded-xl bg-zinc-800">
      <i className={`ti ${icon} mb-4 text-2xl text-green-500`} />
      <h3 className="mb-2.5 text-lg font-semibold">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </article>
  );
};

export default ServiceCard;
