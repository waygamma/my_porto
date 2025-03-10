import React from "react";

interface TechIcon {
  color: string;
  alt: string;
}

interface SnippetCardProps {
  title: string;
  description: string;
  techIcons: TechIcon[];
  stars: number;
}

const SnippetCard: React.FC<SnippetCardProps> = ({
  title,
  description,
  techIcons,
  stars,
}) => {
  return (
    <article className="overflow-hidden rounded-xl bg-zinc-800">
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold max-sm:text-xl">{title}</h3>
        <p className="mb-6 text-gray-400">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {techIcons.map((icon, index) => (
              <img
                key={index}
                src={`https://placehold.co/24x24/${icon.color}/${icon.color}`}
                alt={icon.alt}
                className="w-6 h-6 rounded"
              />
            ))}
          </div>
          <div className="flex gap-2 items-center text-amber-300">
            <i className="ti ti-star" aria-hidden="true" />
            <span>{stars} Stars</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SnippetCard;
