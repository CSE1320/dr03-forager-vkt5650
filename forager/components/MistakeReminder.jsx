export default function MistakeReminder({ onClose }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-nunito">
      <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg relative w-11/12 max-w-md">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <img src="/icons/icon_warning.svg" alt="Warning Icon" className="w-6 h-6 mr-2"/>
            <h2 className="text-lg font-bold">ATTENTION!</h2>
          </div>
          <button className="text-white text-lg font-bold" onClick={onClose}>
            <img src="/icons/X.svg" alt="X button"/>
          </button>
        </div>
        <p className="mt-2 text-sm leading-tight text-center">
          Our system can make mistakes! Remember to <span className="font-bold">verify</span> important information
          and use your own judgment to determine if any mushroom is safe. Be sure to use the 
          <span className="font-bold text-white-200"> "Report Error"</span> button if you suspect a mistake.
        </p>
      </div>
    </div>
  );
}