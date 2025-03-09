import TopMenu from "@/components/PhotoSearch/CameraTopMenu";
import BottomMenu from "@/components/PhotoSearch/CameraBottomMenu";
import Image from "next/image";

export default function PhotoSearchPage() {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Image src="/images/camera_mushroom.png" alt="Photosearch background" fill className="w-full h-full object-cover"/>
      </div>
      
      <TopMenu />
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <img src="/icons/square.svg" alt="Focus frame" />
      </div>

      <div className="absolute bottom-0 w-full z-10">
        <BottomMenu />
      </div>
    </div>
  );
}


