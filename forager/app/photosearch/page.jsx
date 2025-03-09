import TopMenu from "@/components/PhotoSearch/CameraTopMenu";
import BottomMenu from "@/components/PhotoSearch/CameraBottomMenu";
import FocusFrame from "@/components/PhotoSearch/FocusFrame";
import Image from "next/image";

export default function PhotoSearchPage() {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/images/camera_mushroom.png" alt="Photosearch background" fill className="w-full h-full object-cover"/>
      </div>

      <TopMenu />
      <FocusFrame />

      <div className="flex-grow"></div>
      <div className="absolute bottom-0 w-full">
        <BottomMenu />
      </div>
    </div>
  );
}
