// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link 
      to={`/products/${product.id}`}
      className="block border border-gray-200 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-all duration-300 hover:border-gray-300 hover:scale-[1.01] transform group"
    >
      <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-3">
        <img
          src={product.main_image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {product.category}
        </span>
      </div>
      
      <h2 className="font-semibold text-lg text-gray-800 line-clamp-1">{product.name}</h2>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
      
      <div className="mt-3 flex items-center">
        <span className="text-lg font-bold text-blue-700">${product.price}</span>
      </div>
      
      <div className="mt-2 flex justify-between items-center">
        <p className="text-gray-500 text-xs font-medium">Seller: {product.seller}</p>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          {product.variants.length} options
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;