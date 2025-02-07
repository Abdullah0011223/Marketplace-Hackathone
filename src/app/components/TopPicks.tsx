import React from 'react';
import Underline from './Underline';
import { UseCartContext } from '../Context/CartContext';

interface ProductItem {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
}

const TopPicks: React.FC = () => {
  const { data } = UseCartContext();

  return (
    <div className="min-h-[70vh] py-12 md:py-[5rem] bg-gray-50 w-screen flex flex-col gap-4 px-6 md:px-8 lg:px-16">
      <h1 className="capitalize text-3xl font-semibold tracking-wider text-center text-blue-800">
        Top Picks for You
      </h1>
      <p className="text-center tracking-wider font-medium text-lg text-gray-700">
        Discover unique pieces with our curated selection of top products.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-3 md:mt-[2.8rem]">
        {data.slice(0, 4).map((value: ProductItem, index: number) => (
          <div
            key={index}
            className="border border-gray-300 shadow-lg bg-white rounded-lg overflow-hidden p-3 w-[90%] mx-auto transition-all duration-300"
          >
            {/* Image Section */}
            <div className="aspect-[3/4] relative rounded-md bg-gray-100 w-[100%] mx-auto">
              <img
                src={value.image}
                alt={value.name}
                onError={(e) => (e.currentTarget.src = '/default-image.jpg')} // Fallback for missing images
                className="object-cover w-full h-full"
              />
              {value.discount && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {value.discount}% Off
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-3 text-center">
              <h2 className="text-md font-semibold text-blue-900">{value.name}</h2>
              <p className="text-sm font-semibold text-gray-800">
                Rs. {value.price?.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="w-full mt-[2rem] flex items-center justify-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
          View More
        </button>
      </div>
    </div>
  );
};

export default TopPicks;
