import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useWish } from "../context/WishContext";
import { Header } from "../componats/header";
import { Footer } from "../componats/footer";

export function MyFavourites() {
  const { likedItems, toggleLike } = useWish();

  // Delete all liked items
  const handleDeleteAll = () => {
    likedItems.forEach(item => toggleLike(item));
  };

  const renderCard = (mountain) => (
    <div
      key={mountain.id}
      className="bg-white w-90 shadow-lg rounded-lg overflow-hidden mt-10"
    >
      <div className="relative group">
        <img
          src={mountain.image}
          alt={mountain.name}
          className="w-full h-[220px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-t-lg"></div>

        {/* Like Button */}
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            className="bg-white py-1 px-2 rounded-lg shadow"
            onClick={() => toggleLike(mountain)}
          >
            {likedItems.some((i) => i.id === mountain.id) ? (
              <FaHeart size={20} className="text-red-500" />
            ) : (
              <FaRegHeart size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{mountain.name}</h2>
        <p className="text-green-600">{mountain.location}</p>
        <p className="mt-2 text-sm text-gray-700 italic">{mountain.description}</p>
        <p className="mt-2 text-sm font-medium text-green-600">
          Best Time: {mountain.best_time_to_visit}
        </p>

        {/* Learn More Button */}
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-green-700 hover:scale-105 transition-all duration-300"
          onClick={() => alert(`Learn more about ${mountain.name}`)}
        >
          Learn More
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#e6e6e6] px-6 py-4">
        {/* Heading + Delete All */}
       {/* Heading + Delete All */}
{likedItems.length > 0 ? (
  <div className="mt-[100px] mb-6 relative flex justify-center items-center">
    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 text-transparent 
    bg-clip-text drop-shadow-lg text-center">
      Wishlist
    </h1>

    <button
      className="absolute right-0 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-all duration-300"
      onClick={handleDeleteAll}
    >
      Delete All
    </button>
  </div>
) : (
  <div className="mt-[100px] mb-6 flex flex-col items-center">
    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 text-transparent 
    bg-clip-text drop-shadow-lg text-center">
      Wishlist
    </h1>
    <p className="mt-40 text-xl text-gray-600 ">
      Your wishlist is empty, start adding your favorite places!
    </p>
  </div>
)}

        {/* Grid */}
        {likedItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {likedItems.map((item) => renderCard(item))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
