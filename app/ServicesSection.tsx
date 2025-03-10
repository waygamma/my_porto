import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-semibold">What I do</h2>
      <p className="mb-8 max-w-[600px] text-neutral-400">
        Build and maintain websites,
        <span className="text-green-500"> frontend dev</span> also have a
        mentorship called
        <span className="text-green-500"> MOFON</span>. My motto is Beauty and
        function in equal measure as priority.
      </p>
      <div className="flex gap-5 max-md:flex-col">
        <ServiceCard
          icon="ti-code"
          title="Web Development"
          description="You will receive a customized plan for your fitness journey, and lots of support."
        />
        <ServiceCard
          icon="ti-user-search"
          title="UX Research"
          description="You will receive a customized plan for your fitness journey, and lots of support."
        />
      </div>
    </section>
  );
};

export default ServicesSection;
