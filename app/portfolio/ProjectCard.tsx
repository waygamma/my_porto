import React from "react";

interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isNew?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  type,
  title,
  description,
  imageUrl,
  imageAlt,
  isNew = false,
}) => {
  return (
    <article className="overflow-hidden relative rounded-xl bg-zinc-800 max-sm:-mx-4 max-sm:my-0">
      {isNew && (
        <div className="absolute top-5 left-5 px-2 py-1 text-xs font-medium rounded bg-slate-700">
          NEW!
        </div>
      )}
      <div className="overflow-hidden w-full h-[300px] max-sm:h-[200px]">
        <img src={imageUrl} alt={imageAlt} className="object-cover size-full" />
      </div>
      <div className="p-6 max-sm:p-4">
        <p className="mb-3 text-sm text-zinc-500">{type}</p>
        <h3 className="mb-4 text-2xl font-semibold max-sm:text-xl">{title}</h3>
        <p className="leading-relaxed text-neutral-400">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
