import { useState } from "react";

const ComparisonTable = ({ userMushroom, comparedMushroom }) => {
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

                <td className="px-4 py-3 text-[#203B5F] text-center font-nunito text-[16px] font-bold border-x border-gray-300 w-[40%]">
                  {feature
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .replace(/^./, (str) => str.toUpperCase())}
                </td>

                <td className="px-4 py-3 text-gray-700 border-l border-gray-300 text-center w-[30%]">
                  {comparedMushroom[feature]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {editFeature !== null && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-black">Edit</h2>
              <input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                className="flex-grow p-2 bg-gray-100 text-black rounded-md border-none outline-none"
              />
            </div>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => setEditFeature(null)}
                className="font-bold text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="font-bold text-green-600 hover:text-green-800 ml-4"
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

export default ComparisonTable;
