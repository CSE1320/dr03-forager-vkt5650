const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
  };
  
  const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
  };
  
  export const mushrooms = [
  {
    id: 1,
    name: "Death Cap",
    scientificName: "Amanita phalloides",
    image: "/images/deathcap.jpg",
    defaultFavorite: false,
    toxic: true,
    regions: ["Texas", "North America", "Europe", "Asia"],
    categories: ["Poisonous", "Mythical"],
    fastFacts: { capDiameter: "5-15cm", gillColor: "White", stemColor: "White", habitat: "Temperate regions"},
  },
  {
    id: 2,
    name: "Paddy Straw",
    scientificName: "Volvariella volvacea",
    image: "/images/paddystraw.jpg",
    defaultFavorite: false,
    toxic: false,
    regions: ["Asia", "South America"],
    categories: ["Medicinal", "Good for Broths"],
    fastFacts: { capDiameter: "4-10cm", gillColor: "Pink", stemColor: "White to light brown", habitat: "Rice paddies" },
    matchPercentage: 90,
  },
  {
    id: 3,
    name: "Destroying Angel",
    scientificName: "Amanita bisporigera",
    image: "/images/destroyingangel.jpg",
    defaultFavorite: false,
    toxic: true,
    regions: ["North America", "Europe"],
    categories: ["Poisonous", "Mythical"],
    fastFacts: { capDiameter: "5-10cm", gillColor: "White", stemColor: "White", habitat: "Woodlands" },
    matchPercentage: 80,
  },
  {
    id: 4,
    name: "False Death Cap",
    scientificName: "Amanita citrina",
    image: "/images/false_deathcap.jpg",
    defaultFavorite: false,
    toxic: true,
    regions: ["Europe", "Asia"],
    categories: ["Mythical", "Poisonous"],
    fastFacts: { capDiameter: "4-12cm", gillColor: "Cream", stemColor: "White to yellow", habitat: "Forests" },
    matchPercentage: 70,
  },
  {
    id: 5,
    name: "Puffball",
    scientificName: "Lycoperdon perlatum",
    image: "/images/puffball.jpg",
    defaultFavorite: false,
    toxic: false,
    regions: ["Africa", "North America", "Europe"],
    categories: ["Good for Broths", "Medicinal"],
    fastFacts: { capDiameter: "3-8cm", gillColor: "White", stemColor: "None", habitat: "Grasslands" },
    matchPercentage: 60,
  }
  ];
  
  export const filterLists = [
    {
      category: "Tags",
      pills: ["Favorites", "Recent"].map((label) => ({ label, isSelected: false })),
    },
    {
      category: "Regions",
      pills: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"].map(
        (label) => ({ label, isSelected: false })
      ),
    },
    {
      category: "Category",
      pills: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"].map((label) => ({
        label,
        isSelected: false,
      })),
    },
  ];
  
  export const filterMushrooms = (filters) =>
    filters.length === 0
      ? mushrooms
      : mushrooms.filter((mushroom) =>
          filters.some(
            (filter) =>
              mushroom.regions.includes(filter) ||
              mushroom.categories.includes(filter) ||
              (filter === "Favorites" && mushroom.favorite)
          )
        );
  
  export { warningMessage, dummyData, mushrooms, filterLists }; 
  