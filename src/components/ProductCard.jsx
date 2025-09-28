import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // Placeholder for unit/weight - ideally this would come from product data
  const displayUnit = product.unit || "1.0 kg";

  return (
    <Link
      to={`/products/${product.id}`}
      className="block border border-gray-200 rounded-lg shadow-md p-3 bg-white hover:shadow-lg transition-all duration-300 hover:border-gray-300 transform group relative flex flex-col"
    >
      {/* Heart Icon */}
      <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-2">
        <img
          src={product.main_image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details - stacked below image */}
      <div className="flex flex-col flex-grow">
        <h2 className="font-semibold text-lg text-gray-800 line-clamp-1">{product.name}</h2>


        {/* Price Display */}
        <div className="mt-2">
          <span className="text-xl font-bold text-gray-800">{product.price}.00 Br</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
