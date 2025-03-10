import React from "react";
import SnippetCard from "./SnippetCard";

const CodeSnippetsSection: React.FC = () => {
  const snippets = [
    {
      title: "Nextjs Starter",
      description: "A dead simple for nextjs project.",
      icons: ["ti-brand-nextjs", "ti-brand-typescript"],
      stars: 8,
    },
    {
      title: "Frontend Starter Kit",
      description:
        "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
      icons: ["ti-brand-html5", "ti-brand-css3", "ti-brand-javascript"],
      stars: 12,
    },
    {
      title: "Nextjs Starter",
      description: "A dead simple for nextjs project.",
      icons: ["ti-brand-nextjs", "ti-brand-typescript"],
      stars: 8,
    },
    {
      title: "Frontend Starter Kit",
      description:
        "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
      icons: ["ti-brand-html5", "ti-brand-css3", "ti-brand-javascript"],
      stars: 12,
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-semibold">Code Snippet</h2>
      <div className="grid gap-5 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr] mb-3">
        {snippets.map((snippet, index) => (
          <SnippetCard
            key={index}
            title={snippet.title}
            description={snippet.description}
            icons={snippet.icons}
            stars={snippet.stars}
          />
        ))}
      </div>
      <button className="mt-5 px-5 py-2.5 rounded-xl cursor-pointer bg-zinc-800 text-neutral-400">
        See More
      </button>
    </section>
  );
};

export default CodeSnippetsSection;
