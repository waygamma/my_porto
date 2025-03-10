import React from "react";

interface SnippetCardProps {
  title: string;
  description: string;
  icons: string[];
  stars: number;
}

const SnippetCard: React.FC<SnippetCardProps> = ({
  title,
  description,
  icons,
  stars,
}) => {
  return (
    <article className="p-5 rounded-xl bg-zinc-800">
      <h3 className="mb-2.5 text-lg font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-neutral-400">{description}</p>
      <div className="flex gap-2.5 mb-2.5">
        {icons.map((icon, index) => (
          <i key={index} className={`ti ${icon} text-xl text-neutral-400`} />
        ))}
      </div>
      <p className="text-sm text-neutral-400">{stars} Stars</p>
    </article>
  );
};

export default SnippetCard;
