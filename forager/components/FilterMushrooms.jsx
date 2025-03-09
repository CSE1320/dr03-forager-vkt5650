import React from "react";
import { mushrooms } from "@/data/development";
import MushroomCard from "@/components/Mushroom/MushroomCard";

export default function FilterMushrooms({ searchQuery, filters }) {
  const lowercasedQuery = searchQuery.toLowerCase();
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const filteredMushrooms = mushrooms.filter((mushroom) => {
    const isFavorite = storedFavorites.includes(mushroom.id);

    const matchesFilter =
      filters.length === 0 ||  
      filters.some(filter =>
        mushroom.regions.includes(filter) ||  
        mushroom.categories.includes(filter) || 
        (filter === "Favorites" && isFavorite) 
      );

    const matchesSearch =
      lowercasedQuery === "" ||
      mushroom.name.toLowerCase().includes(lowercasedQuery) ||
      mushroom.scientificName.toLowerCase().includes(lowercasedQuery);

    return matchesFilter && matchesSearch; 
  });

  return (
    <div className="grid grid-cols-3 gap-6">
      {filteredMushrooms.length > 0 ? (
        filteredMushrooms.map((mushroom) => (
          <MushroomCard
            key={mushroom.id}
            image={mushroom.image}
            name={mushroom.name}
            toxic={mushroom.toxic}
          />
        ))
      ) : (
        <p className="text-gray-500 col-span-3 text-center">No mushrooms found.</p>
      )}
    </div>
  );
}
