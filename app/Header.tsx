import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-5 py-5">
      <h1 className="text-xl font-semibold">Wahyu Gamma</h1>
      <nav className="flex gap-8 max-sm:hidden">
        <Link href="/" className="cursor-pointer">Home</Link>
        <Link href="/portfolio" className="cursor-pointer">Portfolio</Link>
        <Link href="/snippet" className="cursor-pointer">Snippet</Link>
        <Link href="/blog" className="cursor-pointer">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
