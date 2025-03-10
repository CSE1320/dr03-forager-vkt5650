"use client";
import React from "react";
import MushroomCard from "@/components/MushroomCard";

export default function MushroomList({ mushrooms = [] }) {
  if (!mushrooms.length) {
    return <p className="text-gray-500 text-center col-span-3 mt-4">No mushrooms found.</p>;
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
      {mushrooms.map((mushroom) => (
        <MushroomCard key={mushroom.name} {...mushroom} warning={mushroom.toxic} />
      ))}
    </div>
  );
}
