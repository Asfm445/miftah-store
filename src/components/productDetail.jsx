// src/pages/ProductDetailPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const product = products.find(prod => prod.id == id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => setCurrentImage(prev => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImage(prev => (prev - 1 + product.images.length) % product.images.length);

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 text-sm">
        ← Back to Products
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
          
          {/* Image Section */}
          <div className="md:w-2/5 flex flex-col items-center">
            <div className="relative w-full h-48 md:h-80 bg-gray-50 rounded-lg overflow-hidden mb-3">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="flex space-x-2 overflow-x-auto py-1 px-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-md overflow-hidden border-2 ${
                    currentImage === idx ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-3/5 mt-4 md:mt-0">
            <div className="mb-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4 text-base md:text-lg">{product.description}</p>

            <div className="flex items-center mb-4">
              <span className="text-xl md:text-2xl font-bold text-blue-700">{product.price} Br</span>
            </div>

            {product.variants?.length > 0 && (
              <div className="mb-5">
                <h2 className="font-semibold text-gray-800 mb-2 text-base md:text-lg">Available Options:</h2>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {product.variants.map((v, idx) => (
                    <div key={idx} className="p-2 md:p-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-sm md:text-base">
                      {v.description}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex">
              <a
                href="tel:+1234567890"
                className="bg-green-600 text-white font-medium py-2.5 md:py-3 px-4 md:px-6 rounded-lg flex-1 text-center text-base md:text-lg"
              >
                Call to Order: +1 (234) 567-890
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
