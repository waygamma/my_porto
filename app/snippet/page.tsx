"use client";
import React, { useState } from "react";
import Header from "../Header";
import SearchBar from "./SearchBar";
import SnippetCard from "./SnippetCard";
import Footer from "./Footer";

const CodeSnippetPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const snippets = [
    {
      id: 1,
      title: "Nextjs Starter",
      description: "A dead simple for nextjs project.",
      techIcons: [
        { color: "4299E1", alt: "Tech 1" },
        { color: "38B2AC", alt: "Tech 2" },
      ],
      stars: 8,
    },
    {
      id: 2,
      title: "Frontend Starter Kit",
      description:
        "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
      techIcons: [
        { color: "4299E1", alt: "Tech 1" },
        { color: "ED64A6", alt: "Tech 2" },
        { color: "DD6B20", alt: "Tech 3" },
      ],
      stars: 12,
    },
    {
      id: 3,
      title: "Nextjs Starter 2.0",
      description: "A dead simple for nextjs project with firebase setup.",
      techIcons: [
        { color: "4299E1", alt: "Tech 1" },
        { color: "38B2AC", alt: "Tech 2" },
      ],
      stars: 89,
    },
    {
      id: 4,
      title: "Mobile Web Starter Kit",
      description:
        "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
      techIcons: [
        { color: "4299E1", alt: "Tech 1" },
        { color: "ED64A6", alt: "Tech 2" },
        { color: "DD6B20", alt: "Tech 3" },
      ],
      stars: 22,
    },
    {
      id: 5,
      title: "Nextjs Starter 2.0",
      description: "A dead simple for nextjs project with firebase setup.",
      techIcons: [
        { color: "4299E1", alt: "Tech 1" },
        { color: "38B2AC", alt: "Tech 2" },
      ],
      stars: 89,
    },
    {
      id: 6,
      title: "Mobile Web Starter Kit",
      description:
        "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
      techIcons: [
        { color: "4299E1", alt: "Tech 1" },
        { color: "ED64A6", alt: "Tech 2" },
        { color: "DD6B20", alt: "Tech 3" },
      ],
      stars: 22,
    },
  ];

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  // Filter snippets based on search query
  const filteredSnippets = searchQuery
    ? snippets.filter(
        (snippet) =>
          snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          snippet.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : snippets;

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <main className="px-32 py-5 text-white bg-zinc-900 max-md:px-16 max-md:py-5 max-sm:p-5">
        <Header />
        <section className="p-10 mx-auto my-0 max-w-[1200px] max-sm:p-5">
          <h1 className="mb-6 text-5xl font-semibold max-sm:text-3xl">
            Code Snippet
          </h1>

          <SearchBar
            placeholder="Type your favorite snippet here, hehehe ....."
            onChange={handleSearchChange}
          />

          <div className="grid gap-6 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
            {filteredSnippets.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                title={snippet.title}
                description={snippet.description}
                techIcons={snippet.techIcons}
                stars={snippet.stars}
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CodeSnippetPage;
