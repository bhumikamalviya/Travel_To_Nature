import React, { useState } from "react";
import { Header } from "../componats/header";
import { Footer } from "../componats/footer";
import { Glaciers } from "../componats/glaciers";
import { Waterfalls } from "../componats/whaterfalls";

export function Planner() {
  const [category, setCategory] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState({ start: "", end: "" });
  const [travelers, setTravelers] = useState(1);

  const [itinerary, setItinerary] = useState([]);
  const [newActivity, setNewActivity] = useState("");

  // ✅ Checklist state
  const [checklist, setChecklist] = useState([
    { item: "Reusable Water Bottle", checked: false },
    { item: "Trekking Shoes", checked: false },
    { item: "Sunscreen", checked: false },
  ]);
  const [newChecklistItem, setNewChecklistItem] = useState("");

  // Categories + Sub-options
  const destinationOptions = {
    Mountains: ["Himalayas", "Mount Everest", "Matterhorn", "Mount Fuji", "Alps", "Kangchenjunga", "Rockies", "Andes"],
    Beaches: ["Goa", "Bali", "Maldives", "Bora Bora", "Bondi Beach", "Hawaii"],
    Forests: ["Amazon Rainforest", "Black Forest", "Sundarbans", "Daintree Rainforest", "Congo"],
    "National Parks": ["Jim Corbett", "Yellowstone", "Sirengeti", "Yosemite", "Banff", "Kruger"],
    Lakes: ["Lake Tahoe", "Dal Lake", "Victoria Lake", "Great Lakes"],
    "Desert Safari": ["Sahara", "Thar", "Atacama", "Kalahari", "Gobi", "Dubai Desert", "mojava"],
    Glaciers: ["Vatnajökull", "Perito Moreno", "Aletsch", "Fox", "Lambert", "Hubbart"],
    Waterfalls: ["Niagara", "Angel", "Iguazo", "Victoria", "Yosemite", "Plitviee"]
  };

  // Per-Day Costs
  const costPerDay = {
    Himalayas: 100, "Mount Everest": 200, Matterhorn: 170, "Mount Fuji": 140, Kangchenjunga: 120, Alps: 150, Rockies: 120, Andes: 130,
    Goa: 80, Bali: 120, Maldives: 200, Hawaii: 250, "Bora Bora": 120, "Bondi Beach": 100,
    "Amazon Rainforest": 180, "Black Forest": 140, Sundarbans: 100, Congo: 160, "Daintree Rainforest": 140,
    "Jim Corbett": 90, Yellowstone: 200, Banff: 170, Kruger: 190, Sirengeti: 70, Yosemite: 120,
    "Lake Tahoe": 110, "Dal Lake": 70, "Victoria Lake": 100, "Great Lakes": 150,
    Sahara: 130, Thar: 100, "Dubai Desert": 180, Kalahari: 140, Atacama: 80, Gobi: 130, mojava: 180,
    Vatnajökull:150, "Perito Moreno":170,Aletsch:190,fox:170,lambert:190,hubbart:200,
    Niagara:200,Angel:130,Iguazu:200,Victoria:150,Plitvice:160,
  };

  // Function to calculate days difference
  const calculateDays = () => {
    if (!dates.start || !dates.end) return 0;
    const start = new Date(dates.start);
    const end = new Date(dates.end);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays > 0 ? diffDays : 0;
  };

  // Final budget calculation
  const totalDays = calculateDays();
  const perDay = destination ? costPerDay[destination] || 0 : 0;
  const totalBudget = perDay * totalDays * travelers;

  // ✅ Toggle checklist item
  const toggleChecklist = (index) => {
    setChecklist(
      checklist.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // ✅ Delete checklist item
  const deleteChecklistItem = (index) => {
    setChecklist(checklist.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#e6e6e6] p-10">
        <h1 className="text-3xl font-bold text-center mt-20 mb-8 text-green-700">
          🌿 Travel to Nature - Planner
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Trip Details */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Trip Details</h2>

              {/* Category Dropdown */}
              <label className="block mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setDestination("");
                  setDates({ start: "", end: "" });
                  setTravelers(1);
                }}
                className="w-full border rounded-lg p-2 mb-4"
              >
                <option value="">-- Select Category --</option>
                {Object.keys(destinationOptions).map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* Destination Dropdown */}
              {category && (
                <>
                  <label className="block mb-2">Destination</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full border rounded-lg p-2 mb-4"
                  >
                    <option value="">-- Select Destination --</option>
                    {destinationOptions[category].map((dest, index) => (
                      <option key={index} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </>
              )}

              {/* Dates */}
              <label className="block mb-2">Dates</label>
              <div className="flex gap-2 mb-4">
                <input
                  type="date"
                  value={dates.start}
                  onChange={(e) => setDates({ ...dates, start: e.target.value })}
                  className="w-1/2 border rounded-lg p-2"
                />
                <input
                  type="date"
                  value={dates.end}
                  onChange={(e) => setDates({ ...dates, end: e.target.value })}
                  className="w-1/2 border rounded-lg p-2"
                />
              </div>

              {/* Travelers */}
              <label className="block mb-2">Travelers</label>
              <input
                key={category}
                type="number"
                min="1"
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Itinerary */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Itinerary</h2>
              {itinerary.length === 0 ? (
                <p className="text-gray-600">No activities added yet...</p>
              ) : (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {itinerary.map((activity, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{activity}</span>
                      <button
                        onClick={() =>
                          setItinerary(itinerary.filter((_, i) => i !== index))
                        }
                        className="text-red-500 hover:underline"
                      >
                        ✖
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter activity..."
                  value={newActivity}
                  onChange={(e) => setNewActivity(e.target.value)}
                  className="flex-1 border rounded-lg p-2"
                />
                <button
                  onClick={() => {
                    if (newActivity.trim()) {
                      setItinerary([...itinerary, newActivity]);
                      setNewActivity("");
                    }
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  + Add
                </button>
              </div>
            </div>

            {/* ✅ Packing Checklist */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Packing Checklist</h2>
              {checklist.length === 0 ? (
                <p className="text-gray-600">No items in checklist...</p>
              ) : (
                <ul className="space-y-2">
                  {checklist.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => toggleChecklist(index)}
                        />
                        <span
                          className={`${item.checked ? "line-through text-gray-500" : ""
                            }`}
                        >
                          {item.item}
                        </span>
                      </label>
                      <button
                        onClick={() => deleteChecklistItem(index)}
                        className="text-red-500 hover:underline"
                      >
                        ✖
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Add new item..."
                  value={newChecklistItem}
                  onChange={(e) => setNewChecklistItem(e.target.value)}
                  className="flex-1 border rounded-lg p-2"
                />
                <button
                  onClick={() => {
                    if (newChecklistItem.trim()) {
                      setChecklist([
                        ...checklist,
                        { item: newChecklistItem, checked: false },
                      ]);
                      setNewChecklistItem("");
                    }
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white shadow-lg rounded-xl p-6 h-90 flex items-center justify-center">
              {destination ? (
                <iframe
                  title="map"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "12px ", height: "300px" }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    destination
                  )}&output=embed`}
                ></iframe>
              ) : (
                <p className="text-gray-500">🗺️ Select a destination to view map</p>
              )}
            </div>

            {/* Budget Estimator */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Budget Estimator</h2>
              {destination ? (
                <>
                  <p className="text-gray-600">
                    {totalDays} days × {travelers} travelers × ${perDay} per day
                  </p>
                  <p className="text-lg font-bold text-green-700 mt-2">
                    Total: ${totalBudget}
                  </p>
                </>
              ) : (
                <p className="text-gray-600">Select destination & dates</p>
              )}
            </div>

            {/* Share / Download */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <button
                onClick={() => alert("📥 Your travel plan PDF will be downloaded soon!")}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-3"
              >
                📥 Download PDF
              </button>

              <button
                onClick={() => alert("🔗 Share link copied! You can send it to your friends.")}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                🔗 Share with Friends
              </button>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
