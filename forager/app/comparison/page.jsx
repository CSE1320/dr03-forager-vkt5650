"use client";

import ComparisonHeader from "@/components/ComparisonPageHeader";
import Message from "@/components/Message"; 
import ComparisonTable from "@/components/ComparisonTable";
import NavBar from "@/components/NavBar";

const MushroomComparisonPage = () => {
  const mushrooms = {
    user: {
      name: "Your Photo",
      image: "/images/camera_mushroom.png",
      capShape: "Flat",
      capColor: "Brown",
      capTexture: "Smooth",
      gillType: "Free",
      gillColor: "White",
      stemShape: "Slender",
      stemColor: "White",
      stemRing: "Absent",
      habitat: "?",
    },
    compared: {
      name: "Death Cap",
      image: "/images/deathcap.jpg",
      capShape: "Flat",
      capColor: "Yellow",
      capTexture: "Smooth",
      gillType: "Free",
      gillColor: "White",
      stemShape: "Slender",
      stemColor: "White",
      stemRing: "Absent",
      habitat: "Near oak/beech",
      matchPercentage: 97,
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#F2F2F2] flex flex-col items-center pb-20 font-nunito">
      <ComparisonHeader className="text-sm py-2" />
      
      <div className="mt-6">
        <Message />
      </div>

      <div className="flex justify-between items-center gap-6 mt-6 px-4 w-full max-w-[95%]">
        {[mushrooms.user, mushrooms.compared].map((mushroom, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="border border-gray-400 shadow-lg rounded-lg p-4 bg-white w-40 h-56 flex justify-center items-center relative">
              <img src={mushroom.image} alt={mushroom.name} className="w-36 h-36 rounded-md shadow-md" />

              {mushroom.matchPercentage && (
                <div className="absolute top-2 left-2 flex items-center">
                  <img src="/images/skull.jpg" alt="Skull Icon" className="w-[17.875px] h-[22px] flex-shrink-0 mr-1" />
                  <div className="bg-red-500 text-white px-2 py-1 text-xs rounded-md shadow-md">
                    {mushroom.matchPercentage}% Match
                  </div>
                </div>
              )}
            </div>
            <p className="text-[#203B5F] text-center font-nunito text-[25px] font-bold leading-normal mt-2">
              {mushroom.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 w-full flex justify-center px-4">
        <div className="w-full max-w-[500px]">
          <ComparisonTable userMushroom={mushrooms.user} comparedMushroom={mushrooms.compared} />
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default MushroomComparisonPage;

