import { useState } from "react";
import PercentInfo from "@/components/PercentInfo";

const SimilarMatches = ({ matches }) => {
  const [showInfo, setShowInfo] = useState(false);
  const filteredMushrooms = matches.filter((mushroom) => ["Paddy Straw", "Destroying Angel", "False Death Cap", "Puffball"].includes(mushroom.name));

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center gap-2 mb-3">
        <h2 className="text-xl font-bold text-gray-900">Similar Matches</h2>
        <button onClick={() => setShowInfo(true)} className="text-gray-600 mt-1">
          <img src="/icons/info_icon.svg" alt="info button" />
        </button>
      </div>

      {showInfo && <PercentInfo onClose={() => setShowInfo(false)} />}

      <div className="grid grid-cols-2 gap-4">
        {filteredMushrooms.map((mushroom) => (
          <div key={mushroom.name} className="flex flex-col items-center">
          
            <div className="relative w-[121px] h-[152px] flex-shrink-0 bg-white shadow-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-md flex justify-center items-center pb-4">
              <div className="absolute top-2 left-2 flex items-center">
                <span
                  className={`px-2 py-1 text-sm rounded-lg font-bold text-white`}
                  style={{ backgroundColor: mushroom.toxic
                      ? "#FF6666"
                      : mushroom.matchPercentage === 90
                      ? "rgba(115, 216, 159, 0.90)"
                      : mushroom.matchPercentage === 60
                      ? "rgba(165, 165, 165, 0.90)"
                      : "rgba(165, 165, 165, 0.90)"
                  }}
                >
                  {mushroom.matchPercentage}%
                </span>
                {mushroom.toxic && (<img src="/icons/red_warning_icon.svg" alt="Warning" className="ml-1 w-4 h-4" />)}
              </div>

              <div className="w-[113px] h-[123px] flex-shrink-0 bg-gray-300 overflow-hidden">
                <img className="w-full h-full object-cover" src={mushroom.image} alt={mushroom.name}/>
              </div>
            </div>

            <p className="w-auto px-2 flex-shrink-0 text-[#203B5F] text-center font-nunito text-[16px] font-semibold leading-normal mt-1 whitespace-nowrap">
              {mushroom.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMatches;