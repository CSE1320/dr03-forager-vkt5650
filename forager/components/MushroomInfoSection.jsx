import { useState, useEffect } from "react";
import FastFacts from "@/components/FastFacts";
import MushroomDescription from "@/components/MushroomDescription";
import { mushrooms } from "@/data/development";

export default function MushroomInfoSection({ name, scientificName, fastFacts }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }
  }, []);

  const handleAddToFavorites = () => {
    setFavorites((prevFavorites) => {
      const mushroomData = mushrooms.find(mushroom => mushroom.name === name);
      if (!mushroomData) return prevFavorites;

      const updatedFavorites = prevFavorites.includes(mushroomData.id)
        ? prevFavorites.filter(id => id !== mushroomData.id)  // Remove if already in favorites
        : [...prevFavorites, mushroomData.id];  // Add if not in favorites

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <div className="w-full max-w-[320px] mx-auto mt-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-[24px] font-semibold text-[#324053] text-center font-nunito leading-tight">{name}</h2>
        <button onClick={handleAddToFavorites}>
          <img 
            src={favorites.includes(mushrooms.find(m => m.name === name)?.id) 
              ? "/icons/add.svg" 
              : "/icons/add.svg"} 
            alt="add icon" 
          />
        </button>
      </div>
      <p className="text-[20px] font-normal italic text-[rgba(32,59,95,0.75)] font-nunito leading-tight">{scientificName}</p>

      <div className="bg-[#8E4A49] text-white p-4 rounded-[40px] shadow-md mb-2 text-sm w-[320px] h-[168px] flex-shrink-0 mt-2">
        <h3 className="text-[20px] font-bold font-nunito leading-tight">Fast Facts</h3>
        <FastFacts data={fastFacts} />
      </div>

      <MushroomDescription className="text-[5px] font-normal text-[#324053] font-nunito leading-tight mt-2" />
    </div>
  );
}
