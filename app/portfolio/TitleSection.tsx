import React from "react";

const TitleSection: React.FC = () => {
  return (
    <section className="flex gap-5 items-center mb-16">
      <h2 className="text-5xl font-bold leading-tight max-md:text-4xl max-sm:text-3xl">
        <span>Project that i</span>
        <div className="text-green-400">has been done</div>
      </h2>
      <div className="text-3xl text-white">
        <i className="ti ti-arrow-right" />
      </div>
    </section>
  );
};

export default TitleSection;
