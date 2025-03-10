import React from "react";

export default function Pill({ label, isSelected, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`px-4 py-2 rounded-full cursor-pointer transition-colors 
        ${isSelected ? "greenBackground text-white" : "bg-gray-300 text-black"}
      `}
    >
      {label}
    </button>
  );
}
