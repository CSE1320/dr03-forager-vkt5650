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
    favorite: true,
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
    favorite: true,
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
    favorite: true,
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
    favorite: false,
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
    favorite: false,
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
      pills: [
        { label: "Favorites", isSelected: false },
        { label: "Recent", isSelected: false },
      ],
    },
    {
      category: "Regions",
      pills: [
        { label: "Texas", isSelected: false },
        { label: "North America", isSelected: false },
        { label: "South America", isSelected: false },
        { label: "Asia", isSelected: false },
        { label: "Europe", isSelected: false },
        { label: "Africa", isSelected: false },
      ],
    },
    {
      category: "Category",
      pills: [
        { label: "Poisonous", isSelected: false },
        { label: "Medicinal", isSelected: false },
        { label: "Mythical", isSelected: false },
        { label: "Good for Broths", isSelected: false },
      ],
    },
  ];
  
  export function filterMushrooms(filters) {
    if (filters.length === 0) {
        return mushrooms; 
    }
  
    return mushrooms.filter(mushroom =>
        filters.some(filter =>
            mushroom.regions.includes(filter) ||
            mushroom.categories.includes(filter) ||
            (filter === "Favorites" && mushroom.favorite)
        )
    );
  }
  
  export { warningMessage, dummyData, mushrooms, filterLists }; 
  