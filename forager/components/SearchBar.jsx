"use client";
import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex items-center bg-white rounded-full shadow-md w-full px-4 py-2">
      <img src="/icons/magnifying_glass.svg" alt="search icon" className="text-gray-500" />
      <input
        type="search"
        placeholder="Search for a mushroom"
        value={searchInput}
        onChange={(e) => {
          const value = e.target.value;
          setSearchInput(value);
          onSearch(value);
        }}
        className="pl-2 w-full h-full outline-none text-black"
      />
    </div>
  );
}
