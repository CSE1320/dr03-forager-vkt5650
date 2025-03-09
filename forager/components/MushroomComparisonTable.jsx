import { useState } from "react";

const MushroomComparisonTable = ({ userMushroom, comparedMushroom }) => {
  const [editableMushroom, setEditableMushroom] = useState(userMushroom);
  const [editFeature, setEditFeature] = useState(null);
  const [newValue, setNewValue] = useState("");

  const handleEditClick = (feature) => {
    setEditFeature(feature);
    setNewValue(editableMushroom[feature]);
  };

  const handleSave = () => {
    if (editFeature !== null) {
      setEditableMushroom({ ...editableMushroom, [editFeature]: newValue });
      setEditFeature(null);
    }
  };

  return (
    <div className="w-full max-w-[500px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg p-4 overflow-x-auto mx-auto">
      <table className="w-full border border-gray-300 text-base">
        <tbody>
          {Object.keys(userMushroom).map((feature, index) => {
            if (feature === "name" || feature === "image") return null;

            return (
              <tr key={index} className="border-t border-gray-300">
                {/* Left Column (Editable User Input) */}
                <td className="px-4 py-3 text-gray-700 border-r border-gray-300 w-[30%] align-middle">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEditClick(feature)}
                      className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-[#D9D9D9] border border-gray-400"
                    >
                      <img src="/icons/small_x.svg" alt="x button" />
                    </button>
                    <span className="underline">{editableMushroom[feature]}</span>
                  </div>
                </td>

                {/* Feature Label Column (Middle) */}
                <td className="px-4 py-3 text-[#203B5F] text-center font-nunito text-[16px] font-bold border-x border-gray-300 w-[40%]">
                  {feature
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .replace(/^./, (str) => str.toUpperCase())}
                </td>

                {/* Right Column (Compared Mushroom Data) */}
                <td className="px-4 py-3 text-gray-700 border-l border-gray-300 text-center w-[30%]">
                  {comparedMushroom[feature]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Edit Popup Modal */}
      {editFeature !== null && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold text-black mb-4">Edit</h2>
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              className="w-full p-2 border rounded-md text-black"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setEditFeature(null)}
                className="mr-3 px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MushroomComparisonTable;
