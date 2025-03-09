import { useState, useEffect } from "react";
import FastFacts from "@/components/Mushroom/FastFacts";
import MushroomDescription from "@/components/Mushroom/MushroomDescription";
import { mushrooms } from "@/data/development";

export default function MushroomDetails({ name, scientificName, fastFacts }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleAddToFavorites = () => {
    const updatedFavorites = [...favorites];

    const deathCap = mushrooms.find(m => m.name === "Death Cap");
    if (deathCap && !updatedFavorites.includes(deathCap.id)) {
      updatedFavorites.push(deathCap.id);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites); 
  };

  return (
    <div className="w-full max-w-[320px] mx-auto mt-4">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] font-semibold text-[#324053] text-center font-nunito leading-tight">{name}</h2>
          <button onClick={handleAddToFavorites}>
            <img src="/icons/add.svg" alt="add icon" />
          </button>
        </div>
        <p className="text-[20px] font-normal italic text-[rgba(32,59,95,0.75)] font-nunito leading-tight mt-1">{scientificName}</p>
      </div>

      <div className="bg-[#8E4A49] text-white p-4 rounded-[40px] shadow-md mb-2 text-sm w-[320px] h-[168px] flex-shrink-0 mt-2">
        <h3 className="text-[20px] font-bold text-white font-nunito leading-tight">Fast Facts</h3>
        <div className="text-[8px] font-medium text-white font-nunito leading-tight">
          <FastFacts data={fastFacts} />
        </div>
      </div>

      <div className="text-[5px] font-normal text-[#324053] font-nunito leading-tight mt-2">
        <MushroomDescription />
      </div>
    </div>
  );
}


