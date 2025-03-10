"use client";
import { useRouter } from "next/navigation";

export default function MushroomCard({ image, name, toxic }) {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col items-center ${name === "Death Cap" ? "cursor-pointer" : ""}`}
      onClick={name === "Death Cap" ? () => router.push(`/mushroom?id=1`) : undefined}
    >
      <div className="relative w-[121px] h-[152px] bg-white shadow-md rounded-md flex justify-center items-center pb-4">
        {toxic && (
          <img src="/icons/red_warning_icon.svg" alt="Warning" className="absolute top-2 left-2" />
        )}
        <img className="w-[113px] h-[123px] object-cover bg-gray-300 rounded-md" src={image} alt={name} />
      </div>
      <p className="w-[97.576px] text-[#203B5F] text-center font-nunito text-[16px] font-semibold mt-1">
        {name}
      </p>
    </div>
  );
}

