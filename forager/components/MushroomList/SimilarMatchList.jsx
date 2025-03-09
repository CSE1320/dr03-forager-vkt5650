// import { useState } from "react";
// import PercentageDescription from "@/components/PercentageDescription";

// const SimilarMatchList = ({ matches }) => {
//   const [showInfo, setShowInfo] = useState(false);

//   return (
//     <div className="relative w-full">
//     <div className="flex items-center justify-center gap-2 mb-3">
//       <h2 className="text-xl font-bold text-gray-900">Similar Matches</h2>
//       <button onClick={() => setShowInfo(true)} className="text-gray-600 mt-1">
//         <img src="/icons/info_icon.svg" alt="info button"/>
//       </button>
//     </div>

//       {showInfo && <PercentageDescription onClose={() => setShowInfo(false)} />}

//       {/* Match List */}
//       <div className="grid grid-cols-3 gap-2">
//         {matches.map((mushroom, index) => (
//           <div key={index} className="relative bg-white shadow-lg rounded-lg p-2">
//             {/* Match Percentage Badge */}
//             <div className="absolute top-2 left-2 flex items-center">
//               <span
//                 className={`px-2 py-1 text-sm rounded-lg font-bold text-white ${
//                   mushroom.toxic
//                     ? "bg-red-500" // Red for toxic mushrooms
//                     : mushroom.matchPercentage === 90
//                     ? "bg-green-600"
//                     : mushroom.matchPercentage === 60
//                     ? "bg-gray-600"
//                     : "bg-gray-600" // Default gray for anything else
//                 }`}
//               >
//                 {mushroom.matchPercentage}%
//               </span>
//             </div>

//             {/* Mushroom Image */}
//             <img
//               src={mushroom.image}
//               alt={mushroom.name}
//               className="w-full h-auto rounded-md"
//             />

//             {/* Mushroom Name */}
//             <p className="text-center text-lg font-semibold mt-3 text-gray-900">
//               {mushroom.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SimilarMatchList;

import { useState } from "react";
import PercentageDescription from "@/components/PercentageDescription";
import MushroomCard from "@/components/Mushroom/MushroomCard";

const SimilarMatchList = ({ matches }) => {
  const [showInfo, setShowInfo] = useState(false);

  // Only show the specified mushrooms
  const filteredMushrooms = matches.filter((mushroom) =>
    ["Paddy Straw", "Destroying Angel", "False Death Cap", "Puffball"].includes(mushroom.name)
  );

  return (
    <div className="relative w-full">
      {/* Header with Info Button */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <h2 className="text-xl font-bold text-gray-900">Similar Matches</h2>
        <button onClick={() => setShowInfo(true)} className="text-gray-600 mt-1">
          <img src="/icons/info_icon.svg" alt="info button" />
        </button>
      </div>

      {showInfo && <PercentageDescription onClose={() => setShowInfo(false)} />}

      {/* Mushroom Cards in 2x2 Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredMushrooms.map((mushroom) => (
          <div key={mushroom.name} className="flex flex-col items-center">
            {/* MushroomCard component for consistent styling */}
            <div className="relative w-[121px] h-[152px] flex-shrink-0 bg-white shadow-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-md flex justify-center items-center pb-4">
              {/* Match Percentage Badge */}
              <div className="absolute top-2 left-2 flex items-center">
                <span
                  className={`px-2 py-1 text-sm rounded-lg font-bold text-white ${
                    mushroom.toxic
                      ? "bg-red-500" // Red for toxic mushrooms
                      : mushroom.matchPercentage === 90
                      ? "bg-green-600"
                      : mushroom.matchPercentage === 60
                      ? "bg-gray-600"
                      : "bg-gray-600"
                  }`}
                >
                  {mushroom.matchPercentage}%
                </span>
                {mushroom.toxic && (
                  <img src="/icons/red_warning_icon.svg" alt="Warning" className="ml-1 w-4 h-4" />
                )}
              </div>

              {/* Mushroom Image */}
              <div className="w-[113px] h-[123px] flex-shrink-0 bg-gray-300 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={mushroom.image}
                  alt={mushroom.name}
                />
              </div>
            </div>

            {/* Mushroom Name */}
            <p className="w-auto px-2 flex-shrink-0 text-[#203B5F] text-center font-nunito text-[16px] font-semibold leading-normal mt-1 whitespace-nowrap">
              {mushroom.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMatchList;
