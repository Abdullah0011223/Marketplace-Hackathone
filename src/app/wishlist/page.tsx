"use client"; // ✅ Client Components ke liye zaroori hai

import { useState } from "react";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi"; // For remove icon

const WishlistPage = () => {
  // Sample wishlist data (In a real application, it would come from state or database)
  const initialWishlist = [
    { id: 1, title: "Elegant Sofa", image: "/images/singal-sofa.webp", price: "$499" },
    { id: 2, title: "Modern Coffee Table", image: "/images/coffee table.jpeg", price: "$199" },
    { id: 3, title: "Luxurious Armchair", image: "/images/armchair.jpeg", price: "$299" },
  ];

  const [wishlist, setWishlist] = useState(initialWishlist);

  // Handle removing item from wishlist
  const handleRemove = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-8">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-lg font-medium text-gray-600 mt-2">{item.price}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link href="/Shop">
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200">
                    View Item
                  </button>
                </Link>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 transition duration-200"
                  aria-label="Remove from wishlist"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
