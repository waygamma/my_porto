import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="mt-16">
      <h2 className="mb-10 text-5xl max-w-[800px] max-md:text-4xl max-sm:text-3xl">
        Hi Im Wahyu Gamma, a special human with some ability to love learning and
        working on teamwork.
      </h2>
      <div className="flex gap-5 items-start max-sm:flex-col">
        <div>
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="rounded-full h-[60px] w-[60px]"
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-2.5 text-xl font-semibold">Biography</h3>
          <p className="mb-4 text-neutral-400">
            Getting Buff +1 for learning, Buff +2 for documentation and more
            buff on managing team. Exicited on
            <span className="text-green-500"> React</span>,
            <span className="text-green-500"> UX Research</span> and
            <span className="text-green-500"> Agile</span>.
          </p>
          <div className="flex gap-4">
            <i className="ti ti-brand-instagram text-2xl text-neutral-400" />
            <i className="ti ti-brand-twitter text-2xl text-neutral-400" />
            <i className="ti ti-brand-facebook text-2xl text-neutral-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
