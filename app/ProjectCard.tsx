import React from "react";

interface ProjectCardProps {
  image: string;
  type: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  type,
  title,
  description,
}) => {
  return (
    <article className="overflow-hidden rounded-xl bg-zinc-800">
      <div className="overflow-hidden w-full h-[300px] max-sm:h-[200px]">
        <img src={image} alt={title} className="object-cover size-full" />
      </div>
      <p className="mx-5 mt-5 mb-2.5 text-sm text-green-500">{type}</p>
      <h3 className="mx-5 mt-0 mb-2.5 text-2xl font-semibold">{title}</h3>
      <p className="mx-5 mt-0 mb-5 text-neutral-400">{description}</p>
    </article>
  );
};

export default ProjectCard;
