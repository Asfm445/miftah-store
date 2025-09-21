// src/pages/ProductDetailPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const product = products.find(prod => prod.id == id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link 
            to="/products" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link 
        to="/products" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 text-sm"
      >
        ← Back to Products
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex gap-6 p-6">
          {/* Image Section with Navigation Arrows */}
          <div className="md:w-2/5">
            <div className="relative w-full h-80 bg-gray-50 rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-colors"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-colors"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="flex space-x-2 overflow-x-auto py-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${currentImage === idx ? 'border-blue-500' : 'border-gray-200'} transition-colors`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-3/5">
            <div className="mb-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4 text-lg">{product.description}</p>
            
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-blue-700">${product.price}</span>
              {/* Removed "In Stock" status */}
            </div>

            <div className="mb-6">
              <h2 className="font-semibold text-gray-800 mb-3 text-lg">Available Options:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.variants && product.variants.map((v, idx) => (
                  <div
                    key={idx}
                    className="text-left p-3 rounded-lg border-2 border-gray-200 bg-gray-50" // Changed to div, removed interactive classes
                  >
                    <span className="text-gray-800">
                      {v.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mb-6">
              <span
                className="bg-green-600 text-white font-medium py-3 px-6 rounded-lg flex-1 text-center text-lg"
              >
                Call to Order: +1 (234) 567-890
              </span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;