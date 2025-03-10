"use client";

import React from "react";
import Header from "../Header";
import TitleSection from "./TitleSection";
import ProjectsSection from "./ProjectsSection";

const PortfolioPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="px-32 py-5 text-white bg-zinc-900 max-md:px-16 max-md:py-5 max-sm:p-5">
        <Header />
        <div className="mx-auto my-0 max-w-[1200px]">
          <TitleSection />
          <ProjectsSection />
        </div>
      </main>
    </>
  );
};

export default PortfolioPage;
