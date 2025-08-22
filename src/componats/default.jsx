import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Destinations } from "../pages/destinations";
import defaultData from "../../src/data/default.json"; // 👈 yahan aapka combined JSON
import { useWish } from "../context/WishContext";

export function Default() {
  const { likedItems, wishlistItems, toggleLike, toggleWishlist } = useWish();
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message, type = "default") => {
    const id = Date.now();
    const newNotification = { id, message, type, progress: 100 };
    setNotifications((prev) => [...prev, newNotification]);
    let duration = 5000;
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

  const handleWishlist = (place) => {
    toggleWishlist(place);
    if (wishlistItems.some((i) => i.id === place.id)) {
      showNotification(`Removed ${place.name} from wishlist`, "remove");
    } else {
      showNotification(`Added ${place.name} to wishlist ❤`, "add");
    }
  };

  return (
    <>
      {/* Destinations
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <Destinations data={defaultData} />
      </div> */}

      {/* Notifications */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-2 z-50">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="bg-blue-600 text-white px-3 py-2 rounded-md shadow-lg w-56 text-sm"
          >
            {n.message}
            <div className="h-1 bg-blue-800 rounded overflow-hidden">
              <div
                style={{ width: `${n.progress}%` }}
                className="h-full bg-white transition-all duration-50"
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="px-6 py-4 grid grid-cols-1 bg-[#e6e6e6] sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {defaultData.map((place) => (
          <div
            key={place.id}
            className="bg-white w-90 shadow-lg rounded-lg overflow-hidden mt-10"
          >
            <div className="relative group">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-[220px] object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-t-lg"></div>

              {/* Buttons */}
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {/* Like */}
                <button
                  className="bg-white py-1 px-2 rounded-lg shadow"
                  onClick={() => toggleLike(place)}
                >
                  {likedItems.some((i) => i.id === place.id) ? (
                    <FaHeart size={20} className="text-red-500" />
                  ) : (
                    <FaRegHeart size={20} />
                  )}
                </button>

                {/* Wishlist */}
                <button
                  className="bg-white py-1 px-2 rounded-lg shadow"
                  onClick={() => handleWishlist(place)}
                >
                  <FaPlus
                    size={20}
                    className={
                      wishlistItems.some((i) => i.id === place.id)
                        ? "text-green-600"
                        : ""
                    }
                  />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="p-4">
              <h2 className="text-xl font-bold">{place.name}</h2>
              <p className="text-green-600">{place.location}</p>
              <p className="mt-2 text-sm text-gray-700 italic">
                {place.description}
              </p>
              {place.best_time_to_visit && (
                <p className="mt-2 text-sm font-medium text-green-600">
                  Best Time: {place.best_time_to_visit}
                </p>
              )}
              <button
                className="mt-4 px-2 py-1 bg-blue-600 text-white rounded-lg shadow hover:bg-green-700 hover:scale-105 transition-all duration-300"
                onClick={() => alert(`Learn more about ${place.name}`)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
