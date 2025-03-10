import React from "react";
import MushroomCard from "@/components/MushroomCard";

export default function MushroomList({ mushrooms = [] }) {
  return (
    <div className="grid grid-cols-3 gap-1">
      {mushrooms.length > 0 ? (
        mushrooms.map(({ id, image, name, toxic }) => (
          <MushroomCard key={id} image={image} name={name} toxic={toxic} />
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-3">No mushrooms found.</p>
      )}
    </div>
  );
}