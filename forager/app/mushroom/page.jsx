"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { mushrooms } from "@/data/development";
import NavBar from "@/components/NavBar";
import MushroomHeader from "@/components/MushroomPageHeader";
import ReportError from "@/components/ReportError";
import CompareButton from "@/components/CompareButton";
import SelectedMushroomCard from "@/components/SelectedMushroomCard";
import SimilarMatches from "@/components/SimilarMatches";
import MushroomInfoSection from "@/components/MushroomInfoSection";
import MistakeReminder from "@/components/MistakeReminder";
import Message from "@/components/Message";

export default function MushroomPage() {
  const searchParams = useSearchParams();
  const mushroomId = parseInt(searchParams.get("id"), 10);
  const [showWarning, setShowWarning] = useState(false);

  const mushroom = mushrooms.find((m) => m.id === mushroomId);

  useEffect(() => {
    if (mushroom?.toxic && !sessionStorage.getItem(`seenWarning_${mushroomId}`)) {
      setShowWarning(true);
      sessionStorage.setItem(`seenWarning_${mushroomId}`, "true");
    }
  }, [mushroom, mushroomId]);

  if (!mushroom) {
    return (
      <div className="text-center text-gray-500 mt-4">
        <p>Mushroom not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F2F2F2] flex flex-col items-center">
      <MushroomHeader className="text-sm py-2" />
      
      <div className="overflow-auto flex flex-col items-center px-2 pb-20 w-full max-w-[340px]">
        {showWarning && <MistakeReminder onClose={() => setShowWarning(false)} className="max-w-[90%] text-sm p-2" />}

        <div className="mt-3 w-full max-w-[320px]">
          <div className="flex justify-between items-center mb-1">
            <p className="text-[#314053] text-center font-nunito text-[12px] font-normal leading-normal">
              Not what you expected?
            </p>
            <ReportError className="text-xs px-2 py-1" />
          </div>
          <div className="flex justify-center">
            <Message className="text-xs px-2 py-1" />
          </div>
        </div>

        <div className="flex justify-end w-full max-w-[320px] mt-2">
          <CompareButton className="px-2 py-1 text-xs" />
        </div>

        <div className="relative mt-4 flex flex-col items-center snap-center w-full max-w-[280px]">
          <SelectedMushroomCard image={mushroom.image} toxic={mushroom.toxic} className="max-w-[260px]" />
        </div>

        <MushroomInfoSection 
          name={mushroom.name} 
          scientificName={mushroom.scientificName} 
          fastFacts={{
            capDiameter: mushroom.fastFacts?.capDiameter || "Unknown",
            gillColor: mushroom.fastFacts?.gillColor || "Unknown",
            stemColor: mushroom.fastFacts?.stemColor || "Unknown",
            habitat: mushroom.fastFacts?.habitat || "Unknown"
          }}
        />

        <SimilarMatches matches={mushrooms.filter(m => m.id !== mushroomId)} />
      </div>

      <NavBar />
    </div>
  );
}
