import React from "react";
import { useWish } from "../context/WishContext";

export function MyFavourites() {
  const { likedItems, wishlistItems } = useWish();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Liked Mountains</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {likedItems.map((item) => (
          <div key={item.id} className="bg-white shadow rounded p-4">
            <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
            <h2 className="font-bold mt-2">{item.name}</h2>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mt-8 mb-4">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white shadow rounded p-4">
            <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
            <h2 className="font-bold mt-2">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
