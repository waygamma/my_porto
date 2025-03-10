"use client";
import React, { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className="relative mb-10">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="p-4 w-full text-base text-white rounded-lg bg-zinc-800 border-[none]"
        aria-label="Search snippets"
      />
      <div className="absolute right-4 top-2/4 text-gray-500 -translate-y-2/4">
        <i className="ti ti-search" aria-hidden="true" />
      </div>
    </div>
  );
};

export default SearchBar;
