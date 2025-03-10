import React, { useMemo } from "react";
import { mushrooms } from "@/data/development";
import MushroomCard from "@/components/MushroomCard";

export default function FilterMushrooms({ searchQuery, filters }) {
  const lowercasedQuery = searchQuery.toLowerCase();

  const storedFavorites = useMemo(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    }
    return [];
  }, []);

  const filteredMushrooms = useMemo(() => {
    return mushrooms.filter((mushroom) => {
      const isFavorite = storedFavorites.includes(mushroom.id);

      const matchesFilter =
        filters.length === 0 ||
        filters.some((filter) =>
          ["regions", "categories"].some((key) => mushroom[key]?.includes(filter)) ||
          (filter === "Favorites" && isFavorite)
        );

      const matchesSearch =
        !lowercasedQuery ||
        [mushroom.name, mushroom.scientificName].some((field) =>
          field.toLowerCase().includes(lowercasedQuery)
        );

      return matchesFilter && matchesSearch;
    });
  }, [searchQuery, filters, storedFavorites]);

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