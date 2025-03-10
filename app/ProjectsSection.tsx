import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-semibold">Featured Project</h2>
      <div className="flex flex-col gap-8 mb-3">
        <ProjectCard
          image="https://placehold.co/600x300/444444/444444"
          type="Web Development"
          title="Bolder Landingpage"
          description="Sorrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
        />
        <ProjectCard
          image="https://placehold.co/600x300/444444/444444"
          type="Web Development"
          title="Kerja Mantul Education Management"
          description="Sorrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
        />
      </div>
      <button className="px-5 py-2.5 mt-5 rounded-xl cursor-pointer bg-zinc-800 text-neutral-400">
        See More
      </button>
    </section>
  );
};

export default ProjectsSection;
