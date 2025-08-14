import React, { createContext, useState, useContext, useEffect } from "react";

const WishContext = createContext();

export const WishProvider = ({ children }) => {
  // Local storage se data load karo
  const [likedItems, setLikedItems] = useState(() => {
    const storedLikes = localStorage.getItem("likedItems");
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlistItems");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // Liked items ko localStorage me save karo jab bhi change ho
  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  // Wishlist items ko localStorage me save karo jab bhi change ho
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const toggleLike = (item) => {
    setLikedItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  const toggleWishlist = (item) => {
    setWishlistItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  return (
    <WishContext.Provider
      value={{ likedItems, wishlistItems, toggleLike, toggleWishlist }}
    >
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => useContext(WishContext);
