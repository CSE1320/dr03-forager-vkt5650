"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PillFunctionality from "@/components/PillFunctionality";
import { filterLists } from "@/data/development";

export default function FilterPage() {
  const router = useRouter();
  const [filters, setFilters] = useState(() => {
    return JSON.parse(sessionStorage.getItem("activeFilters")) || filterLists;
  });

  const handlePillClick = (categoryIndex, pillLabel) => {
    setFilters((prevFilters) => {
      const updatedFilters = prevFilters.map((category, index) =>
        index === categoryIndex
          ? {
              ...category,
              pills: category.pills.map((pill) =>
                pill.label === pillLabel
                  ? { ...pill, isSelected: !pill.isSelected }
                  : pill
              ),
            }
          : category
      );

      sessionStorage.setItem("activeFilters", JSON.stringify(updatedFilters));
      return updatedFilters;
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[95%] max-w-md h-[90%] bg-white rounded-xl shadow-lg p-6 flex flex-col">
        <div className="flex justify-center items-center border-b pb-3 pt-2 relative">
          <h1 className="font-bold text-2xl text-black">FILTER</h1>
          <button onClick={router.back} className="absolute right-4 text-black text-3xl">
            <img src="/icons/dark_X.svg" alt="X button"/>
          </button>
        </div>

        <div className="mt-4 flex-grow overflow-y-auto">
          <PillFunctionality lists={filters} onPillClick={handlePillClick} />
        </div>
      </div>
    </div>
  );
}
