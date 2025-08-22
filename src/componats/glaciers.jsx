// src/components/Glaciers.jsx
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Destinations } from "../pages/destinations";
import glaciers from "../../src/data/glaciers.json";
import { useWish } from "../context/WishContext";
import { Footer } from "./footer";

export function Glaciers() {
  const { likedItems, toggleLike } = useWish();
  const [notifications, setNotifications] = useState([]);

  // 🔔 Notification function (color-coded like Waterfalls)
  const showNotification = (message, type = "default") => {
    const id = Date.now();
    const newNotification = { id, message, type, progress: 100 };
    setNotifications((prev) => [...prev, newNotification]);

    let duration = 3000; // 3s
    let step = 100 / (duration / 50);

    const interval = setInterval(() => {
      setNotifications((prev) =>
        prev.map((n) =>
          n.id === id ? { ...n, progress: Math.max(n.progress - step, 0) } : n
        )
      );
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  };

 

  // ⭐ Like Handler
  const handleLike = (glacier) => {
    if (likedItems.some((i) => i.id === glacier.id)) {
      showNotification(`Removed ${glacier.name} from wishlist`, "remove");
    } else {
      showNotification(`Added ${glacier.name} to wishlist ❤`, "add");
    }
    toggleLike(glacier);
  };

  return (
    <>
      {/* Destinations Navbar */}
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <Destinations data={glaciers} />
      </div>

      {/* Notifications */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-2 z-50">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`px-3 py-2 rounded-md shadow-lg w-56 text-sm
              ${n.type === "add" ? "bg-[#2187ab] text-white" : ""}
              ${n.type === "remove" ? "bg-[#d26676] text-white" : ""}
              ${n.type === "default" ? "bg-blue-100 text-blue-700" : ""}
            `}
          >
            {n.message}
            <div className="h-1 bg-white/50 rounded overflow-hidden mt-1">
              <div
                style={{ width: `${n.progress}%` }}
                className={`h-full transition-all duration-50
                  ${n.type === "add" ? "bg-white" : ""}
                  ${n.type === "remove" ? "bg-white" : ""}
                  ${n.type === "default" ? "bg-blue-500" : ""}
                `}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="px-6 py-4 grid grid-cols-1 bg-[#e6e6e6] sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {glaciers.map((glacier) => (
          <div
            key={glacier.id}
            className="bg-white w-90 shadow-lg rounded-lg overflow-hidden mt-10"
          >
            {/* Image Section */}
            <div className="relative group">
              <img
                src={glacier.image}
                alt={glacier.name}
                className="w-full h-[220px] object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-t-lg"></div>

              {/* Like & Wishlist Buttons */}
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {/* Like */}
                <button
                  className="bg-white py-1 px-2 rounded-lg shadow"
                  onClick={() => handleLike(glacier)}
                >
                  {likedItems.some((i) => i.id === glacier.id) ? (
                    <FaHeart size={20} className="text-red-500" />
                  ) : (
                    <FaRegHeart size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* Details Section */}
            <div className="p-4">
              <h2 className="text-xl font-bold">{glacier.name}</h2>
              <p className="text-green-600">{glacier.location}</p>
              <p className="mt-2 text-sm text-gray-700 italic">
                {glacier.description}
              </p>
              <p className="mt-2 text-sm font-medium text-green-600">
                Best Time: {glacier.best_time_to_visit}
              </p>

              <button
                className="mt-4 px-2 py-1 bg-blue-600 text-white rounded-lg shadow hover:bg-green-700 hover:scale-105 transition-all duration-300"
                onClick={() => alert(`Learn more about ${glacier.name}`)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
