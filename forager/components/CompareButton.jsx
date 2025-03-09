"use client";
import { useRouter } from "next/navigation";

export default function CompareButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/comparison")} 
      className="text-gray-600 text-center font-nunito text-sm font-normal leading-normal flex items-center"
    >
      Compare
      <img src="/icons/compare_button_arrow.svg" alt="compare button arrow" className="ml-2"/>
    </button>
  );
}