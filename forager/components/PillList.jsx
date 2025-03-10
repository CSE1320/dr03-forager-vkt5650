"use client";
import React, { useState } from "react";
import Pill from "@/components/Pill";

export default function PillList({ category, pills, onPillClick }) {
  const [pillStates, setPillStates] = useState(pills);

  const handlePillClick = (clickedLabel) => {
    setPillStates((prevPills) =>
      prevPills.map((pill) =>
        pill.label === clickedLabel ? { ...pill, isSelected: !pill.isSelected } : pill
      )
    );
    onPillClick(clickedLabel);
  };

  return (
    <div>
      <h2 className="text-lg font-bold">{category}</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {pillStates.map((pill) => (
          <Pill key={pill.label} {...pill} onClick={handlePillClick} />
        ))}
      </div>
    </div>
  );
}
