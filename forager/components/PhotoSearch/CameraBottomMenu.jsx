export default function BottomMenu() {
  return (
      <div className="w-full flex flex-col items-center bg-black bg-opacity-50 backdrop-md pb-3">
  
              {/* icon container */}
          <div className="w-full flex items-center justify-around py-3">
              {/* gallery icon */}
              <div className="cursor-pointer flex justify-center items-center text-white text-2xl">
                      <img src="/images/gallery.png" alt="Gallery button" className="w-8 h-8 opacity-75 hover:opacity-100 transition"/>
              </div>
              {/* capture icon */}
                      <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center cursor-pointer">
                          <div className="w-16 h-16 bg-white rounded-full cursor-pointer hover:bg-gray-500 transition" />
                      </div>
              {/* flip icon */}
              <div className="cursor-pointer flex justify-center items-center text-white text-2xl">
                      <img src="/images/flip.png" alt="Flip button" className="w-8 h-8 opacity-75 hover:opacity-100 transition"/>
              </div>
          </div>
          <div className="w-20 h-1 bg-white rounded-full mt-2"></div>
  
      </div>
  );
  }