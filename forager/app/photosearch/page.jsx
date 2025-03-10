import TopBar from "@/components/CameraTopBar";
import BottomBar from "@/components/CameraBottomBar";
import BackgroundScreen from "@/components/BackgroundScreen";

export default function PhotoSearchPage() {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      <BackgroundScreen />
      
      <TopBar />
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <img src="/icons/square.svg" alt="Focus frame" />
      </div>

      <div className="absolute bottom-0 w-full z-10">
        <BottomBar />
      </div>
    </div>
  );
}


