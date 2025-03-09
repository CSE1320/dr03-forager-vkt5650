export default function BottomMenu() {
    return (
        <div className="w-full flex flex-col items-center bg-black bg-opacity-50 backdrop-blur-md pb-3">
    
            {/* icon container */}
            <div className="w-full flex items-center justify-around py-3">
                {/* gallery icon */}
                    <img src="/images/gallery.png" alt="Gallery button" className="w-8 h-8 opacity-75"/>
                {/* capture icon */}
                <img src="/icons/image_capture_icon.svg" alt="capture button" className="w-20 h-20 cursor-pointer" />
                {/* flip icon */}
                    <img src="/images/flip.png" alt="Flip button" className="w-8 h-8 opacity-75"/>
            </div>
            
            <div className="w-20 h-1 bg-white rounded-full mt-2"></div>
    
        </div>
    );
  }
  

  