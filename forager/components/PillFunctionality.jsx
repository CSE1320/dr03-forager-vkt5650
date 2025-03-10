import React from "react";
import PillList from "@/components/PillList";

export default function PillFunctionality({ lists, onPillClick }) {
  return (
    <div className="flex flex-col gap-6">
      {lists.map(({ category, pills }, index) => (
        <div key={category}>
          <h2 className="text-lg font-bold text-black">{category}</h2>
          <PillList pills={pills} onPillClick={(pillLabel) => onPillClick(index, pillLabel)} />
        </div>
      ))}
    </div>
  );
}
