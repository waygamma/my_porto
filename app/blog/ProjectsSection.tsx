import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      type: "Web Development",
      title: "Bolder Landingpage",
      description:
        "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
      imageUrl: "https://placehold.co/800x400/2d374d/2d374d",
      imageAlt: "Bolder Landing Page Preview",
      isNew: true,
    },
    {
      id: 2,
      type: "Web Development",
      title: "Kerja Mantul Education Management",
      description:
        "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
      imageUrl: "https://placehold.co/800x400/cc4444/cc4444",
      imageAlt: "Kerja Mantul Education Preview",
      isNew: false,
    },
  ];

  return (
    <section className="flex flex-col gap-10 max-md:gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          type={project.type}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          imageAlt={project.imageAlt}
          isNew={project.isNew}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;
