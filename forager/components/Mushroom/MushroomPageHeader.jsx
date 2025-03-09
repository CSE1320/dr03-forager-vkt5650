export default function MushroomHeader({ className = "" }) {
    return (
      <div className={`w-full max-w-full h-[117px] flex-shrink-0 rounded-b-[40px] bg-[#579076] shadow-md flex items-center text-white relative ${className}`}>
      
      <button onClick={() => window.history.back()} className="ml-4 mt-8">
      <img src="/icons/back.svg" alt="back button"/>
      </button>
    
      <h1 className="text-center font-nunito text-[32px] font-bold leading-normal w-full ml-4 mt-8" style={{ transform: 'translateX(-6%)' }}>
      Match Results
      </h1>
      </div>
    );
  }