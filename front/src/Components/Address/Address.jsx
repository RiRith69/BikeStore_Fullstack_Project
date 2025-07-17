import { useState } from "react";

const Address = ({ onSave }) => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [khan, setKhan] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [district, setDistrict] = useState("");

  const provinces = ["Phnom Penh", "Kandal", "Siem Reap", "Battambang"];

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setKhan("");
    setStreetNo("");
    setDistrict("");
  };

  const handleSave = () => {
    const addressData =
      selectedProvince === "Phnom Penh"
        ? {
            province: selectedProvince,
            khan,
            streetNo,
          }
        : {
            province: selectedProvince,
            district,
          };

    onSave(addressData);
  };

  return (
    <div className="bg-white border rounded shadow text-sm w-full z-10 mt-2 p-4">
      <div className="mb-2 font-medium text-gray-700">Choose Province/City:</div>
      <div className="space-y-2">
        {provinces.map((province) => (
          <label key={province} className="flex items-center space-x-2">
            <input
              type="radio"
              name="province"
              value={province}
              checked={selectedProvince === province}
              onChange={handleProvinceChange}
            />
            <span>{province}</span>
          </label>
        ))}
      </div>

      {selectedProvince === "Phnom Penh" ? (
        <div className="mt-4 space-y-2">
          <input
            type="text"
            placeholder="Khan"
            value={khan}
            onChange={(e) => setKhan(e.target.value)}
            className="w-full border p-2 rounded text-sm"
          />
          <input
            type="text"
            placeholder="Street No."
            value={streetNo}
            onChange={(e) => setStreetNo(e.target.value)}
            className="w-full border p-2 rounded text-sm"
          />
        </div>
      ) : selectedProvince ? (
        <div className="mt-4">
          <input
            type="text"
            placeholder="District"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full border p-2 rounded text-sm"
          />
        </div>
      ) : null}

      <div className="mt-4 text-right">
        <button
          onClick={handleSave}
          className="px-4 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Address;
