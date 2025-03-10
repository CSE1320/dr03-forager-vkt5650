export default function SelectedMushroomCard({ image, toxic }) {
    return (
      <div className="relative w-[290px] h-[350px] bg-white rounded-lg shadow-md p-3 pb-6 flex flex-col items-center flex-shrink-0 shadow-[2px_4px_4px_rgba(168,148,148,0.25)]">
    
        <div className="absolute top-[12px] left-3 flex items-center">
          <img src="/images/skull.jpg" className="w-[17.875px] h-[22px] flex-shrink-0" alt="skull icon" />
        </div>

        <div className="absolute top-2 left-12 bg-red-500 text-white text-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
          <img src="/icons/icon_warning.svg" className="w-4 h-4" alt="warning icon" />
          <span className="font-semibold">97% Match</span>
        </div>
      
        <div className="mt-8 w-[250px] h-[250px]"> 
          <img className="w-full h-full object-cover rounded-lg" src={image} alt="mushroom"/>
        </div>
      </div>
    );
  }