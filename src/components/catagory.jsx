// components/CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "../data.js";

const CategoryPage = () => {
    console.log(products)
  const { category } = useParams(); // get category from path
  const filteredProducts =category=="all"?products: products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 capitalize text-center">
        {category} Products
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products found.</p>
      )}
    </div>
  );
};

export default CategoryPage;
