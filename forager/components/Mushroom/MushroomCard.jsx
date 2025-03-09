"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function MushroomCard({ image, name, toxic }) {
  const router = useRouter();

  const handleClick = () => {
    if (name === "Death Cap") {
      router.push(`/mushroom?id=1`); 
    }
  };

  return (
    <div
      className={`flex flex-col items-center ${name === "Death Cap" ? "cursor-pointer" : ""}`}
      onClick={name === "Death Cap" ? handleClick : undefined}
    >
      <div className="relative w-[121px] h-[152px] flex-shrink-0 bg-white shadow-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-md flex justify-center items-center pb-4">
        {toxic && (
          <div className="absolute top-2 left-2">
            <img src="/icons/red_warning_icon.svg" alt="Warning" />
          </div>
        )}

        <div className="w-[113px] h-[123px] flex-shrink-0 bg-gray-300 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={name}
          />
        </div>
      </div>

      <p className="w-[97.576px] h-[22.518px] flex-shrink-0 text-[#203B5F] text-center font-nunito text-[16px] font-semibold leading-normal mt-1">
        {name}
      </p>
    </div>
  );
}
