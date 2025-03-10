"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Search from "@/components/SearchBar";
import FilterMushrooms from "@/components/FilterMushrooms";
import "@/styles/globals.css";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedFilters = sessionStorage.getItem("activeFilters");
    if (storedFilters) {
      const selectedFilters = JSON.parse(storedFilters)
        .flatMap((category) => category.pills)
        .filter((pill) => pill.isSelected)
        .map((pill) => pill.label);
      setActiveFilters(selectedFilters);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#397367]">
      <header className="relative flex justify-between items-center w-full p-6 h-40 bg-[#397367]">
        <Image 
          src="/images/dashboard_mushroom.svg" 
          alt="dashboard mushroom"
          width={200} 
          height={200} 
          className="absolute right-0 top-0 z-0"
        />
        <h1 className="relative z-10 text-white leading-tight">
          <span className="text-2xl">Hi,</span><br />
          <span className="font-extrabold text-5xl">Chantelle!</span>
        </h1>
        <Image 
          src="/images/profile.png" 
          alt="profile picture"
          width={50} 
          height={50} 
          className="relative z-10 rounded-full mt-2" 
        />
      </header>

      <section className="relative pt-6 p-4 flex items-center gap-2 bg-white justify-start rounded-t-[41px]">
        <Search onSearch={setSearchQuery} />
        <button onClick={() => router.push("/filter")}>
          <img src="/images/filter.png" alt="filter button"/>
        </button>
      </section>

      <section className="p-4 bg-white">
        <h2 className="text-[#324053] text-left font-nunito text-2xl font-bold leading-normal">
          My Collection
        </h2>
      </section>

      {activeFilters.length > 0 && (
        <section className="p-4 flex gap-2 bg-white">
          {activeFilters.map((filter) => (
            <span key={filter} className="px-3 py-1 bg-[#397367] text-white rounded-full font-bold">
              {filter}
            </span>
          ))}
        </section>
      )}

      <section className="p-4 flex-grow bg-white">
        <FilterMushrooms searchQuery={searchQuery} filters={activeFilters} />
      </section>

      <NavBar activePage="home" />
    </div>
  );
}
